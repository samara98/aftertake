import React, { FC } from 'react';
import axios from 'axios';

import { withSessionReduxSSR } from '~/lib/session';
import { userAction } from '~/store/actions';
import { useTypedSelector } from '~/hooks/useTypedSelector';

export const getServerSideProps = withSessionReduxSSR(async ({ req, store }) => {
  const user = req.session.get('user');

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  store.dispatch(userAction.login(user));
});

const SessionPage: FC = () => {
  const user = useTypedSelector((state) => state.user);

  const handleLogin = () => {
    axios
      .get('/api/login')
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLogout = () => {
    axios
      .post('/api/logout')
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <h1>Session SSR</h1>
      <button onClick={() => handleLogin()}>login</button>
      <br />
      <button onClick={() => handleLogout()}>logout</button>
      <p>{user && JSON.stringify(user, null, 2)}</p>
    </>
  );
};

export default SessionPage;
