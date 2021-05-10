import React, { FC, useState } from 'react';
import axios from 'axios';

const SessionPage: FC = () => {
  const [user, setUser] = useState({});

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

  const handleUser = () => {
    axios
      .get('/api/user')
      .then(({ data }) => {
        setUser((val) => ({ ...val, data }));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLogout = () => {
    axios
      .post('/api/logout')
      .then(() => {
        setUser({});
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <h1>Session API</h1>
      <button onClick={() => handleLogin()}>login</button>
      <br />
      <button onClick={() => handleLogout()}>logout</button>
      <br />
      <button onClick={() => handleUser()}>user</button>
      <p>{JSON.stringify(user, null, 2)}</p>
    </>
  );
};

export default SessionPage;
