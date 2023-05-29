export type AuthDataType = {
  identifier: string;
  password: string;
};

export type BskyUserDataType = {
  did: string;
  handle: string;
  jwt: {
    access: string;
    refresh: string;
  };
};

export type UserContextType = {
  user: BskyUserDataType;
  login: (data: AuthDataType) => Promise<void>;
  logout: () => void;
};
