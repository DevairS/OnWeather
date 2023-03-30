import axios, { AxiosRequestConfig } from 'axios';
import { APPID, BASE_URL } from '@env';

const apiKey = APPID;
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
      appid: apiKey,
    },
  };
};

api.interceptors.request.use(addAppIdRequest);

export default api;
