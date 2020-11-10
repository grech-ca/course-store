import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  spacer: {
    flex: 1,
  },
});

const Spacer: FC = () => {
  const classes = useStyles();

  return <div className={classes.spacer} />;
};

export default Spacer;
