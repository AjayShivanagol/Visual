import axios from 'axios';

/**
 * set axios base configurations
 */
const axiosInst = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  timeout: 20000,
});

/**
 * interceptor for request
 */
axiosInst.interceptors.request.use(
  async (requestConfig) => {
    return requestConfig;
  },
  (error) => Promise.reject(error),
);

/**
 * interceptor for response
 */
axiosInst.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

export default axiosInst;
