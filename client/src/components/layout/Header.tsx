import React, { useMemo, FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar, Box, Typography, IconButton, Badge } from '@material-ui/core';
import { ShoppingCart, Notifications, AccountCircle } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import useCart from 'hooks/useCart';
import Spacer from 'components/common/Spacer';

type CartItem = {
  id: string;
  date: string;
  quantity: number;
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    fontWeight: 900,
    fontSize: 24,
    textDecoration: 'none',
    color: '#fff',
  },
  iconButton: {
    marginLeft: theme.spacing(1),
    color: '#fff',
  },
}));

const Header: FC = () => {
  const classes = useStyles();

  const { cart } = useCart();

  const totalInCart = useMemo<number>(
    () => cart.reduce((total: number, current: CartItem) => total + current.quantity, 0),
    [cart],
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Box className={classes.root}>
          <Typography component={Link} to="/" className={classes.logo}>
            G-Store
          </Typography>
          <Spacer />
          <IconButton className={classes.iconButton} component={Link} to="/cart">
            <Badge color="secondary" badgeContent={totalInCart}>
              <ShoppingCart />
            </Badge>
          </IconButton>
          <IconButton className={classes.iconButton}>
            <Notifications />
          </IconButton>
          <IconButton className={classes.iconButton}>
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
