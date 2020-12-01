import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Paper } from '@material-ui/core';

import OrderCard from 'components/common/OrderCard';

import { useOrdersQuery } from 'graphql/generated';

const useStyles = makeStyles(theme => ({
  container: {
    padding: theme.spacing(2),
    display: 'grid',
    gridRowGap: theme.spacing(2),
  },
}));

const AdminOrders: FC = () => {
  const classes = useStyles();

  const { data } = useOrdersQuery({
    pollInterval: 100,
  });
  const { orders: ordersPagination } = data || {};
  const { items: orders = [] } = ordersPagination || {};

  return (
    <Paper className={classes.container}>
      {orders?.map(({ _id, totalCost, quantity, createdAt, updatedAt, name, lastName, adress, phone, status }) => (
        <OrderCard
          key={_id}
          id={_id}
          totalCost={totalCost || 0}
          quantity={quantity || 0}
          createdAt={createdAt}
          updatedAt={updatedAt}
          name={name}
          lastName={lastName}
          adress={adress}
          phone={phone}
          status={status}
        />
      ))}
    </Paper>
  );
};

export default AdminOrders;
