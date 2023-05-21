import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://127.0.0.1:8000/api`,
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("TOKEN_SM");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    try {
      // const { response } = err;
      // if (response === 401) {
      //   localStorage.removeItem("ACCESS_TOKEN");
      // }
    } catch (error) {
      console.log(error);
    }

    throw err;
  }
);

export default axiosClient;
