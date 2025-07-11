import axios from "axios";

class APIService {
  constructor(baseURL) {
    this.api = axios.create({ baseURL });
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }

  get(url, params) {
    return this.api.get(url, { params });
  }

  post(url, data) {
    return this.api.post(url, data);
  }

  put(url, data) {
    return this.api.put(url, data);
  }

  delete(url) {
    return this.api.delete(url);
  }
}

export default new APIService("http://localhost:4000/api");
