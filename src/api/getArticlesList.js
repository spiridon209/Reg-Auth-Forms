import axios from 'axios';
import rootApiUrl from './rootApiUrl';

const getArticlesFetch = async (offset) => {
  const token = localStorage.getItem('token');
  const headers = { Authorization: `Token ${token}` };
  const getArticlesListUrl = `${rootApiUrl}/articles?limit=10&offset=${offset}`;
  if (!token) {
    const response = await axios.get(getArticlesListUrl);
    return response;
  }
  const response = await axios.get(getArticlesListUrl, { headers });
  return response;
};

export default getArticlesFetch;
