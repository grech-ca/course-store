import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import { Paper, ButtonBase } from '@material-ui/core';

const ROUTES = [
  {
    route: '/',
    label: 'Главная',
  },
  {
    route: '/product',
    label: 'Товары',
  },
];

const useStyles = makeStyles(theme => ({
  paper: {
    width: 280,
    height: '100%',
    borderRadius: 0,
    padding: theme.spacing(2, 0),
    paddingTop: theme.spacing(4.5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  buttonBase: {
    fontSize: 18,
    padding: theme.spacing(2, 4),
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}));

const Sidebar: FC = () => {
  const classes = useStyles();

  const { push } = useHistory();

  return (
    <Paper className={classes.paper}>
      {ROUTES.map(({ route, label }) => (
        <ButtonBase className={classes.buttonBase} key={route} onClick={() => push(route)}>
          {label}
        </ButtonBase>
      ))}
    </Paper>
  );
};

export default Sidebar;
