import React, { FC, Fragment, useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { DateTime } from 'luxon';

import { AppBar, Toolbar, Box, Typography, IconButton, Badge, Popover, Divider } from '@material-ui/core';
import { ShoppingCart, Notifications } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import Spacer from 'components/common/Spacer';

import useCart from 'hooks/useCart';
import useNotification, { Notification } from 'hooks/useNotification';

type CartItem = {
  id: string;
  date: string;
  quantity: number;
};

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    fontWeight: 900,
    fontSize: 24,
    textDecoration: 'none',
    color: '#fff',
  },
  iconButton: {
    marginLeft: theme.spacing(1),
    color: '#fff',
  },
  notiPopup: {
    display: 'flex',
    flexDirection: 'column',
    width: 260,
    maxHeight: 400,
  },
  notiTitle: {
    fontWeight: 700,
    fontSize: 16,
    padding: theme.spacing(2),
  },
  notiList: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    overflowY: 'auto',
  },
  notiItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: theme.spacing(1, 0),
  },
  notiName: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: theme.spacing(0.5),
  },
  notiDescription: {
    fontSize: 14,
  },
  notiDate: {
    marginTop: theme.spacing(1),
    fontSize: 14,
    alignSelf: 'flex-end',
  },
  notiEmpty: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
}));

const Header: FC = () => {
  const classes = useStyles();

  const { cart } = useCart();

  const { makeRead, notifications, readDate } = useNotification();

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const totalInCart = useMemo<number>(
    () => cart.reduce((total: number, current: CartItem) => total + current.quantity, 0),
    [cart],
  );

  const unread = useMemo<number>(
    () =>
      notifications.reduce((quantity: number, { date }: Notification) => {
        if (date > (readDate || 0)) return quantity + 1;
        return quantity;
      }, 0),
    [notifications, readDate],
  );

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box className={classes.root}>
          <Typography component={Link} to="/" className={classes.logo}>
            G-Store
          </Typography>
          <Spacer />
          <IconButton className={classes.iconButton} component={Link} to="/cart">
            <Badge color="secondary" badgeContent={totalInCart}>
              <ShoppingCart />
            </Badge>
          </IconButton>
          <IconButton onClick={handleOpen} className={classes.iconButton}>
            <Badge color="secondary" badgeContent={unread}>
              <Notifications />
            </Badge>
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
            <Box onMouseOver={() => makeRead()} className={classes.notiPopup}>
              <Typography className={classes.notiTitle}>Уведомления</Typography>
              <Divider />
              {notifications.length ? (
                <Box className={classes.notiList}>
                  {notifications.map(({ title, description, date }: Notification, index: number) => (
                    <Fragment key={`${title}-${description}-${date}`}>
                      {Boolean(index) && <Divider />}
                      <Box className={classes.notiItem}>
                        <Typography className={classes.notiName}>{title}</Typography>
                        <Typography className={classes.notiDescription}>{description}</Typography>
                        <Typography className={classes.notiDate}>
                          {DateTime.fromISO(date).toRelative({ locale: 'ru' })}
                        </Typography>
                      </Box>
                    </Fragment>
                  ))}
                </Box>
              ) : (
                <Box className={classes.notiEmpty}>
                  <Typography>У вас нет уведомлений</Typography>
                </Box>
              )}
            </Box>
          </Popover>
          {/* <IconButton className={classes.iconButton}>
            <AccountCircle />
          </IconButton> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
