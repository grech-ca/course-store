import { useCategoriesQuery, Type as Category } from 'graphql/generated';

type UseCategoriesHookResult = {
  categories: Category[];
  loading: boolean;
};

const useCategories = (): UseCategoriesHookResult => {
  const { data, loading } = useCategoriesQuery();
  const { categories = [] } = data || {};

  return {
    categories: categories as Category[],
    loading,
  };
};

export default useCategories;
