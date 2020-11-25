import React, { FC, ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';
import Color from 'color';

import { Box } from '@material-ui/core';

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
    height: '100vh',
  },
  container: {
    display: 'flex',
    overflowY: 'auto',
    flex: 1,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
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

const Layout: FC<Props> = ({ header, sidebar, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      {header && <Header />}
      <Box className={classes.container}>
        {sidebar && (
          <Box className={classes.column}>
            <Sidebar />
          </Box>
        )}
        <Box className={clsx(classes.column, classes.content)}>{children}</Box>
      </Box>
    </div>
  );
};

export default Layout;
