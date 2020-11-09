import React, { FC, useState, useEffect, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import clsx from 'clsx';

import {
  Box,
  Paper,
  TextField,
  Typography,
  ButtonBase,
  Divider,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@material-ui/core';

import productByIdQuery from 'graphql/queries/productById';

import { Material, Product } from 'graphql/types';

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
  media: {
    display: 'flex',
    flexDirection: 'column',
    width: 250,
    minHeight: 450,
    marginRight: theme.spacing(2),
  },
  activePhoto: {
    width: '100%',
    height: 350,
    objectFit: 'contain',
    borderRadius: 5,
    marginBottom: theme.spacing(2),
    backgroundColor: '#fafafa',
  },
  photos: {
    marginTop: theme.spacing(2),
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 70px)',
    gridAutoRows: 70,
    gridGap: 'calc((250px - 210px) / 2)',
    flex: 1,
  },
  previewPhotoWrapper: {
    borderRadius: 5,
    overflow: 'hidden',
    transition: '.2s ease',
    zIndex: 2,
    opacity: 0.4,
    border: '1px solid #ccc',
    '&:hover': {
      opacity: 0.7,
      borderColor: theme.palette.primary.light,
    },
  },
  selectedPhoto: {
    opacity: 1,
    borderColor: theme.palette.primary.main,
  },
  previewPhoto: {
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    cursor: 'pointer',
    zIndex: 1,
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

type RouteParams = {
  id: string;
};

type QueryData = null | {
  productById: Product;
  materialMany: Material[];
};

type QueryArgs = {
  id: string;
};

const AdminProduct: FC = () => {
  const classes = useStyles();

  const { id } = useParams<RouteParams>();

  const { data } = useQuery<QueryData, QueryArgs>(productByIdQuery, {
    variables: {
      id,
    },
  });

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [activePhoto, setActivePhoto] = useState(0);
  const [material] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      setName(data.productById.name);
      setDescription(data.productById.description);
      setQuantity(data.productById.quantity);
      setPrice(data.productById.price);
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
        <Box className={classes.media}>
          <img className={classes.activePhoto} src={data?.productById.photos[activePhoto] || undefined} alt="" />
          <Divider />
          <Box className={classes.photos}>
            {data?.productById.photos.map((photo: string | null, index: number) => (
              <ButtonBase
                onClick={() => setActivePhoto(index)}
                key={photo}
                className={clsx(classes.previewPhotoWrapper, { [classes.selectedPhoto]: index === activePhoto })}
              >
                <img className={classes.previewPhoto} src={photo || ''} alt="" />
              </ButtonBase>
            ))}
          </Box>
        </Box>
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
                {data?.materialMany.map(({ _id, name: materialName }: Material) => (
                  <MenuItem key={_id} value={materialName}>
                    {materialName}
                  </MenuItem>
                ))}
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
