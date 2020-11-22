import React, { FC, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLazyQuery, gql } from '@apollo/client';

import { Box, TextField, Button, Typography } from '@material-ui/core';

import useCredentials from 'hooks/useCredentials';

// TODO: MAKE ANOTHER ONE FROM SCRATCH WHEN SEMESTER ENDS

type QueryData = {
  login: {
    name?: string | null;
    token?: string | null;
  };
};

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    width: 400,
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const AdminLogin: FC = () => {
  const classes = useStyles();

  const { setToken } = useCredentials();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [getToken, { data }] = useLazyQuery<QueryData>(
    gql`
      query login($login: String!, $password: String!) {
        login(login: $login, password: $password) {
          name
          token
        }
      }
    `,
    {
      variables: {
        login,
        password,
      },
    },
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    switch (target.name) {
      case 'login':
        return setLogin(target.value);
      case 'password':
        return setPassword(target.value);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    getToken();
  };

  useEffect(() => {
    if (data) {
      setToken(data.login.token);
    }
  }, [data, setToken]);

  return (
    <Box className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Typography>Панель администратора</Typography>
        <TextField value={login} onChange={handleChange} name="login" label="Логин" />
        <TextField value={password} onChange={handleChange} name="password" type="password" label="Пароль" />
        <Button color="primary" variant="contained" type="submit">
          Войти
        </Button>
      </form>
    </Box>
  );
};

export default AdminLogin;
