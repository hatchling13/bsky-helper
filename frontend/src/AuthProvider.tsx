import { createContext, useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { ReactNode } from 'react';

const API_ROOT = '';

type UserDataType = {
  handle: string;
  displayedName: string;
  error: Error | null;
};

const anonymous: UserDataType = {
  handle: '',
  displayedName: '',
  error: null,
};

type AuthProviderType = {
  children: ReactNode;
};

type AuthDataType = {
  handle: string;
  password: string;
};

type AuthContextType = {
  user: UserDataType;
  login: (data: AuthDataType) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: anonymous,
  login: async () => {
    console.log('Initial login function');
  },
  logout: () => {
    console.log('Initial logout function');
  },
});

/*
Tanstack Query

const bskyLogin = async () => {
  console.log('Bluesky login');
};
*/

const fakeAPICall = async (
  endpoint: string,
  data: AuthDataType,
  failed: boolean
): Promise<UserDataType> => {
  console.log(
    `API Call, Endpoint: ${endpoint}, Handle: ${data.handle}, Password: ${data.password}`
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (failed) {
        console.log('Failed!');

        const result = {
          handle: '',
          displayedName: '',
          error: new Error('Something went wrong!'),
        };

        reject(result);
      } else {
        console.log('Success!');

        const result = {
          handle: 'johndoe.bsky.social',
          displayedName: 'John Doe',
          error: null,
        };

        resolve(result);
      }
    }, 3000);
  });
};

function AuthProvider({ children }: AuthProviderType) {
  const [user, setUser] = useState<UserDataType>(anonymous);
  const navigate = useNavigate();

  const login = useCallback(
    async (data: AuthDataType) => {
      const endpoint = `${API_ROOT}/login`;

      setUser(anonymous);

      try {
        const userData = await fakeAPICall(endpoint, data, true);
        setUser(userData);

        navigate('/timeline', { replace: true });
      } catch (e) {
        const rejected = e as UserDataType;
        setUser(rejected);
      }
    },
    [navigate]
  );

  const logout = useCallback(() => {
    setUser(anonymous);
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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
