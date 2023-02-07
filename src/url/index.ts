import axios  from "axios";
import {configUrl} from './configUrl'
import { pageRoutes } from "router/config";
import { getToken } from "service";

const token = getToken();

let client = axios.create();

client.interceptors.request.use(async (config?: any) =>  {

    config.baseURL = configUrl.domain;
    config.headers['access_token'] = token || "";
    return config;

  }, (error?: any) =>  {
    return Promise.reject(error);
  });


// Add a response interceptor
client.interceptors.response.use(async (response?: any) => {
  if (!response.data) {
    return Promise.reject(response)
  }
  return response
}, (error?: any) => {
  if (axios.isAxiosError(error)) {
    return error.response
  } else {
    return Promise.reject(error)
  }
})

export default client;