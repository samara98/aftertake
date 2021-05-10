import { Dispatch } from 'react';
import { UserAction, UserType } from '../types/user-type';

export const login = (user) => (dispatch: Dispatch<UserAction>) => {
  return dispatch({
    type: UserType.USER_LOGIN,
    payload: user,
  });
};

export const logout = () => (dispatch: Dispatch<UserAction>) => {
  return dispatch({ type: UserType.USER_LOGOUT });
};
