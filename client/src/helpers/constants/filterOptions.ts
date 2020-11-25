import { FilterFindManyProductInput } from 'graphql/generated';

export type CommonFilterResolverFunction = (value?: any) => FilterFindManyProductInput;

export type CommonFilterOption = {
  label: string;
  resolve: CommonFilterResolverFunction;
};

export enum CommonFilterOptionName {
  InStock = 'inStock',
  NotInCart = 'notInCart',
}

export const commonOptions: Record<CommonFilterOptionName, CommonFilterOption> = {
  [CommonFilterOptionName.InStock]: {
    label: 'Есть на складе',
    resolve: (): FilterFindManyProductInput => ({
      _operators: {
        quantity: {
          gt: 0,
        },
      },
    }),
  },
  [CommonFilterOptionName.NotInCart]: {
    label: 'Не в корзине',
    resolve: (ids: string[]): FilterFindManyProductInput => ({
      _operators: {
        _id: {
          nin: ids,
        },
      },
    }),
  },
};
