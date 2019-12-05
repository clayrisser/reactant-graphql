import ApolloClient from 'apollo-client';
import PropTypes from 'prop-types';
import { Component, ReactNode } from 'react';

export interface ApolloProviderProps {
  children?: ReactNode;
  apolloClient: ApolloClient<any> | null;
}

class ApolloProvider extends Component<ApolloProviderProps> {
  static childContextTypes = {
    apolloClient: PropTypes.object.isRequired
  };

  getChildContext() {
    return {
      apolloClient: this.props.apolloClient
    };
  }

  render() {
    return this.props.children;
  }
}

export default ApolloProvider;
