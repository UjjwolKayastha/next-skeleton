import axios from "axios";

import { API_URL } from "./config";
import { handleError } from "./utils";

axios.defaults.baseURL = API_URL;
axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.responseType = "json";

const API = axios.create();

API.interceptors.request.use(
  async (cfg) => {
    const token = "token";

    cfg.headers["Authorization"] = "Bearer " + token;

    return cfg;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    if (
      err.response &&
      (err.response.status === 401 || err.response.status === 403)
    ) {
    }
    return Promise.reject(handleError(err));
  }
);

export { API };
