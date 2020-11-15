import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { ButtonBase } from '@material-ui/core';
import { Route } from 'react-router-dom';

interface Props extends StyleProps {
  text: string;
  className?: string;
}

interface StyleProps {
  bgColor: string;
  color: string;
  path?: string;
}

const useStyles = makeStyles(theme => ({
  root: ({ path, color, bgColor }: StyleProps) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    borderRadius: 10,
    backgroundColor: bgColor,
    color,
    cursor: path ? 'pointer' : undefined,
    maxWidth: 100,
    fontWeight: 700,
    padding: theme.spacing(0.4, 1.5),
    fontSize: 12,
  }),
}));

const ProductChip: FC<Props> = ({ path, text, bgColor, color, className }): JSX.Element => {
  const classes = useStyles({ bgColor, color, path });

  return (
    <ButtonBase
      className={clsx(classes.root, className)}
      {...(path
        ? {
            component: Route,
            to: path,
          }
        : {})}
    >
      {text}
    </ButtonBase>
  );
};

export default ProductChip;
