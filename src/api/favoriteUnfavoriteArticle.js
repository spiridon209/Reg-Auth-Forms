import axios from 'axios';
import rootApiUrl from './rootApiUrl';

const token = localStorage.getItem('token');
const headers = { Authorization: `Token ${token}` };

export const favoriteArticleFetch = async (slug) => {
  const favoriteArticleUrl = `${rootApiUrl}/articles/${slug}/favorite`;
  const response = await axios.post(favoriteArticleUrl, null, { headers });
  return response;
};

export const unfavoriteArticleFetch = async (slug) => {
  const favoriteArticleUrl = `${rootApiUrl}/articles/${slug}/favorite`;
  const response = await axios.delete(favoriteArticleUrl, { headers });
  return response;
};
