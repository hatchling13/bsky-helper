import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { isExpired } from 'react-jwt';

import type { ReactNode } from 'react';

import { UserContext } from './contexts';
import { apiLogin, apiRefresh } from '../endpoints/post';
import { anonymous } from '../utils/constants';

import type { AuthDataType, BskyUserDataType } from '../types/auth';

function UserProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  const [user, setUser] = useState<BskyUserDataType>(anonymous);

  const setUserWithStorage = (data: BskyUserDataType) => {
    setUser(data);
    localStorage.setItem('user', JSON.stringify(data));
  };

  const isAnonymous =
    user.did === '' &&
    user.handle === '' &&
    user.jwt.access === '' &&
    user.jwt.refresh === '';

  const loginMutation = useMutation({
    mutationFn: apiLogin,
    onSuccess: (data) => setUserWithStorage(data),
  });

  const refreshMutation = useMutation({
    mutationFn: apiRefresh,
    onSuccess: (data) => setUserWithStorage(data),
  });

  // Load user from localStorage
  useEffect(() => {
    const localStorageUser = localStorage.getItem('user');

    if (localStorageUser === null) {
      localStorage.setItem('user', JSON.stringify(anonymous));
    } else {
      const storedUser = JSON.parse(localStorageUser) as BskyUserDataType;

      setUser(storedUser);
    }
  }, []);

  // Refresh if access token is expired
  useEffect(() => {
    if (!isAnonymous && isExpired(user.jwt.access)) {
      refreshMutation.mutateAsync(user);
    }
  }, [isAnonymous, refreshMutation, user]);

  const login = useCallback(
    async (data: AuthDataType) => {
      setUser(anonymous);

      await loginMutation.mutateAsync(data, {
        onSuccess: () => navigate('/timeline', { replace: true }),
      });
    },
    [loginMutation, navigate]
  );

  const logout = useCallback(() => {
    setUser(anonymous);
    localStorage.removeItem('user');

    navigate('/', { replace: true });
  }, [navigate]);

  const value = useMemo(
    () => ({ user, isAnonymous, login, logout }),
    [user, isAnonymous, login, logout]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserProvider;
