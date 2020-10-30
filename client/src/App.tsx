import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from 'startup/redux';
import client from 'startup/apollo';
import theme from 'startup/theme';

import Routes from 'Routes';

const App = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  </Provider>
);

export default App;
