import { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import useStorage from 'hooks/useStorage';

import incrementViewsMutation from 'graphql/mutations/incrementViews';

type UseViewOutput = {
  isSeen: (id: string) => boolean;
  makeSeen: (id: string) => void;
};

const useViews = (): UseViewOutput => {
  const [seen, setSeen] = useStorage<string[]>('seen-products', []);

  const [incrementViews] = useMutation(incrementViewsMutation);

  const isSeen = useCallback((id: string) => seen.includes(id), [seen]);

  const makeSeen = useCallback(
    (id: string) => {
      if (isSeen(id)) return;
      setSeen([...seen, id]);
      void incrementViews({ variables: { id } });
    },
    [incrementViews, isSeen, seen, setSeen],
  );

  return {
    isSeen,
    makeSeen,
  };
};

export default useViews;
