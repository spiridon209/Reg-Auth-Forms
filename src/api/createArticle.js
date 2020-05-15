import axios from 'axios';
import rootApiUrl from './rootApiUrl';

const createArticleUrl = `${rootApiUrl}/articles`;

// axios.defaults.headers.common.Authorization = `Token ${token}`;

const createArticleFetch = async (data) => {
  const token = localStorage.getItem('token');
  const headers = { Authorization: `Token ${token}` };
  const response = await axios.post(
    createArticleUrl,
    {
      article: data,
    },
    headers
  );
  return response;
};

export default createArticleFetch;
