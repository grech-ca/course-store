import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import Image from 'components/common/Image';

type Props = {
  path: string;
  name: string;
  photo?: string | null;
  description: string;
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

const SnackCard: FC<Props> = ({ path, photo, name, description }) => {
  const classes = useStyles();

  const { push } = useHistory();

  return (
    <Card>
      <CardActionArea onClick={() => push(path)} className={classes.root} title={name}>
        <CardMedia component={Image} src={photo || ''} className={classes.image} />
        <CardContent className={classes.content}>
          <Typography className={classes.name}>{name}</Typography>
          <Typography className={classes.date}>{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SnackCard;
