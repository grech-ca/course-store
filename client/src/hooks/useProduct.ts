import { useParams } from 'react-router-dom';

import { Product, useProductQuery } from 'graphql/generated';

type RouteParams = {
  id: string;
};

type UseProductArgs = {
  admin?: boolean;
};

type UseProductHookResult = {
  loading: boolean;
  product: Product;
  recommended: Product[];
};

const useProductPage = (options?: UseProductArgs): UseProductHookResult => {
  const { id } = useParams<RouteParams>();

  const { data, loading } = useProductQuery({
    variables: {
      id: id,
      admin: options?.admin || false,
    },
  });
  const { product, recommended = [] } = data || {};

  return {
    loading,
    product: product as Product,
    recommended: recommended as Product[],
  };
};

export default useProductPage;
