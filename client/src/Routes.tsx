import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/public/Home';
import Cart from 'pages/public/Cart';
import Product from 'pages/public/Product';
import Products from 'pages/public/ProductsPage';
import Admin from 'pages/private/admin/Admin';

const Routes: FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/cart" component={Cart} />
    <Route path="/admin" component={Admin} />
    <Route path="/product/:id" component={Product} />
    <Route exact path="/product" component={Products} />
  </Switch>
);

export default Routes;
