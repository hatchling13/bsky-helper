import type { AuthDataType } from '../types/auth';

const API_ROOT = 'http://localhost';

export const postLogin = async (data: AuthDataType) => {
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
