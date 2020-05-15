import axios from 'axios';
import rootApiUrl from './rootApiUrl';

export const authFetch = async (data) => {
  const authUrl = `${rootApiUrl}/users/login`;
  const response = await axios.post(authUrl, {
    user: data,
  });
  return response;
};

export const regFetch = async (data) => {
  const regUrl = `${rootApiUrl}/users`;
  const response = await axios.post(regUrl, {
    user: data,
  });
  return response;
};

export const autoLogInFetch = async (headers) => {
  const autoLogInUrl = `${rootApiUrl}/user`;
  const response = await axios.get(autoLogInUrl, { headers });
  return response;
};
