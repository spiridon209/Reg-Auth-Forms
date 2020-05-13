import axios from "axios";
import { rootApiUrl } from "./rootApiUrl";

const authUrl = `${rootApiUrl}/users/login`;

export const authFetch = async (data) => {
  try {
    const response = await axios.post(authUrl, {
      user: data,
    });
    return response;
  } catch (err) {
    throw err;
  }
};

const regUrl = `${rootApiUrl}/users/`;

export const regFetch = async (data) => {
  try {
    const response = await axios.post(regUrl, {
      user: data,
    });
    return response;
  } catch (err) {
    throw err;
  }
};
