import axios from 'axios';
import urls from './apiUrls';

export const authFetch = async (data) => {
  const authUrl = urls.getLoginPath();
  const response = await axios.post(authUrl, {
    user: data,
  });
  return response;
};

export const regFetch = async (data) => {
  const regUrl = urls.getSignupPath();
  const response = await axios.post(regUrl, {
    user: data,
  });
  return response;
};

export const autoLogInFetch = async (headers) => {
  const autoLogInUrl = urls.getAutoLoginPath();
  const response = await axios.get(autoLogInUrl, { headers });
  return response;
};
