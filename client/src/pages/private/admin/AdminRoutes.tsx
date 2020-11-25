import React, { FC, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import AdminHome from 'pages/private/admin/AdminHome';
import AdminCategories from 'pages/private/admin/AdminCategories';
import Products from 'components/product/Products';
import AdminProduct from 'pages/private/admin/AdminProduct';

const ADMIN_PATH = '/admin/';

const useStyles = makeStyles(theme => ({
  route: {
    marginBottom: theme.spacing(2),
  },
}));

const AdminRoutes: FC = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Typography variant="h4" className={classes.route}>
        Something
      </Typography>
      <Switch>
        <Route exact path={ADMIN_PATH} component={AdminHome} />
        <Route path={`${ADMIN_PATH}categories`} component={AdminCategories} />
        <Route exact path={`${ADMIN_PATH}products`} component={Products} />
        <Route path={`${ADMIN_PATH}products/:id`} component={AdminProduct} />
      </Switch>
    </Fragment>
  );
};

export default AdminRoutes;
