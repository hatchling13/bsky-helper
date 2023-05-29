import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import type { ReactNode } from 'react';

import { postLogin } from '../endpoints/post';
import { anonymous } from '../utils/constants';
import type {
  AuthDataType,
  BskyUserDataType,
  UserContextType,
} from '../types/auth';

export const UserContext = createContext<UserContextType>({
  user: anonymous,
  login: async () => {
    return;
  },
  logout: () => {
    return;
  },
});

type UserProviderType = {
  children: ReactNode;
};

function UserProvider({ children }: UserProviderType) {
  const [user, setUser] = useState<BskyUserDataType>(anonymous);

  const { mutateAsync } = useMutation({
    mutationFn: postLogin,
    onSuccess: (data) => setUser(data),
  });

  useEffect(() => {
    const localStorageUser = localStorage.getItem('user');

    if (localStorageUser === null) {
      localStorage.setItem('user', JSON.stringify(anonymous));
    } else {
      setUser(JSON.parse(localStorageUser) as BskyUserDataType);
    }
  }, []);

  const navigate = useNavigate();

  const login = useCallback(
    async (data: AuthDataType) => {
      setUser(anonymous);

      await mutateAsync(data, {
        onSuccess: (result: BskyUserDataType) => {
          setUser(result);
          localStorage.setItem('user', JSON.stringify(result));
          navigate('/timeline', { replace: true });
        },
      });
    },
    [navigate, mutateAsync]
  );

  const logout = useCallback(() => {
    setUser(anonymous);

    localStorage.removeItem('user');

    navigate('/', { replace: true });
  }, [navigate]);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
