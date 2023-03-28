import axios, { AxiosRequestConfig } from 'axios';
import { APPID, BASE_URL } from '@env';

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const addAppIdRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  return {
    ...config,
    params: {
      ...config.params,
      appid: APPID,
    },
  };
};

api.interceptors.request.use(addAppIdRequest);

export default api;
