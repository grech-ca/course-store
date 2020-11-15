import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { Box } from '@material-ui/core';

import Image from 'components/common/Image';

type Props = {
  photos: (string | null)[];
};

const useStyles = makeStyles(theme => ({
  media: {
    width: 250,
    height: 530,
  },
  activePhoto: {
    borderRadius: 5,
    backgroundColor: '#fafafa',
  },
  photos: {
    marginTop: theme.spacing(2),
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 75px)',
    gridAutoRows: '75px',
    gridGap: 12.5,
  },
  previewPhoto: {
    borderRadius: 5,
    border: '1px solid #ddd',
    cursor: 'pointer',
    opacity: 0.7,
    transition: '.2s ease',
  },
  previewPhotoSelected: {
    borderColor: theme.palette.primary.main,
    opacity: 1,
  },
}));

const ProductGallery: FC<Props> = ({ photos }) => {
  const classes = useStyles();

  const [imageIndex, setImageIndex] = useState(0);

  const selectImage = (index: number) => setImageIndex(index);

  return (
    <Box className={classes.media}>
      <Image
        width="100%"
        height={350}
        className={classes.activePhoto}
        src={photos[imageIndex]}
        objectFit="scale-down"
      />
      <Box className={classes.photos}>
        {photos?.slice(0, 5).map((photo, index) => (
          <div key={photo} role="button" onClick={() => selectImage(index)}>
            <Image
              className={clsx(classes.previewPhoto, { [classes.previewPhotoSelected]: index === imageIndex })}
              src={photo}
              size={75}
            />
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default ProductGallery;
