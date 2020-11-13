import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
  },
});

const CartPlaceholder: FC = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.message}>Корзина пуста</Typography>
    </Paper>
  );
};

export default CartPlaceholder;
