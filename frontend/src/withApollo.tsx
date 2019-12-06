import ApolloClient from 'apollo-client';
import React, { Component, FC } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

export interface UnknownProps {
  [key: string]: any;
}

export default function withApollo(client: ApolloClient<any>) {
  return (App: FC | typeof Component): FC => (props: UnknownProps) => (
    <ApolloProvider client={client}>
      <App {...props} />
    </ApolloProvider>
  );
}
