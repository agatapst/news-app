import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { persistCache } from 'apollo-cache-persist';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_ENDPOINT,
  cache: cache,
});

const setupPersistState = async () => {
  await persistCache({
    cache,
    storage: window.localStorage,
  });
};

export { client, setupPersistState };
