import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Box } from '@material-ui/core';

import { MaterialsDictionary } from 'helpers/constants';

import ProductChip from 'components/product/ProductChip';

import { Material } from 'graphql/types';

type Props = {
  materials: Material[];
};

const useStyles = makeStyles(theme => ({
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2),
  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const ProductMaterials: FC<Props> = ({ materials }) => {
  const classes = useStyles();

  return (
    <Box className={classes.row}>
      {materials.map(({ type, name }) => (
        <ProductChip
          key={[type, name].join('-')}
          text={name}
          bgColor={MaterialsDictionary[type].bgColor}
          color={MaterialsDictionary[type].color}
          className={classes.chip}
        />
      ))}
    </Box>
  );
};

export default ProductMaterials;
