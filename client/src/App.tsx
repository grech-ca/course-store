import React, { FC } from 'react';

import { ApolloProvider } from '@apollo/client';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';

import store from 'startup/redux';
import client from 'startup/apollo';
import theme from 'startup/theme';

import Routes from 'Routes';

const App: FC = () => (
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarProvider
            maxSnack={7}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Routes />
          </SnackbarProvider>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  </Provider>
);

export default App;
