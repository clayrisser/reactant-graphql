import { Action, Reducer } from 'redux';

export const CREATE_ONE_USER = 'CREATE_ONE_USER';

export interface UserAction {
  type: string;
  payload: object;
}

export default function user(state = {}, { payload, type }: UserAction) {
  switch (type) {
    case CREATE_ONE_USER:
      return payload;
  }
  return state;
}
