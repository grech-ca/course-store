import React, { FC, useState, createContext, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Box, TablePagination, Card, CardContent, CardActions } from '@material-ui/core';

import ProductCard from 'components/product/ProductCard';
import ProductsFilter from 'components/product/ProductsFilter';

import { useProductsQuery, FilterFindManyProductInput, SortFindManyProductInput } from 'graphql/generated';

type Props = {
  cart?: boolean;
  baseUrl: string;
};

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
  },
  products: {
    display: 'grid',
    flexDirection: 'column',
    gridTemplateColumns: 'repeat(5, 200px)',
    gridAutoRows: 'initial',
    gridGap: theme.spacing(2),
    minHeight: 800,
    padding: theme.spacing(3),
  },
}));

export type ProductsContext = {
  sort?: SortFindManyProductInput;
  setSort: (value: SortFindManyProductInput) => void;
  filter?: FilterFindManyProductInput;
  setFilter: (value: FilterFindManyProductInput) => void;
};

export const ProductsContext = createContext<ProductsContext>({
  sort: undefined,
  setSort: () => null,
  filter: undefined,
  setFilter: () => null,
});

const Products: FC<Props> = ({ cart, baseUrl }) => {
  const classes = useStyles();
  const [sort, setSort] = useState<SortFindManyProductInput>();
  const [filter, setFilter] = useState<FilterFindManyProductInput>();
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);

  const { data } = useProductsQuery({
    variables: {
      page,
      perPage: limit,
      filter,
      sort,
    },
  });
  const { productsPagination } = data || {};
  const { items: products = [], pageInfo } = productsPagination || {};
  const { pageCount = 1 } = pageInfo || {};

  const handlePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleLimit = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <ProductsContext.Provider value={{ sort, setSort, filter, setFilter }}>
      <Box className={classes.wrapper}>
        <Card>
          <CardContent>
            <Box className={classes.products}>
              {products?.map(({ name, _id, description, quantity, price, photos }) => (
                <ProductCard
                  key={_id}
                  name={name}
                  description={description}
                  photo={photos?.[0] || ''}
                  price={price}
                  quantity={quantity}
                  _id={_id}
                  path={`${baseUrl}/${_id as string}`}
                  cart={cart}
                />
              ))}
            </Box>
          </CardContent>
          <CardActions>
            <TablePagination
              component="div"
              count={pageCount || 1}
              page={page}
              onChangePage={handlePage}
              rowsPerPage={limit}
              onChangeRowsPerPage={handleLimit}
              labelRowsPerPage="Товаров на странице"
              rowsPerPageOptions={[10, 20, 30]}
            />
          </CardActions>
        </Card>
        <ProductsFilter />
      </Box>
    </ProductsContext.Provider>
  );
};

export default Products;
