import React, { FC, Fragment, useMemo, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';
import { DateTime } from 'luxon';
import clsx from 'clsx';

import { Typography, Button, Collapse, Box } from '@material-ui/core';

import SnackCard from 'components/common/SnackCard';

import recentlyModifiedQuery from 'graphql/queries/recentlyModifiedQuery';

type InputModel = {
  _id: string;
  name: string;
  updatedAt: string;
  photos?: string[];
  photo?: string;
};

type OutputModel = {
  _id: string;
  name: string;
  updatedAt: string;
  photo: string;
};

const useStyles = makeStyles(theme => ({
  recentList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: theme.spacing(2),
    gridAutoRows: 'min-content',
    transition: '.2s ease',
  },
  recentTitle: {
    gridColumn: '1/5',
    fontSize: 18,
  },
  section: {
    gridColumn: '1/5',
    fontWeight: 700,
  },
  recentButton: {
    marginTop: theme.spacing(2),
    width: '100%',
    textTransform: 'initial',
  },
  heading: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: theme.spacing(2),
  },
}));

const replacePhotoKey = (data: InputModel[]): OutputModel[] =>
  data.map(object => {
    const newObject: InputModel = { ...object };

    if (newObject && newObject.photos?.[0]) {
      newObject.photo = newObject.photos?.[0];
      delete newObject.photos;
    }

    return newObject as OutputModel;
  });

const AdminHome: FC = () => {
  const classes = useStyles();

  const [recentOpen, setRecentOpen] = useState<boolean>(false);

  const { data } = useQuery(recentlyModifiedQuery, {
    variables: {
      date: DateTime.local().minus({ days: 30 }).toISODate(),
    },
  });

  const handleRecentOpen = () => {
    setRecentOpen(isOpen => !isOpen);
  };

  const getMaxDate = (arr: InputModel[]) => {
    if (!arr.length) return 0;

    const recentModel = arr.reduce((max, next) => (max.updatedAt < next.updatedAt ? next : max), arr[0]);

    return recentModel.updatedAt;
  };

  const recent = useMemo(() => {
    if (!data) return [];

    const joined = Object.entries(data).map(([key, model]) => {
      let section;
      let path;
      switch (key) {
        case 'categories':
          section = 'Типы мебели';
          path = '/types';
          break;
        case 'locations':
          section = 'Комнаты';
          path = '/rooms';
          break;
        case 'materials':
          section = 'Материалы';
          path = '/materials';
          break;
        case 'products':
          section = 'Мебель';
          path = '/product';
      }

      return {
        data: replacePhotoKey(model as InputModel[]),
        section,
        path,
      };
    });

    const filtered = joined.filter(group => getMaxDate(group.data));

    const sorted = filtered.sort((groupA, groupB) => {
      const dateA = getMaxDate(groupA.data);
      const dateB = getMaxDate(groupB.data);

      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
      return 0;
    });

    return sorted;
  }, [data]);

  const recentCount = useMemo(() => recent.reduce((all: unknown[], group) => [...all, ...group.data], []).length, [
    recent,
  ]);

  return (
    <Box>
      {recent.length > 0 && (
        <Fragment>
          <Collapse in={recentOpen} collapsedHeight={recentCount > 4 ? 230 : 160}>
            <Typography className={classes.heading}>Недавние изменения</Typography>
            <Box className={clsx(classes.recentList)}>
              {recent.map(group => (
                <Fragment key={group.section}>
                  {group.data.map(({ updatedAt, photo, name, _id }, index) => (
                    <Fragment key={_id}>
                      {!index && <Typography className={classes.section}>{group.section}</Typography>}
                      <SnackCard date={updatedAt} photo={photo || ''} name={name} onClick={() => null} />
                    </Fragment>
                  ))}
                </Fragment>
              ))}
            </Box>
          </Collapse>
          {recentCount > 4 && (
            <Button className={classes.recentButton} variant="contained" color="primary" onClick={handleRecentOpen}>
              {recentOpen ? 'Скрыть' : 'Показать все'}
            </Button>
          )}
        </Fragment>
      )}
    </Box>
  );
};

export default AdminHome;
