import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const cache = new InMemoryCache();

const link = createHttpLink({
  uri: process.env.REACT_APP_ENDPOINT,
});

const client = new ApolloClient({
  cache,
  link,
});

export default client;
