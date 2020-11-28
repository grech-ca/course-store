import React, { FC, useState, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Container, Box, Paper, Typography, Divider, TextField, Button } from '@material-ui/core';

import useCart from 'hooks/useCart';

import Layout from 'components/layout/Layout';
import CartCard from 'components/cart/CartCard';
import CartPlaceholder from 'components/cart/CartPlaceholder';

import { Product } from 'graphql/generated';

const useStyles = makeStyles(theme => ({
  heading: {
    marginTop: theme.spacing(2),
    fontSize: 24,
    fontWeight: 700,
  },
  wrapper: {
    marginTop: theme.spacing(2),
    display: 'flex',
  },
  cartItems: {
    flex: 3,
    display: 'grid',
    gridAutoRows: 150,
    gridGap: theme.spacing(2),
  },
  sideColumn: {
    flex: 1,
  },
  form: {
    marginLeft: theme.spacing(2),
    padding: theme.spacing(2),
    height: 'fit-content',
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
  formSection: {
    margin: theme.spacing(2, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  cost: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(1, 0),
  },
  total: {
    fontSize: 20,
    fontWeight: 700,
  },
  phone: {
    marginBottom: theme.spacing(2),
  },
}));

const Cart: FC = () => {
  const classes = useStyles();

  const { findItemInCartById, products, productsCost, delieverCost } = useCart();

  const [phone, setPhone] = useState<string>('');

  const handlePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(`+8${e.target.value.slice(2, 12)}`);
  };

  return (
    <Layout header>
      <Container>
        <Typography className={classes.heading}>Корзина</Typography>
        <Box className={classes.wrapper}>
          <Box className={classes.cartItems}>
            {products.map(({ _id, name, description, photos, price, category, quantity }: Product) => (
              <CartCard
                key={_id}
                _id={_id}
                name={name}
                description={description}
                photo={photos[0]}
                price={price}
                type={category?.name}
                quantity={Math.min(findItemInCartById(_id)?.quantity || 0, quantity)}
                maxQuantity={quantity}
              />
            ))}
            {!products.length && <CartPlaceholder />}
          </Box>
          <Box className={classes.sideColumn}>
            <Paper className={classes.form}>
              <Typography className={classes.formTitle}>Сумма заказа</Typography>
              <Box className={classes.formSection}>
                <Typography className={classes.cost}>
                  <Typography component="span">Стоимость</Typography>
                  <Typography component="span">{productsCost} руб.</Typography>
                </Typography>
                <Typography className={classes.cost}>
                  <Typography component="span">Доставка</Typography>
                  <Typography component="span">{delieverCost ? `${delieverCost} руб.` : 'Бесплатно'}</Typography>
                </Typography>
              </Box>
              <Divider />
              <Box className={classes.formSection}>
                <Typography className={classes.cost}>
                  <Typography component="span">К оплате</Typography>
                  <Typography component="span" className={classes.total}>
                    {productsCost + delieverCost} руб.
                  </Typography>
                </Typography>
              </Box>
              <Box className={classes.formSection}>
                <TextField
                  size="small"
                  className={classes.phone}
                  type="tel"
                  variant="outlined"
                  label="Телефон"
                  placeholder="+8"
                  value={phone}
                  onChange={handlePhone}
                />
                <Button variant="contained" color="primary">
                  Перейти к оплате
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Cart;
