import React, { FC, ChangeEvent } from 'react';

import { FormControl, InputLabel, Select, MenuItem, Input } from '@material-ui/core';

export type SelectorValue = string | number | undefined;

export type SelectorOption = {
  label: string;
  value: SelectorValue;
};

type Props = {
  title: string;
  options: SelectorOption[];
  value: null | SelectorValue | SelectorValue[];
  noneLabel?: string;
  multiple?: boolean;
  name?: string;
  onChange: (e: ChangeEvent<{ value: unknown }>) => void;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Selector: FC<Props> = ({ title, options, value, noneLabel = 'Не указано', multiple = false, name, onChange }) => (
  <FormControl>
    <InputLabel>{title}</InputLabel>
    <Select name={name} multiple={multiple} value={value} onChange={onChange} input={<Input />} MenuProps={MenuProps}>
      {!multiple && (
        <MenuItem value={undefined}>
          <em>{noneLabel}</em>
        </MenuItem>
      )}

      {options.map(({ label, value }: SelectorOption) => (
        <MenuItem key={label} value={value}>
          {label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default Selector;
