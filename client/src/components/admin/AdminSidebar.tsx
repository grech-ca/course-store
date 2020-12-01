import React, { FC, Fragment, ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Paper, List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import WeekendIcon from '@material-ui/icons/Weekend';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

type Route = {
  label: string;
  icon: ReactElement;
  divide?: boolean;
};

type Routes = Record<string, Route>;

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 0,
    minWidth: 290,
    height: '100%',
  },
  list: {
    marginTop: theme.spacing(2),
  },
  link: {
    fontSize: 18,
    color: '#000',
  },
  listIcon: {
    minWidth: 'fit-content',
    marginRight: theme.spacing(2),
  },
}));

const routes: Routes = {
  '': {
    label: 'Главная',
    icon: <HomeIcon />,
    divide: true,
  },
  // categories: {
  //   label: 'Категории',
  //   icon: <InsertDriveFileIcon />,
  // },
  // materials: {
  //   label: 'Материалы',
  //   icon: <BuildIcon />,
  // },
  // locations: {
  //   label: 'Комнаты',
  //   icon: <MeetingRoomIcon />,
  // },
  product: {
    label: 'Мебель',
    icon: <WeekendIcon />,
    divide: true,
  },
  order: {
    label: 'Заказы',
    icon: <AssignmentTurnedInIcon />,
  },
};

const AdminSidebar: FC = () => {
  const classes = useStyles();

  const history = useHistory();

  const handleRoute = (path: string) => {
    history.push(`/admin/${path}`);
  };

  return (
    <Paper elevation={3} className={classes.root}>
      <List className={classes.list}>
        {Object.entries(routes).map(([path, route]: [path: string, route: Route]) => (
          <Fragment key={path}>
            <ListItem button onClick={() => handleRoute(path)}>
              <ListItemIcon className={classes.listIcon}>{route.icon}</ListItemIcon>
              <ListItemText>{route.label}</ListItemText>
            </ListItem>
            {route?.divide && <Divider />}
          </Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default AdminSidebar;
