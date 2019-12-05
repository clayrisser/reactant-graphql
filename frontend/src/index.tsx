import ApolloClient from 'apollo-client';
import React, { FC } from 'react';
import { HttpLink } from 'apollo-link-http';
import { Provider, storeContext } from '@reactant/redux/thunk';
import { /* ReduxCache, */ apolloReducer } from 'apollo-cache-redux';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Store } from 'redux';
import { withProvider } from '@reactant/router/redux';
import ApolloProvider from './ApolloProvider';
import Routes from './routes';
import View from './components/View';

let apolloClient: ApolloClient<any> | null = null;

export interface AppProps {}

const App: FC<AppProps> = () => (
  <ApolloProvider apolloClient={apolloClient}>
    <View>
      <Routes />
    </View>
  </ApolloProvider>
);

export default withProvider(Provider, storeContext, {
  reducers: { apollo: apolloReducer },
  onReady(_store: Store) {
    /* const cache = new ReduxCache({ store }); */
    const cache = new InMemoryCache();
    apolloClient = new ApolloClient({
      link: new HttpLink({ uri: 'http://localhost:4000' }),
      cache
    });
  }
})(App);
