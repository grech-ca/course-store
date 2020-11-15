import React, { FC, useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { Box } from '@material-ui/core';
import CameraIcon from '@material-ui/icons/CameraAlt';

type ObjectFit = 'cover' | 'none' | 'fill' | 'contain' | 'scale-down';

type Props = {
  src?: string | null;
  size?: number | string;
  height?: number | string;
  width?: number | string;
  objectFit?: ObjectFit;
  className?: string;
};

type StyleProps = {
  size?: number | string;
  height?: number | string;
  width?: number | string;
  objectFit?: ObjectFit;
};

const validateMeasurements = (value?: string | number): string => {
  if (!value) return '0';
  if (typeof value === 'number') return `${value}px`;
  return value;
};

const useStyles = makeStyles({
  image: ({ objectFit = 'cover', height, width, size }: StyleProps) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    objectFit: objectFit,
    width: size ?? width,
    height: size ?? height,
    color: '#ccc',
    '& svg': {
      fontSize: () => {
        if (!size && (!height || !width)) return undefined;
        const validHeight = validateMeasurements(height);
        const validWidth = validateMeasurements(width);
        const validSize = validateMeasurements(size);

        return `calc((${size ? `${validSize} * 0.75` : `(${validHeight} + ${validWidth}) / 3`}) * 0.8)`;
      },
    },
  }),
});

const Image: FC<Props> = ({ src, size, height, width, className, objectFit }) => {
  const classes = useStyles({ size, height, width, objectFit });

  const [imageLoaded, setImageLoaded] = useState(true);

  const onImageError = () => setImageLoaded(false);

  const classNames = useMemo(() => clsx(classes.image, className), [className, classes.image]);

  if (src && imageLoaded) return <img className={classNames} onError={onImageError} src={src || undefined} alt="" />;

  return (
    <Box className={classNames}>
      <CameraIcon />
    </Box>
  );
};

export default Image;
