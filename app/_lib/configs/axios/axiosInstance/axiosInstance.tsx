import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '',
});
axiosInstance.interceptors.request.use(
  (config) => {
    if (!config.url) throw new Error('Missing API URL');
    // if need token:
    // const token = getToken();
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);
