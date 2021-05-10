export enum UserType {
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT',
}

interface UserLogin {
  type: UserType.USER_LOGIN;
  payload: {
    id: number;
    admin: boolean;
  };
}

interface UserLogout {
  type: UserType.USER_LOGOUT;
}

export type UserAction = UserLogin | UserLogout;
