import React, { FC, useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Container, Paper, Box, Typography, Grid, Divider, IconButton, TextField, Button } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import useProduct from 'hooks/useProduct';
import useCart from 'hooks/useCart';
import useViews from 'hooks/useViews';

import Layout from 'components/layout/Layout';
import ProductGallery from 'components/product/ProductGallery';
import ProductCard from 'components/product/ProductCard';

import { Product } from 'graphql/types';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    padding: theme.spacing(2, 0),
  },
  main: {
    flex: 5,
    padding: theme.spacing(2),
    display: 'flex',
  },
  secondary: {
    flex: 1,
    marginLeft: theme.spacing(2),
  },
  heading: {
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  name: {
    fontSize: 'inherit',
    fontWeight: 700,
  },
  category: {
    color: '#ccc',
    fontSize: 'inherit',
    '&:before': {
      content: '"–"',
      margin: theme.spacing(0, 1),
    },
  },
  quantity: {
    color: '#ccc',
    marginLeft: theme.spacing(2),
  },
  price: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  form: {},
  counter: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(1, 0),
  },
  counterValue: {
    fontSize: 18,
    fontWeight: 700,
    color: '#555',
    margin: theme.spacing(0, 1),
    width: 50,
    '& input': {
      textAlign: 'center',
    },
  },
  actions: {
    display: 'flex',
    margin: theme.spacing(2, 0),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  button: {
    padding: theme.spacing(0.9, 3),
    fontWeight: 700,
    '& + &': {
      marginLeft: theme.spacing(1.5),
    },
  },
  recommended: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridRowGap: theme.spacing(2),
  },
}));

const ProductPage: FC = () => {
  const classes = useStyles();

  const [count, setCount] = useState<number | undefined>(1);

  const { makeSeen } = useViews();
  const { addToCart } = useCart();
  const { data, recommended } = useProduct();
  const { _id, name, type, description, quantity, price, photos = [] } = data || {};

  const handleCount = (value: number) => {
    if (!quantity) return;

    const newValue = (count || 0) + value;

    if (newValue < 1) return setCount(1);
    if (newValue > quantity) return setCount(quantity);

    return setCount(newValue);
  };

  const validateCount = () => {
    if (typeof count !== 'number') setCount(1);
  };

  const handleChangeCount = (e: ChangeEvent<HTMLInputElement>) => {
    if (!quantity) return;

    const newValue = Math.abs(parseInt(e.target.value)) || undefined;

    if (newValue && newValue > quantity) return setCount(quantity);

    return setCount(newValue);
  };

  const handleCountSubmit = (e: FormEvent) => {
    e.preventDefault();

    addToCart(_id, count || 1);
  };

  useEffect(() => {
    if (_id) makeSeen(_id);
  }, [_id, makeSeen]);

  return (
    <Layout header>
      <Container className={classes.wrapper}>
        <Paper className={classes.main}>
          <Grid container spacing={10}>
            <Grid item md={3}>
              <ProductGallery photos={photos} />
            </Grid>
            <Grid item md={9}>
              <Box className={classes.heading}>
                <Typography className={classes.name}>{name}</Typography>
                {type && (
                  <Typography component="span" className={classes.category}>
                    {type.name}
                  </Typography>
                )}
              </Box>
              <Divider className={classes.divider} />
              <Typography className={classes.price}>{price} руб.</Typography>
              <Typography>Количество:</Typography>
              <Box component="form" onSubmit={handleCountSubmit} className={classes.form}>
                <Box className={classes.counter}>
                  <IconButton size="small" onClick={() => handleCount(-1)}>
                    <RemoveIcon />
                  </IconButton>
                  <TextField
                    className={classes.counterValue}
                    onBlur={validateCount}
                    value={count}
                    onChange={handleChangeCount}
                  />
                  <IconButton size="small" onClick={() => handleCount(1)}>
                    <AddIcon />
                  </IconButton>
                  <Typography className={classes.quantity}>{quantity} шт.</Typography>
                </Box>
                <Box className={classes.actions}>
                  <Button variant="contained" color="secondary" className={classes.button}>
                    Купить сейчас
                  </Button>
                  <Button type="submit" variant="contained" color="primary" className={classes.button}>
                    Добавить в корзину
                  </Button>
                </Box>
              </Box>
              <Typography>{description}</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Box className={classes.secondary}>
          <Box className={classes.recommended}>
            {recommended?.map(({ _id, name, description, photos, price, quantity }: Product) => (
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
      </Container>
    </Layout>
  );
};

export default ProductPage;
