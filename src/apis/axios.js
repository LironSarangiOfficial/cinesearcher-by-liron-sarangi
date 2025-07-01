import { OMDB_API_URL, OMDB_API_KEY } from "constants";

import axios from "axios";

const responseInterceptor = () => {
  axios.interceptors.response.use(response => response.data);
};

const requestInterceptor = () => {
  axios.interceptors.request.use(config => {
    config.params = {
      apiKey: OMDB_API_KEY,
      ...(config.params || {}),
    };

    return config;
  });
};

// const setAxiosDefaults = () => {
//   axios.defaults.params = {
//     apiKey: OMDB_API_KEY
//   }
// }

// export const initializeAxios = () => {
//   axios.defaults.baseURL = OMDB_API_URL
//   setDefaultParams();
//   // responseInterceptor();
// };

export const initializeAxios = () => {
  axios.defaults.baseURL = OMDB_API_URL;
  requestInterceptor();
  responseInterceptor();
};
