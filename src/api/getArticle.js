import axios from 'axios';
import urls from './apiUrls';
import { getToken } from '../localStorage';

const getArticleFetch = async (slug) => {
  const token = getToken();
  const headers = { Authorization: `Token ${token}` };
  const getArticleUrl = urls.getArticlePath(slug);
  if (!token) {
    const response = await axios.get(getArticleUrl);
    return response;
  }
  const response = await axios.get(getArticleUrl, { headers });
  return response;
};

export default getArticleFetch;
