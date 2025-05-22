import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '',
});

// Executor before request
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

// Executor after get response
axiosInstance.interceptors.response.use(
  (response) => {
    if (!response.status) throw new Error('No Status Response');
    return response;
  },
  (error) => Promise.reject(error),
);
