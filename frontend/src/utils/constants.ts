import { BskyUserDataType } from '../types/auth';

export const anonymous: BskyUserDataType = {
  did: '',
  handle: '',
  jwt: {
    access: '',
    refresh: '',
  },
};
