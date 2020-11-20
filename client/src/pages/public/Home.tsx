import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';

import { Typography, Box, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';

import Layout from 'components/layout/Layout';
import ProductCard from 'components/product/ProductCard';

import typesQuery from 'graphql/queries/homeQuery';

import { Type, Product } from 'graphql/types';

type QueryData = {
  typeMany: Type[];
  productMany: Product[];
};

const useStyles = makeStyles(theme => ({
  categories: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridAutoRows: 'initial',
    gridGap: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  categoriesSection: {
    marginTop: theme.spacing(5),
  },
  heading: {
    marginBottom: theme.spacing(3),
  },
  products: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridAutoRows: 'initial',
    gridGap: theme.spacing(3),
  },
}));

const Home: FC = () => {
  const classes = useStyles();

  const { data } = useQuery<QueryData>(typesQuery);

  return (
    <Layout header sidebar>
      <Box className={classes.categoriesSection}>
        <Typography variant="h5" className={classes.heading}>
          Категории товаров
        </Typography>
        <Box className={classes.categories}>
          {data?.typeMany.slice(0, 4).map(({ _id, name, photo }: Type) => (
            <Card key={_id}>
              <CardActionArea>
                <CardMedia component="img" src={photo || undefined} height="200" />
                <CardContent>
                  <Typography>{name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
        <Typography variant="h5" className={classes.heading}>
          Товары
        </Typography>
        <Box className={classes.products}>
          {data?.productMany.map(({ _id, name, description, photos, price, quantity }: Product) => (
            <ProductCard
              key={_id}
              _id={_id}
              photo={photos[0]}
              name={name}
              description={description}
              price={price}
              quantity={quantity}
              cart
            />
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
