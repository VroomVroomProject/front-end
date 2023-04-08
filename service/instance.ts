import axios from 'axios';

const instance = axios.create({
  baseURL: '',
  timeout: 5000,
  // withCredentials: true,
});

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // 향후 공통 에러 처리 할 거
    return Promise.reject(error);
  },
);

export default instance;
