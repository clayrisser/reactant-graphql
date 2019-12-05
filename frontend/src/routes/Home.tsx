import PropTypes from 'prop-types';
import React, { FC, useState } from 'react';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { storeContext } from '@reactant/redux/thunk';
import Text from '../components/Text';
import View from '../components/View';
import Input from '../components/Input';

export interface HomeProps {}

const Home: FC<HomeProps> = (props: any, context: any) => {
  const [username, setUsername] = useState('');

  function handleBlur() {
    console.log('username', username);
  }

  function handleChange(e: any) {
    setUsername(e.target.value);
  }

  console.log('props', props);
  console.log('context', context);

  context.apolloClient
    .query({
      query: gql`
        query {
          findManyUser(where: { username: { contains: "e" } }) {
            username
          }
        }
      `
    })
    .then((result: any) => {
      console.log('result', result);
    });

  return (
    <View>
      <Text>I am home </Text>
      <Input onChange={handleChange} onBlur={handleBlur} value={username} />
    </View>
  );
};

Home.contextTypes = {
  apolloClient: PropTypes.object.isRequired
};

export default connect(null, {}, null, { context: storeContext })(Home);
