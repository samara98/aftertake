import React, { FC } from 'react';
import axios from 'axios';

import { withSessionSSR } from '~/lib/session';

export const getServerSideProps = withSessionSSR(async ({ req }) => {
  const user = req.session.get('user');

  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: { user: req.session.get('user') },
  };
});

interface Props {
  user: any;
}

const SessionPage: FC<Props> = ({ user }) => {
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
      <p>{JSON.stringify(user, null, 2)}</p>
    </>
  );
};

export default SessionPage;
