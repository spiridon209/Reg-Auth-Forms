import axios from 'axios';
import urls from './apiUrls';
import { getToken } from '../localStorage';

const updateArticleFetch = async (data, slug) => {
  const updateArticleUrl = urls.getArticlePath(slug);
  const token = getToken();
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
