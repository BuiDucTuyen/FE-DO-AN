import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const client: AxiosInstance = axios.create({});

client.defaults.timeout = 1000 * 60 * 10;

client.defaults.withCredentials = true;

const getCsrfToken = (): string | null => {
  const name = 'csrftoken';
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) {
    return match[2];
  }
  return null;
};

// Interceptor cho request
client.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const csrfToken = getCsrfToken();
    if (csrfToken) {
      config.headers['X-Csrftoken'] = csrfToken;
    }
    return config;
  },
  (error: any): Promise<never> => {
    return Promise.reject(error);
  }
);

// Interceptor cho response
client.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: any): Promise<never> => {
    return Promise.reject(error);
  }
);

export default client;
