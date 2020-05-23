import axios from 'axios';
import rootApiUrl from './rootApiUrl';

const getArticleFetch = async (slug) => {
  const token = localStorage.getItem('token');
  const headers = { Authorization: `Token ${token}` };
  const getArticleListUrl = `${rootApiUrl}/articles/${slug}`;
  if (!token) {
    const response = await axios.get(getArticleListUrl);
    return response;
  }
  const response = await axios.get(getArticleListUrl, { headers });
  return response;
};

export default getArticleFetch;
