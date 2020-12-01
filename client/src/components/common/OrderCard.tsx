import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import clsx from 'clsx';
import { DateTime } from 'luxon';

import { Paper, Typography, Box, ButtonBase } from '@material-ui/core';

import { EnumOrderStatus } from 'graphql/generated';
import OrderStatusBadge from 'components/order/OrderStatusBadge';

type Props = {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: EnumOrderStatus;
  name: string;
  lastName: string;
  adress: string;
  phone: string;
  totalCost: number;
  quantity: number;
};

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'relative',
  },
  container: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    borderRadius: 4,
    width: '100%',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
  },
  header: {
    paddingBottom: theme.spacing(1),
  },
  name: {
    fontWeight: 700,
    fontSize: 20,
  },
  footer: {
    borderTop: '1px solid #ccc',
    paddingTop: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  meta: {
    fontSize: 14,
    color: '#666',

    '& + &:before': {
      content: '"•"',
      margin: theme.spacing(0, 1),
    },
  },
  badge: {
    position: 'absolute',
    right: theme.spacing(2),
    top: theme.spacing(2),
  },
  grow: {
    flex: 1,
  },
}));

const OrderCard: FC<Props> = ({
  id,
  createdAt,
  updatedAt,
  status,
  name,
  lastName,
  adress,
  phone,
  totalCost,
  quantity,
}) => {
  const classes = useStyles();

  const { push } = useHistory();

  return (
    <Paper className={classes.paper}>
      <ButtonBase onClick={() => push(`/admin/order/${id}`)} className={classes.container}>
        <Box className={clsx(classes.row, classes.header)}>
          <Typography className={classes.name}>
            {lastName} {name}
          </Typography>
        </Box>
        <Box className={classes.row}>
          <Typography className={classes.meta}>Телефон: {phone}</Typography>
          <Typography className={classes.meta}>Адрес: {adress}</Typography>
          <Typography className={classes.meta}>Кол-во: {quantity} шт.</Typography>
          <Typography className={classes.meta}>К оплате: {totalCost} руб.</Typography>
        </Box>
        <Box className={clsx(classes.row, classes.footer)}>
          <Typography className={classes.meta}>
            Номер заявки: {new Date(createdAt).getTime().toString().slice(3)}
          </Typography>
          <div className={classes.grow} />
          <Typography className={classes.meta}>
            Заявка создана: {DateTime.fromISO(createdAt).setLocale('ru').toFormat('DDD')}
          </Typography>
          {createdAt !== updatedAt && (
            <Typography className={classes.meta}>
              Заявка обновлена: {DateTime.fromISO(updatedAt).setLocale('ru').toFormat('DDD')}
            </Typography>
          )}
        </Box>
      </ButtonBase>
      <OrderStatusBadge className={classes.badge} id={id} status={status} />
    </Paper>
  );
};

export default OrderCard;
