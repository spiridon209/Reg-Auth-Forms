import axios from 'axios';
import rootApiUrl from './rootApiUrl';

// axios.defaults.headers.common.Authorization = `Token ${token}`;

const updateArticleFetch = async (data, slug) => {
  const updateArticleUrl = `${rootApiUrl}/articles/${slug}`;
  const token = localStorage.getItem('token');
  const headers = { Authorization: `Token ${token}` };
  const response = await axios.put(
    updateArticleUrl,
    {
      article: data,
    },
    { headers }
  );
  return response;
};

export default updateArticleFetch;
