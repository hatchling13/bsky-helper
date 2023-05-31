import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import type { ReactNode } from 'react';

import { UserContext } from './contexts';
import { apiLogin, apiRefresh } from '../endpoints/post';
import { anonymous } from '../utils/constants';

import type { AuthDataType, BskyUserDataType } from '../types/auth';

type UserProviderType = {
  children: ReactNode;
};

function UserProvider({ children }: UserProviderType) {
  const navigate = useNavigate();

  const [user, setUser] = useState<BskyUserDataType>(anonymous);

  const loginMutation = useMutation({
    mutationFn: apiLogin,
    onSuccess: (data) => setUser(data),
  });

  const refreshMutation = useMutation({
    mutationFn: apiRefresh,
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

  const isAnonymous = useCallback(() => {
    return (
      user.did === '' &&
      user.handle === '' &&
      user.jwt.access === '' &&
      user.jwt.refresh === ''
    );
  }, [user]);

  const login = useCallback(
    async (data: AuthDataType) => {
      setUser(anonymous);

      await loginMutation.mutateAsync(data, {
        onSuccess: (result: BskyUserDataType) => {
          setUser(result);
          localStorage.setItem('user', JSON.stringify(result));
          navigate('/timeline', { replace: true });
        },
      });
    },
    [loginMutation, navigate]
  );

  const logout = useCallback(() => {
    setUser(anonymous);

    localStorage.removeItem('user');
    navigate('/', { replace: true });
  }, [navigate]);

  const refresh = useCallback(async () => {
    await refreshMutation.mutateAsync(user, {
      onSuccess: (result: BskyUserDataType) => {
        setUser(result);

        localStorage.setItem('user', JSON.stringify(result));
      },
    });
  }, [user, refreshMutation]);

  const value = useMemo(
    () => ({ user, isAnonymous, login, logout, refresh }),
    [user, isAnonymous, login, logout, refresh]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
