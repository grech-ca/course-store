import React, { FC, useMemo, useCallback, ChangeEvent, FormEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Paper, Typography, TextField, Button, Box } from '@material-ui/core';

import Modal from 'components/common/Modal';
import SnackCard from 'components/common/SnackCard';

import useCart from 'hooks/useCart';
import useModal from 'hooks/useModal';
import useStorage from 'hooks/useStorage';
import useNotification from 'hooks/useNotification';

import { ModalName } from 'ducks/modal/types';
import { EnumOrderStatus, useCreateOrderMutation } from 'graphql/generated';

interface OrderedProductData {
  product: string;
  quantity: number;
}

interface OrderedProduct extends OrderedProductData {
  name: string;
  photo: string | null;
}

type Props = {
  products: OrderedProduct[];
  isMultipleOrder?: boolean;
};

const useStyles = makeStyles(theme => ({
  form: {
    display: 'grid',
    gridRowGap: theme.spacing(3),
    width: 500,
    padding: theme.spacing(8, 4),
  },
  title: {
    fontSize: 26,
    fontWeight: 700,
  },
  products: {
    display: 'grid',
    gridRowGap: theme.spacing(2),
    maxHeight: 150,
    overflowY: 'auto',
    padding: theme.spacing(0.2),
  },
  fields: {
    display: 'grid',
    gridRowGap: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alginItems: 'center',
  },
  actionButton: {
    marginLeft: theme.spacing(2),
    textTransform: 'initial',
  },
}));

const ProductCreateOrder: FC<Props> = ({ isMultipleOrder, products }) => {
  const classes = useStyles();

  const [createOrder] = useCreateOrderMutation();

  const { clearCart } = useCart();
  const { close } = useModal(ModalName.CreateOrder);
  const { notify } = useNotification();

  const [name, setName] = useStorage<string>('customer-name', '');
  const [lastName, setLastName] = useStorage<string>('customer-lastname', '');
  const [phone, setPhone] = useStorage<string>('customer-phone', '');
  const [adress, setAdress] = useStorage<string>('customer-adress', '');

  const orderedProducts = useMemo<OrderedProductData[]>(
    () => products.map(({ product, quantity }: OrderedProduct) => ({ product, quantity })),
    [products],
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'lastname':
        return setLastName(value);
      case 'phone':
        return setPhone(value);
      case 'adress':
        return setAdress(value);
    }
  };

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      close();

      return createOrder({
        variables: {
          record: {
            name,
            lastName,
            phone,
            adress,
            orderedProducts,
            status: EnumOrderStatus.Pending,
          },
        },
      }).then(() => {
        if (isMultipleOrder) clearCart();
        notify({
          title: 'Заказ',
          description: 'Заказ успешно оформлен, ожидайте звонка!',
          variant: 'success',
        });
      });
    },
    [adress, clearCart, close, createOrder, isMultipleOrder, lastName, name, notify, orderedProducts, phone],
  );

  return (
    <Modal name={ModalName.CreateOrder}>
      <Paper onSubmit={handleSubmit} className={classes.form} component="form">
        <Typography className={classes.title}>Оформление заказа</Typography>
        <Box className={classes.products}>
          {products.map(({ product, name, quantity, photo }) => (
            <SnackCard
              key={product}
              name={name}
              description={`${quantity} шт.`}
              photo={photo}
              path={`/product/${product}`}
            />
          ))}
        </Box>
        <Box className={classes.fields}>
          <TextField required name="name" value={name} onChange={handleChange} label="Имя" />
          <TextField required name="lastname" value={lastName} onChange={handleChange} label="Фамилия" />
          <TextField required type="tel" name="phone" value={phone} onChange={handleChange} label="Телефон" />
          <TextField required name="adress" value={adress} onChange={handleChange} label="Адрес" />
        </Box>
        <Box className={classes.actions}>
          <Button onClick={close} className={classes.actionButton} variant="contained">
            Отмена
          </Button>
          <Button type="submit" className={classes.actionButton} variant="contained" color="primary">
            Подтвердить
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default ProductCreateOrder;
