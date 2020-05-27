import axios from 'axios';
import urls from './apiUrls';
import { getToken } from '../localStorage';

const createArticleUrl = urls.getCreateArticlePath();

const createArticleFetch = async (data) => {
  const token = getToken();
  const headers = { Authorization: `Token ${token}` };
  const response = await axios.post(
    createArticleUrl,
    {
      article: data,
    },
    { headers }
  );
  return response;
};

export default createArticleFetch;
