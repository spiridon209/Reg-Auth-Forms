import axios from 'axios';
import urls from './apiUrls';
import { getToken } from '../localStorage';

export const favoriteArticleFetch = async (slug) => {
  const token = getToken();
  const headers = { Authorization: `Token ${token}` };
  const favoriteArticleUrl = urls.getFavoriteArticlePath(slug);
  const response = await axios.post(favoriteArticleUrl, null, { headers });
  return response;
};

export const unfavoriteArticleFetch = async (slug) => {
  const token = getToken();
  const headers = { Authorization: `Token ${token}` };
  const favoriteArticleUrl = urls.getFavoriteArticlePath(slug);
  const response = await axios.delete(favoriteArticleUrl, { headers });
  return response;
};
