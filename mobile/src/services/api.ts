import axios from "axios";
import { getLoggedUser } from "./asyncStorage";

export const BASE_URL = "http://192.168.2.100:4000/api";

const api = axios.create();

let authToken: any = null;

const setAuthToken = (token: any) => {
  authToken = token;
};

api.interceptors.request.use(async (config) => {
  const usuarioLogado = await getLoggedUser();
  if (usuarioLogado) {
    setAuthToken(usuarioLogado.token);
  }
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

export default api;
