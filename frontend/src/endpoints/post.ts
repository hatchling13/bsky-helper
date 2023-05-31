import type { AuthDataType, BskyUserDataType } from '../types/auth';

const API_ROOT = 'http://localhost';

export const apiLogin = async (data: AuthDataType) => {
  const endpoint = `${API_ROOT}/login`;

  const options: RequestInit = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(endpoint, options);

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const result = await response.json();

  return result;
};

export const apiRefresh = async (data: BskyUserDataType) => {
  const endpoint = `${API_ROOT}/refresh`;

  const options: RequestInit = {
    method: 'POST',
    mode: 'cors',
    headers: {
      did: data.did,
      handle: data.handle,
      Authorization: `Bearer ${data.jwt.access}`,
      RefreshAuthorization: `Bearer ${data.jwt.refresh}`,
    },
  };

  const response = await fetch(endpoint, options);

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const result = await response.json();

  return result;
};
