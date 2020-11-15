import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import productByIdQuery from 'graphql/queries/productByIdQuery';

import { Product } from 'graphql/types';

type RouteParams = {
  id: string;
};

type UseProductArgs = {
  admin?: boolean;
};

type UseProductOutput = {
  loading: boolean;
  data?: Product;
  recommended?: Product[];
};

type QueryData = {
  productById: Product;
  recommended: Product[];
};

type UseProductHook = (options?: UseProductArgs) => UseProductOutput;

const useProductPage: UseProductHook = options => {
  const { id } = useParams<RouteParams>();

  const { data, loading } = useQuery<QueryData>(productByIdQuery, {
    variables: {
      id: id,
      admin: options?.admin || false,
    },
  });

  return {
    loading,
    data: data?.productById,
    recommended: data?.recommended,
  };
};

export default useProductPage;
