import ApolloClient from 'apollo-boost';
import React, { FC } from 'react';
import { Provider, storeContext } from '@reactant/redux/thunk';
import { withProvider } from '@reactant/router/redux';
import Routes from './routes';
import View from './components/View';
import withApollo from './withApollo';

export const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000'
});

export interface AppProps {}

const App: FC<AppProps> = () => (
  <View>
    <Routes />
  </View>
);

export default withProvider(
  Provider,
  storeContext
)(withApollo(apolloClient)(App));
