import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Color from 'color';

import { Box } from '@material-ui/core';

import AdminHeader from 'components/admin/AdminHeader';
import AdminSidebar from 'components/admin/AdminSidebar';
import AdminRoutes from 'pages/private/admin/AdminRoutes';
import AdminLogin from 'pages/public/AdminLogin';

import useCredentials from 'hooks/useCredentials';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  body: {
    display: 'flex',
    overflowY: 'auto',
    flex: 1,
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: theme.spacing(0.75),
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: Color(theme.palette.primary.light).lighten(0.4).string(),
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 15,
      width: theme.spacing(0.5),
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const Admin: FC = () => {
  const classes = useStyles();

  const { token } = useCredentials();

  if (!token) return <AdminLogin />;

  return (
    <Box className={classes.root}>
      <AdminHeader />
      <Box className={classes.body}>
        <AdminSidebar />
        <Box className={classes.content}>
          <AdminRoutes />
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;
