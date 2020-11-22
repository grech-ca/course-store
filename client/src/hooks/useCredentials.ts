import useStorage from 'hooks/useStorage';

type UseCredentialsHookResult = {
  token?: string | null;
  setToken: (value: string | undefined | null) => void;
};

const useCredentials = (): UseCredentialsHookResult => {
  const [token, setToken] = useStorage<string | undefined | null>('token', undefined);

  return {
    token,
    setToken,
  };
};

export default useCredentials;
