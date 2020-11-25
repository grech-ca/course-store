import React, { FC, useState, useMemo, useCallback, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

import { Paper, List, ListItem, ListItemText, Collapse } from '@material-ui/core';

import useCategories from 'hooks/useCategories';
import useLocations from 'hooks/useLocations';

type Section = {
  name: string;
  title: string;
  items: SectionItem[];
};

type SectionItem = {
  _id: string;
  name: string;
};

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
    padding: theme.spacing(2, 0),
    paddingTop: theme.spacing(4.5),
  },
  buttonBase: {
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: 14,
    textAlign: 'left',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: 0,
  },
  sectionElement: {
    padding: theme.spacing(0.5, 2),
  },
  sectionTitleText: {
    '& span': {
      fontWeight: 700,
    },
  },
  sectionItem: {
    paddingLeft: theme.spacing(3),
    '& span': {
      fontSize: 14,
    },
  },
}));

const Sidebar: FC = () => {
  const classes = useStyles();

  const { push } = useHistory();

  const { categories } = useCategories();
  const { locations } = useLocations();

  const [openedSection, setOpenedSection] = useState<string | undefined>(undefined);

  const handleSection = useCallback(
    (section: string) => {
      setOpenedSection(section === openedSection ? undefined : section);
    },
    [openedSection],
  );

  const sections = useMemo<Section[]>(
    () => [
      {
        name: 'type',
        title: 'Мебель',
        items: categories as SectionItem[],
      },
      {
        name: 'location',
        title: 'Комнаты',
        items: locations as SectionItem[],
      },
    ],
    [categories, locations],
  );

  return (
    <Paper className={classes.paper}>
      {sections.map(({ items, name, title }) => (
        <Fragment key={name}>
          {items && (
            <List className={classes.section}>
              <ListItem onClick={() => handleSection(name)} className={classes.sectionElement} button>
                <ListItemText className={classes.sectionTitleText}>{title}</ListItemText>
              </ListItem>
              <Collapse in={openedSection === name}>
                {items.map(({ _id, name: itemName }) => (
                  <ListItem
                    onClick={(): void => push(`/${name}/${_id}`)}
                    className={clsx(classes.sectionItem, classes.sectionElement)}
                    button
                    key={_id}
                  >
                    <ListItemText>{itemName}</ListItemText>
                  </ListItem>
                ))}
              </Collapse>
            </List>
          )}
        </Fragment>
      ))}
    </Paper>
  );
};

export default Sidebar;
