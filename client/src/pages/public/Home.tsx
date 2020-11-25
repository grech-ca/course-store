import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography, Box, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';

import Layout from 'components/layout/Layout';
import ProductCard from 'components/product/ProductCard';

import useHome from 'hooks/useHome';

import { Type as Category, Product } from 'graphql/generated';

const useStyles = makeStyles(theme => ({
  categories: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridAutoRows: 'initial',
    gridGap: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  heading: {
    marginBottom: theme.spacing(3),
  },
  products: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridAutoRows: 'initial',
    gridGap: theme.spacing(3),
  },
}));

const Home: FC = () => {
  const classes = useStyles();

  const { categories, products } = useHome();

  return (
    <Layout header sidebar>
      <Typography variant="h5" className={classes.heading}>
        Категории товаров
      </Typography>
      <Box className={classes.categories}>
        {categories.map(({ _id, name, photo }: Category) => (
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
        {products.map(({ _id, name, description, photos, price, quantity }: Product) => (
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
    </Layout>
  );
};

export default Home;
