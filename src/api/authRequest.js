import axios from 'axios';
import rootApiUrl from './rootApiUrl';

const authUrl = `${rootApiUrl}/users/login`;

export const authFetch = async (data) => {
  const response = await axios.post(authUrl, {
    user: data,
  });
  return response;
};

const regUrl = `${rootApiUrl}/users/`;

export const regFetch = async (data) => {
  const response = await axios.post(regUrl, {
    user: data,
  });
  return response;
};
