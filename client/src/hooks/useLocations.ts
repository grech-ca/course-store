import { useLocationsQuery, Location } from 'graphql/generated';

type UseLocationsHookResult = {
  locations: Location[];
  loading: boolean;
};

const useLocations = (): UseLocationsHookResult => {
  const { data, loading } = useLocationsQuery();
  const { locations = [] } = data || {};

  return {
    locations: locations as Location[],
    loading,
  };
};

export default useLocations;
