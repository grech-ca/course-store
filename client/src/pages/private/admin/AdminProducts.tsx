import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import { Box, Paper, Typography } from '@material-ui/core';

import ProductCard from 'components/common/ProductCard';

import productsQuery from 'graphql/queries/productsQuery';

import { Product } from 'graphql/types';

type QueryData = null | {
  productMany: Product[];
};

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  products: {
    display: 'grid',
    flexDirection: 'column',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridAutoRows: 'initial',
    gridGap: theme.spacing(2),
    flex: 4,
    minHeight: 800,
    padding: theme.spacing(3),
  },
  filter: {
    padding: theme.spacing(3),
    height: 500,
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  filterTitle: {
    fontWeight: 700,
    fontSize: 20,
  },
}));

const AdminProducts: FC = () => {
  const classes = useStyles();

  const history = useHistory();

  const { data } = useQuery<QueryData>(productsQuery);

  const goto = (path: string) => {
    history.push(path);
  };

  return (
    <Box className={classes.wrapper}>
      <Paper className={classes.products}>
        {data?.productMany.map(({ name, _id, description, quantity, price, photos }) => (
          <ProductCard
            key={_id}
            name={name}
            description={description}
            photo={photos?.[0] || ''}
            price={price}
            quantity={quantity}
            _id={_id}
            onClick={() => goto(`/admin/products/${_id as string}`)}
          />
        ))}
      </Paper>
      <Paper className={classes.filter}>
        <Typography className={classes.filterTitle}>Фильтр</Typography>
      </Paper>
    </Box>
  );
};

export default AdminProducts;
