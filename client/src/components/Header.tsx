import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar, Container, Box, Typography, IconButton } from '@material-ui/core';
import { ShoppingCart, Notifications, AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    fontWeight: 900,
    fontSize: 24,
  },
  grow: {
    flex: 1,
  },
  iconButton: {
    marginLeft: theme.spacing(1),
    color: '#fff',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Container>
          <Box className={classes.root}>
            <Typography className={classes.logo}>G-Store</Typography>
            <div className={classes.grow} />
            <IconButton className={classes.iconButton}>
              <ShoppingCart />
            </IconButton>
            <IconButton className={classes.iconButton}>
              <Notifications />
            </IconButton>
            <IconButton className={classes.iconButton}>
              <AccountCircle />
            </IconButton>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
