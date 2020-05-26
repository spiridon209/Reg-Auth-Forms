import axios from 'axios';
import urls from './apiUrls';
import { getToken } from '../localStorage';

const getArticlesFetch = async (offset) => {
  const token = getToken();
  const headers = { Authorization: `Token ${token}` };
  const getArticlesListUrl = urls.getArticlesListPath(offset);
  if (!token) {
    const response = await axios.get(getArticlesListUrl);
    return response;
  }
  const response = await axios.get(getArticlesListUrl, { headers });
  return response;
};

export default getArticlesFetch;
