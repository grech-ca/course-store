import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/public/Home';
import Cart from 'pages/public/cart/Cart';
import Admin from 'pages/private/admin/Admin';

const Routes: FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/cart" component={Cart} />
    <Route path="/admin" component={Admin} />
  </Switch>
);

export default Routes;
