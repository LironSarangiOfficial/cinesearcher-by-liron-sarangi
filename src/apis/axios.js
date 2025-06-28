import axios from "axios";

const responseInterceptor = () => {
  axios.interceptors.response.use(response => response.data);
};

export const initializeAxios = () => {
  responseInterceptor();
};
