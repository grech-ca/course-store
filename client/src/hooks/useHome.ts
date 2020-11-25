import { useHomeQuery, Type as Category, Product } from 'graphql/generated';

type UseHomeQueryHookResult = {
  categories: Category[];
  products: Product[];
  loading: boolean;
};

const useHome = (): UseHomeQueryHookResult => {
  const { data, loading } = useHomeQuery();
  const { categories = [], products = [] } = data || {};

  return {
    categories: categories as Category[],
    products: products as Product[],
    loading,
  };
};

export default useHome;
