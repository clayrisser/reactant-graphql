import { Dispatch } from 'react';
import { CREATE_ONE_USER } from '../reducers/user';

export default function createOneUser(username: string) {
  return async (dispatch: Dispatch<any>) => {
    dispatch({
      type: CREATE_ONE_USER,
      payload: { username }
    });
  };
}
