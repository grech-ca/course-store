import { useQuery } from '@apollo/client';

import homeQuery from 'graphql/queries/homeQuery';

import { Product, Type, Location } from 'graphql/types';

type QueryData = Partial<{
  typeMany: Type[];
  productMany: Product[];
  categories: Type[];
  locations: Location[];
}>;

const useHomeQuery = (): QueryData => {
  const { data } = useQuery<QueryData>(homeQuery);
  const { typeMany, productMany, categories, locations } = data || {};

  return {
    typeMany,
    productMany,
    locations,
    categories,
  };
};

export default useHomeQuery;
