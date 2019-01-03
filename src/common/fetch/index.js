import axios from "axios";

let fetch = axios.create({
  timeout: 100 * 1000,
  headers: {
    post: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    }
  }
});

fetch.interceptors.request.use(
  config => {
    // Do something before request is sent
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
fetch.interceptors.response.use(
  response => {
    // Do something with response data
    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default fetch;
