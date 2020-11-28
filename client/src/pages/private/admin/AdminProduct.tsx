import React, { FC, useState, useEffect, useMemo, useCallback, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Box, Paper, TextField, Typography, Button } from '@material-ui/core';

import ProductGallery from 'components/product/ProductGallery';
import Selector from 'components/common/Selector';

import useProduct from 'hooks/useProduct';
import useMaterials from 'hooks/useMaterials';
import useCategories from 'hooks/useCategories';
import useLocations from 'hooks/useLocations';

import { useUpdateProductMutation } from 'graphql/generated';

type Props = {
  create?: boolean;
};

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
    marginLeft: theme.spacing(2),
    '& > *': {
      marginBottom: theme.spacing(2),
    },
  },
  inputRow: {
    display: 'grid',
    gridAutoColumns: '1fr',
    gridTemplateRows: 'initial',
    gridColumnGap: theme.spacing(2),
    gridAutoFlow: 'column',
  },
  name: {
    '& input': {
      fontSize: 18,
      fontWeight: 700,
    },
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
  grow: {
    flex: 1,
  },
}));

const AdminProduct: FC<Props> = () => {
  const classes = useStyles();

  const [updateProduct] = useUpdateProductMutation();

  const { materials } = useMaterials();
  const { categories } = useCategories();
  const { locations } = useLocations();
  const { product, id } = useProduct({ admin: true });
  const { photos = [] } = product || {};

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>('');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setQuantity(product.quantity);
      setPrice(product.price);
      setSelectedCategory(product?.categoryRef);
      setSelectedMaterials(product?.materialRefs || []);
      setSelectedLocations(product?.locationRefs || []);
    }
  }, [product]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | { value: unknown }>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLSelectElement;

    switch (name) {
      case 'name':
        return setName(value);
      case 'description':
        return setDescription(value);
      case 'price':
        return setPrice(parseInt(value));
      case 'quantity':
        return setQuantity(parseInt(value));
      case 'category':
        return setSelectedCategory(value);
      case 'materials':
        if (Array.isArray(value)) setSelectedMaterials(value);
        break;
      case 'locations':
        if (Array.isArray(value)) setSelectedLocations(value);
        break;
    }
  };

  const variables = useMemo(
    () => ({
      id,
      record: {
        photos,
        name,
        description,
        price,
        quantity,
        materialRefs: selectedMaterials,
        locationRefs: selectedLocations,
        categoryRef: selectedCategory,
      },
    }),
    [description, id, name, photos, price, quantity, selectedCategory, selectedLocations, selectedMaterials],
  );

  const handleSubmit = useCallback(() => {
    return updateProduct({
      variables,
    });
  }, [updateProduct, variables]);

  return (
    <form className={classes.wrapper}>
      <Paper className={classes.primary}>
        <ProductGallery photos={photos} />
        <Box className={classes.content}>
          <TextField
            className={classes.name}
            name="name"
            variant="outlined"
            label="Название"
            onChange={handleChange}
            value={name}
          />
          <Box className={classes.inputRow}>
            <TextField onChange={handleChange} variant="outlined" label="Цена" type="number" value={price} />
            <TextField onChange={handleChange} variant="outlined" label="Количество" type="number" value={quantity} />
          </Box>
          <Box className={classes.inputRow}>
            <Selector
              name="materials"
              title="Материалы"
              multiple
              options={materials.map(({ _id, name: materialName }) => ({
                label: materialName,
                value: _id,
              }))}
              value={selectedMaterials}
              onChange={handleChange}
            />
            <Selector
              name="category"
              title="Тип мебели"
              options={[
                ...categories.map(({ _id, name: categoryName }) => ({
                  label: categoryName,
                  value: _id,
                })),
              ]}
              value={selectedCategory}
              onChange={handleChange}
            />
            <Selector
              name="locations"
              title="Комнаты"
              multiple
              options={locations.map(({ _id, name: locationName }) => ({
                label: locationName,
                value: _id,
              }))}
              value={selectedLocations}
              onChange={handleChange}
            />
          </Box>
          <TextField
            name="description"
            variant="outlined"
            label="Описание"
            onChange={handleChange}
            multiline
            value={description}
          />
          <div className={classes.grow} />
          <Button onClick={handleSubmit} variant="contained" color="primary">
            Сохранить
          </Button>
        </Box>
      </Paper>
      <Paper className={classes.secondary}>
        <Typography className={classes.secondaryTitle}>Доп. настройки</Typography>
      </Paper>
    </form>
  );
};

export default AdminProduct;
