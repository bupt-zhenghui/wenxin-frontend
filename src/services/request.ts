import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd';
import { backendAPI } from '@/pages/consts';

// axios.defaults.withCredentials = true;

const successHandler = (resp: AxiosResponse) => {
  const { data } = resp;
  console.log(data);
  console.log(data.status);
  if (data.status === 0) {
    return data.data;
  }
  message.error(data.message);
  throw new Error(data.message);
};

const errorHandler = (error: AxiosError) => {
  if (error.response) {
    const { data } = error.response;
    if (data && data.message) {
      message.error(data.message);
    } else {
      message.error('Server Error.');
    }
  }
  throw error;
};

const horizonApi = axios.create({
  baseURL: backendAPI,
  timeout: 30 * 1000,
});

export default function request(config: AxiosRequestConfig) {
  const resolved = {
    successHandler,
    errorHandler,
  };
  return horizonApi(config).then(resolved.successHandler, resolved.errorHandler);
}

request.get = <T = any>(url: string, params?: any): Promise<T> => {
  console.log(url);
  return request({ method: 'get', url, params });
};

request.post = <T = any>(url: string, data: any): Promise<T> => {
  console.log(url);
  return request({ method: 'post', url, data });
};
