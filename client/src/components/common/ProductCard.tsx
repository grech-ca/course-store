import React, { FC, useState, MouseEvent, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
  Badge,
  Popover,
  TextField,
  Button,
} from '@material-ui/core';
import CartIcon from '@material-ui/icons/ShoppingCart';

import useCart from 'hooks/useCart';

import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

export interface Props {
  _id: string;
  name: string;
  photo?: string | null;
  price: number;
  quantity: number;
  description: string;
  cart?: boolean;
  onClick?: () => void;
}

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: 'relative',
    height: 280,
    flex: 1,
  },
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  actionArea: {
    display: 'flex',
    flexDirection: 'column',
    flex: 7,
  },
  media: {
    width: '100%',
    height: 152,
  },
  content: {
    position: 'relative',
    width: '100%',
  },
  cart: {
    position: 'absolute',
    right: theme.spacing(1),
    bottom: theme.spacing(1),
  },
  name: {
    fontWeight: 700,
    fontSize: 14,
    marginBottom: theme.spacing(0.5),
  },
  description: {
    fontSize: 12,
    marginBottom: theme.spacing(0.5),
  },
  quantity: {
    fontSize: 12,
    color: '#ccc',
    marginBottom: theme.spacing(0.5),
  },
  outOfStock: {
    color: '#ff5555',
  },
  price: {
    fontWeight: 700,
    fontSize: 18,
  },
  limitedText: {
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
  },
  popup: {
    padding: theme.spacing(2, 3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  popupTitle: {
    fontWeight: 700,
  },
  counter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
  },
  counterValue: {
    margin: theme.spacing(0, 2),
  },
  popupSubmit: {
    width: '100%',
  },
}));

const ProductCard: FC<Props> = ({ _id, name, description, photo, price, cart, onClick, quantity }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const { findItemInCartById } = useCart();

  const handleCart = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Badge badgeContent={findItemInCartById(_id)?.quantity} color="error">
      <Box className={classes.wrapper}>
        <Card className={classes.root} onClick={onClick}>
          <CardActionArea className={classes.actionArea}>
            <CardMedia component="img" className={classes.media} src={photo || undefined} />
            <CardContent className={classes.content}>
              <Typography className={clsx(classes.name, classes.limitedText)}>{name}</Typography>
              <Typography className={clsx(classes.description, classes.limitedText)}>{description}</Typography>
              <Typography className={clsx(classes.quantity, { [classes.outOfStock]: !quantity })}>
                {quantity ? `${quantity} шт.` : 'Нет в наличии'}
              </Typography>
              <Typography className={classes.price}>{price} руб.</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {cart && !(!quantity || !cart) && (
          <Fragment>
            <IconButton onClick={handleCart} className={classes.cart}>
              <CartIcon />
            </IconButton>
            <Popover
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <Box className={classes.popup}>
                <Typography className={classes.popupTitle}>Добавить в корзину</Typography>
                <Box className={classes.counter}>
                  <IconButton size="small">
                    <RemoveIcon />
                  </IconButton>
                  <TextField className={classes.counterValue} size="small" variant="outlined" />
                  <IconButton size="small">
                    <AddIcon />
                  </IconButton>
                </Box>
                <Button className={classes.popupSubmit} variant="contained" color="primary">
                  Добавить
                </Button>
              </Box>
            </Popover>
          </Fragment>
        )}
      </Box>
    </Badge>
  );
};

export default ProductCard;
