// @flow strict
import axios from 'axios';
import { camelizeKeys } from 'humps';

axios.defaults.baseURL = process.env.API_URL;
axios.interceptors.response.use(
  (response) => {
    return camelizeKeys(response);
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axios;
