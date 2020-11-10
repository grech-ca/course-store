import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  heading: {
    fontSize: 20,
  },
});

const AdminHeader: FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.heading}>Панель администратора</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
