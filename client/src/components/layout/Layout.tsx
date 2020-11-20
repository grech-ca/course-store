import React, { FC, ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { Grid } from '@material-ui/core';

import Header from 'components/layout/Header';
import Sidebar from 'components/layout/Sidebar';

type Props = {
  header?: boolean;
  sidebar?: boolean;
  admin?: boolean;
  children?: undefined | ReactNode | ReactNode[];
};

const useStyles = makeStyles(theme => ({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    height: '100vh',
    width: '100%',
  },
  container: {
    flex: 1,
  },
  column: {
    flex: 1,
  },
  sidebar: {
    paddingRight: theme.spacing(3),
  },
  page: {
    // paddingTop: theme.spacing(5),
  },
}));

const Layout: FC<Props> = ({ header, sidebar, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      {header && <Header />}
      <Grid className={classes.container} container justify={!sidebar ? 'center' : undefined}>
        {sidebar && (
          <Grid className={clsx(classes.column, classes.sidebar)} item md={2}>
            <Sidebar />
          </Grid>
        )}
        <Grid className={clsx(classes.column, classes.page)} item md={8}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
