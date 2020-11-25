import React, { FC, useState, ChangeEvent, useEffect, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import compact from 'lodash/compact';

import {
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import removeOrCreate from 'helpers/removeOrCreate';
import entries from 'helpers/entries';
import { CommonFilterOptionName, CommonFilterOption, commonOptions } from 'helpers/constants';

import useProductsContext from 'hooks/useProductsContext';
import useCart from 'hooks/useCart';
import useMaterials from 'hooks/useMaterials';
import useLocations from 'hooks/useLocations';
import useCategories from 'hooks/useCategories';

import { SortFindManyProductInput, FilterFindManyProductInput } from 'graphql/generated';

const useStyles = makeStyles(theme => ({
  filter: {
    padding: theme.spacing(3),
    minHeight: 400,
    height: 'fit-content',
    minWidth: 320,
    width: 320,
    marginLeft: theme.spacing(2),
  },
  filterTitle: {
    fontWeight: 700,
    fontSize: 20,
    marginBottom: theme.spacing(1),
  },
  sort: {
    minWidth: '100%',
    marginBottom: theme.spacing(1),
  },
  checkList: {
    display: 'flex',
    flexDirection: 'column',
  },
  commonOptions: {
    marginBottom: theme.spacing(1),
  },
}));

const ProductsFilter: FC = () => {
  const classes = useStyles();

  const { cart } = useCart();

  const { setSort, setFilter } = useProductsContext();

  const { categories } = useCategories();
  const { locations } = useLocations();
  const { materials } = useMaterials();

  const [activeCategories, setActiveCategories] = useState<(string | null)[]>([]);
  const [activeLocations, setActiveLocations] = useState<(string | null)[]>([]);
  const [activeMaterials, setActiveMaterials] = useState<(string | null)[]>([]);
  const [activeCommonOptions, setActiveCommonOptions] = useState<CommonFilterOptionName[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | { name?: string | undefined; value: unknown }>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'category':
        return setActiveCategories(removeOrCreate(activeCategories, value as string));
      case 'location':
        return setActiveLocations(removeOrCreate(activeLocations, value as string));
      case 'material':
        return setActiveMaterials(removeOrCreate(activeMaterials, value as string));
      case 'sort':
        return setSort(value as SortFindManyProductInput);
      case 'commonOption':
        return setActiveCommonOptions(removeOrCreate(activeCommonOptions, value as CommonFilterOptionName));
    }
  };

  const commonOptionsResolvers = useMemo<FilterFindManyProductInput[]>(
    () =>
      activeCommonOptions.map((option: CommonFilterOptionName) => {
        switch (option) {
          case CommonFilterOptionName.NotInCart:
            return commonOptions[option].resolve(cart.map(({ id }) => id));
          default:
            return commonOptions[option].resolve();
        }
      }),
    [activeCommonOptions, cart],
  );

  const locationsResolver = useMemo<FilterFindManyProductInput | undefined>(() => {
    const compactLocations = compact([...activeLocations]);
    if (!compactLocations.length) return;
    return {
      _operators: {
        categoryRef: {
          in: compactLocations,
        },
      },
    };
  }, [activeLocations]);

  const materialsResolver = useMemo<FilterFindManyProductInput | undefined>(() => {
    const compactMaterials = compact([...activeMaterials]);
    if (!compactMaterials.length) return;
    return {
      _operators: {
        categoryRef: {
          in: compactMaterials,
        },
      },
    };
  }, [activeMaterials]);

  const categoriesResolver = useMemo<FilterFindManyProductInput | undefined>(() => {
    const compactCategories = compact([...activeCategories]);
    if (!compactCategories.length) return;
    return {
      _operators: {
        categoryRef: {
          in: compactCategories,
        },
      },
    };
  }, [activeCategories]);

  useEffect((): void => {
    const compactOptions = compact([locationsResolver, materialsResolver, categoriesResolver]);
    const options = compactOptions.length ? { OR: compactOptions } : undefined;
    const conditions = [...commonOptionsResolvers];
    setFilter({
      AND: conditions.length ? compact([options, ...conditions]) : undefined,
      OR: conditions.length ? undefined : options?.OR,
    });
  }, [
    activeCommonOptions,
    categoriesResolver,
    commonOptionsResolvers,
    locationsResolver,
    materialsResolver,
    setFilter,
  ]);

  return (
    <Paper className={classes.filter}>
      <Typography className={classes.filterTitle}>Фильтр</Typography>
      <FormControl className={classes.sort}>
        <InputLabel>Сортировать</InputLabel>
        <Select onChange={handleChange} name="sort">
          <MenuItem value={undefined}>Не указано</MenuItem>
          <MenuItem value={SortFindManyProductInput.PriceAsc}>Цена – по возрастанию</MenuItem>
          <MenuItem value={SortFindManyProductInput.PriceDesc}>Цена – по убыванию</MenuItem>
          <MenuItem value={SortFindManyProductInput.QuantityAsc}>Количество – по возрастанию</MenuItem>
          <MenuItem value={SortFindManyProductInput.QuantityDesc}>Количество – по убыванию</MenuItem>
        </Select>
      </FormControl>
      <Box className={classes.commonOptions}>
        {entries<Record<CommonFilterOptionName, CommonFilterOption>>(commonOptions).map(([name, { label }]) => (
          <FormControlLabel
            key={name}
            control={
              <Checkbox
                name="commonOption"
                checked={activeCommonOptions.includes(name)}
                value={name}
                onChange={handleChange}
                color="primary"
              />
            }
            label={label}
          />
        ))}
      </Box>
      <Box>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Мебель</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.checkList}>
              {categories.map(({ _id, name }) => (
                <FormControlLabel
                  key={_id}
                  control={
                    <Checkbox
                      checked={activeCategories.includes(_id)}
                      onChange={handleChange}
                      value={_id}
                      name="category"
                      color="primary"
                    />
                  }
                  label={name}
                />
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Комната</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.checkList}>
              {locations.map(({ _id, name }) => (
                <FormControlLabel
                  key={_id}
                  control={
                    <Checkbox
                      checked={activeLocations.includes(_id)}
                      onChange={handleChange}
                      value={_id}
                      name="location"
                      color="primary"
                    />
                  }
                  label={name}
                />
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Материал</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className={classes.checkList}>
              {materials.map(({ _id, name }) => (
                <FormControlLabel
                  key={_id}
                  control={
                    <Checkbox
                      checked={activeMaterials.includes(_id)}
                      onChange={handleChange}
                      value={_id}
                      name="material"
                      color="primary"
                    />
                  }
                  label={name}
                />
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Paper>
  );
};

export default ProductsFilter;
