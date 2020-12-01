import React, { FC, Fragment, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

import { Typography } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import { getRouteLabel } from 'helpers/constants';

import AdminHome from 'pages/private/admin/AdminHome';
import AdminCategories from 'pages/private/admin/AdminCategories';
import Products from 'components/product/Products';
import AdminProduct from 'pages/private/admin/AdminProduct';
import AdminOrders from 'pages/private/admin/AdminOrders';

const ADMIN_PATH = '/admin/';

const useStyles = makeStyles(theme => ({
  route: {
    marginBottom: theme.spacing(2),
  },
}));

const AdminRoutes: FC = () => {
  const classes = useStyles();

  const { pathname } = useLocation();

  const routeName = useMemo(() => getRouteLabel(pathname), [pathname]);

  return (
    <Fragment>
      <Typography variant="h4" className={classes.route}>
        {routeName}
      </Typography>
      <Switch>
        <Route exact path={ADMIN_PATH} component={AdminHome} />
        <Route path={`${ADMIN_PATH}categories`} component={AdminCategories} />
        <Route exact path={`${ADMIN_PATH}product`} component={() => <Products baseUrl={`${ADMIN_PATH}product`} />} />
        <Route path={`${ADMIN_PATH}product/:id`} component={AdminProduct} />
        <Route path={`${ADMIN_PATH}product/create`} component={() => <AdminProduct create />} />
        <Route exact path={`${ADMIN_PATH}order`} component={() => <AdminOrders />} />
      </Switch>
    </Fragment>
  );
};

export default AdminRoutes;
