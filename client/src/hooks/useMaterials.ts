import { useMaterialsQuery, Material } from 'graphql/generated';

type UseMaterialsHookResult = {
  materials: Material[];
  loading: boolean;
};

const useMaterials = (): UseMaterialsHookResult => {
  const { data, loading } = useMaterialsQuery();
  const { materials = [] } = data || {};

  return {
    materials: materials as Material[],
    loading,
  };
};

export default useMaterials;
