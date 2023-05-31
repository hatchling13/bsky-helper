import { createContext } from 'react';

import type { UserContextType } from '../types/auth';

import { anonymous } from '../utils/constants';

export const UserContext = createContext<UserContextType>({
  user: anonymous,
  isAnonymous: () => {
    return false;
  },
  login: async () => {
    return;
  },
  logout: () => {
    return;
  },
  refresh: async () => {
    return;
  },
});
