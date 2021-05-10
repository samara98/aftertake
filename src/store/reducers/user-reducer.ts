import { UserAction, UserType } from '../types/user-type';

const initialState: { id: null | number; admin: boolean } = {
  id: null,
  admin: false,
};

export default function userReducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case UserType.USER_LOGIN:
      return { ...state, ...action.payload };
    case UserType.USER_LOGOUT:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
