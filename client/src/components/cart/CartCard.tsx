import React, { FC, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  CardActions,
  Box,
  Typography,
  IconButton,
  TextField,
} from '@material-ui/core';
import CameraIcon from '@material-ui/icons/CameraAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import useCart from 'hooks/useCart';
import Spacer from 'components/common/Spacer';

export type Props = {
  _id: string;
  name: string;
  description: string;
  photo?: string | null;
  price: number;
  quantity: number;
  maxQuantity: number;
  type?: string;
};

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  media: {
    height: 150,
    width: 150,
    dislay: 'flex',
    justifyContent: 'center',
    aligItems: 'center',
  },
  photo: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontSize: 18,
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(0.75),
  },
  category: {
    color: '#aaa',
    '&:before': {
      content: '"–"',
      margin: theme.spacing(0, 1),
    },
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(1, 0),
  },
  quantityValue: {
    fontSize: 18,
    fontWeight: 700,
    color: '#555',
    margin: theme.spacing(0, 2),
    width: 50,
    '& input': {
      textAlign: 'center',
    },
  },
  description: {
    fontSize: 14,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  },
  price: {
    fontSize: 22,
    fontWeight: 700,
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(2),
    '& > *:not(:first-child)': {
      marginLeft: 'initial',
    },
  },
}));

const CartCard: FC<Props> = ({ _id, name, description, photo, price, type, quantity, maxQuantity }): JSX.Element => {
  const classes = useStyles();

  const { addToCart, setInCartQuantity, decreaseFromCart, removeFromCart } = useCart();

  const handleDelete = () => removeFromCart(_id);

  const handleCount = (value: number) => {
    if (value < 0) return decreaseFromCart(_id, value);

    addToCart(_id, quantity + value > maxQuantity ? 0 : value);
  };

  const handleChangeCount = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.abs(parseInt(e.target.value)) || undefined;

    if (newValue && newValue > maxQuantity) return setInCartQuantity(_id, maxQuantity);

    return setInCartQuantity(_id, newValue || 1);
  };

  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.card}>
        <CardMedia className={classes.media}>
          {photo ? <img className={classes.photo} src={photo} alt="" /> : <CameraIcon />}
        </CardMedia>
        <CardContent className={classes.content}>
          <Typography className={classes.name}>
            {name}
            {type && (
              <Typography component="span" className={classes.category}>
                {type}
              </Typography>
            )}
          </Typography>
          <Typography className={classes.description}>{description}</Typography>
          <Spacer />
          <Typography className={classes.price}>{price} руб.</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
        <Box className={classes.quantity}>
          <IconButton onClick={() => handleCount(-1)} size="small">
            <RemoveIcon />
          </IconButton>
          <TextField onChange={handleChangeCount} className={classes.quantityValue} value={quantity} />
          <IconButton onClick={() => handleCount(1)} size="small">
            <AddIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CartCard;
