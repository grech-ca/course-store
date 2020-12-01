import React, { FC, Fragment, useState, useMemo, useCallback } from 'react';
import { makeStyles, lighten, fade } from '@material-ui/core/styles';

import clsx from 'clsx';

import { Box, Popover, ButtonBase } from '@material-ui/core';

import { orderStatusDictionary } from 'helpers/constants';

import { EnumOrderStatus, useUpdateOrderStatusMutation } from 'graphql/generated';

type Props = {
  id: string;
  status: EnumOrderStatus;
  className?: string;
};

const useStyles = makeStyles(theme => ({
  badge: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    padding: theme.spacing(1),
    borderRadius: 5,
    fontWeight: 700,
    cursor: 'pointer',
  },
  popup: {
    display: 'flex',
    flexDirection: 'column',
  },
  option: {
    padding: theme.spacing(2),
    transition: '.15s ease',

    '&:hover': {
      backgroundColor: '#eee',
    },
  },
  Pending: {
    color: '#aaa',
    backgroundColor: fade(lighten('#aaa', 0.5), 0.6),
  },
  InProcess: {
    color: '#ebac00',
    backgroundColor: fade(lighten('#ebac00', 0.5), 0.6),
  },
  Finished: {
    color: '#88cc88',
    backgroundColor: fade(lighten('#88cc88', 0.5), 0.6),
  },
  Cancelled: {
    color: '#ee8888',
    backgroundColor: fade(lighten('#ee8888', 0.5), 0.6),
  },
}));

const OrderStatusBadge: FC<Props> = ({ id, status, className }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const [updateStatus] = useUpdateOrderStatusMutation();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleStatus = useCallback(
    (status: EnumOrderStatus) => {
      handleClose();

      return updateStatus({
        variables: {
          id,
          status,
        },
      });
    },
    [id, updateStatus],
  );

  const nonActiveStatuses = useMemo(
    () => Object.values(EnumOrderStatus).filter(orderStatus => orderStatus !== status),
    [status],
  );

  return (
    <Fragment>
      <ButtonBase onClick={handleClick} className={clsx(classes.badge, classes[status], className)}>
        {orderStatusDictionary[status]}
      </ButtonBase>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        classes={{ paper: classes.popup }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {nonActiveStatuses.map(orderStatus => (
          <ButtonBase key={`${orderStatus}-${id}`} onClick={() => handleStatus(orderStatus)} className={classes.option}>
            <Box role="button" className={clsx(classes.badge, classes[orderStatus])}>
              {orderStatusDictionary[orderStatus]}
            </Box>
          </ButtonBase>
        ))}
      </Popover>
    </Fragment>
  );
};

export default OrderStatusBadge;
