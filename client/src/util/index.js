import { createContext, useContext } from "react";
import axios from 'axios';

export const Context = createContext();

export const useAuthContext = () => useContext(Context);

const http = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true
});

export const useREST = base => {
  return {
    "create": data => http.post(base, data),
    "get": config => http.get(base, config),
    "getOne": (id, config) => http.get(base + id, config),
    "update": (id, data) => http.put(base + id, data),
    "delete": (id = "") => http.delete(base + id)
  };
};