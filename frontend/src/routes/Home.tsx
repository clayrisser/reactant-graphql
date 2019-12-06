import React, { FC, useState } from 'react';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { storeContext } from '@reactant/redux/thunk';
import { useMutation, useQuery } from '@apollo/react-hooks';
import Text from '../components/Text';
import View from '../components/View';
import Input from '../components/Input';

const FIND_MANY_USER = gql`
  query {
    findManyUser(where: { username: { contains: "e" } }) {
      username
    }
  }
`;

const CREATE_ONE_USER = gql`
  mutation CreateOneUser($username: String!) {
    createOneUser(data: { username: $username }) {
      username
    }
  }
`;

export interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [username, setUsername] = useState('');
  const { loading, error, data } = useQuery(FIND_MANY_USER);
  const [createOneUser, result] = useMutation(CREATE_ONE_USER);

  function handleBlur() {
    console.log('username', username);
    createOneUser({ variables: { username } });
  }

  function handleChange(e: any) {
    setUsername(e.target.value);
  }

  return (
    <View>
      <Text>I am home </Text>
      <Input onChange={handleChange} onBlur={handleBlur} value={username} />
      <View>
        Result: {JSON.stringify(result.data)}
        <br />
        {(loading && 'loading') || error?.message || JSON.stringify(data)}
      </View>
    </View>
  );
};

export default connect(null, {}, null, { context: storeContext })(Home);
