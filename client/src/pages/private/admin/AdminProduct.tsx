import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Box, Paper, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from '@material-ui/core';

import useProduct from 'hooks/useProduct';

import ProductGallery from 'components/product/ProductGallery';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
  },
  primary: {
    display: 'flex',
    padding: theme.spacing(2),
    flex: 3,
    height: 700,
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  inputRow: {
    display: 'flex',
  },
  name: {
    marginBottom: theme.spacing(3),
    '& input': {
      fontSize: 20,
      fontWeight: 700,
    },
  },
  description: {
    marginBottom: theme.spacing(2),
  },
  price: {
    flex: 1,
    marginBottom: theme.spacing(2),
  },
  quantity: {
    flex: 1,
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  secondary: {
    flex: 1,
    marginLeft: theme.spacing(2),
    padding: theme.spacing(2),
    height: 400,
  },
  secondaryTitle: {
    fontSize: 18,
    fontWeight: 700,
  },
  material: {
    flex: 1,
  },
}));

const AdminProduct: FC = () => {
  const classes = useStyles();

  const { data } = useProduct({ admin: true });
  const { photos = [] } = data || {};

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [material] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      setName(data.name);
      setDescription(data.description);
      setQuantity(data.quantity);
      setPrice(data.price);
    }
  }, [data]);

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleMaterial = (e: ChangeEvent<{ value: unknown }>) => {
    const { value } = e.target as HTMLSelectElement;
    console.log(value);
  };

  return (
    <form className={classes.wrapper}>
      <Paper className={classes.primary}>
        <ProductGallery photos={photos} />
        <Box className={classes.content}>
          <TextField variant="outlined" label="Название" onChange={handleName} className={classes.name} value={name} />
          <Box className={classes.inputRow}>
            <TextField variant="outlined" label="Цена" type="number" className={classes.price} value={price} />
            <TextField
              variant="outlined"
              label="Количество"
              type="number"
              className={classes.quantity}
              value={quantity}
            />
          </Box>
          <TextField
            variant="outlined"
            label="Описание"
            onChange={handleDescription}
            multiline
            className={classes.description}
            value={description}
          />
          <Box className={classes.inputRow}>
            <FormControl variant="filled" className={classes.material}>
              <InputLabel>Материал</InputLabel>
              <Select multiple value={material} onChange={handleMaterial}>
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {/* {data?.materialMany.map(({ _id, name: materialName }: Material) => (
                  <MenuItem key={_id} value={materialName}>
                    {materialName}
                  </MenuItem>
                ))} */}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Paper>
      <Paper className={classes.secondary}>
        <Typography className={classes.secondaryTitle}>Доп. настройки</Typography>
      </Paper>
    </form>
  );
};

export default AdminProduct;
