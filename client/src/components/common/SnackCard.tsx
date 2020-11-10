import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DateTime } from 'luxon';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

type Props = {
  onClick: () => void;
  name: string;
  photo: string;
  date: string;
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  image: {
    height: 60,
    width: 60,
  },
  content: {
    padding: theme.spacing(0, 2),
  },
  name: {
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    fontSize: 14,
    fontWeight: 700,
  },
  date: {
    fontSize: 12,
    color: '#aaa',
  },
}));

const SnackCard: FC<Props> = ({ onClick, photo, name, date }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea className={classes.root} onClick={onClick} title={name}>
        <CardMedia component="img" src={photo} className={classes.image} />
        <CardContent className={classes.content}>
          <Typography className={classes.name}>{name}</Typography>
          <Typography className={classes.date}>{DateTime.fromISO(date).toRelative({ locale: 'ru' })}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SnackCard;
