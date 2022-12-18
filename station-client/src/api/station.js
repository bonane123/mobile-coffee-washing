import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";



const axiosInstance = axios.create({
  baseURL: "http://2d52-2c0f-eb68-648-8000-7cbf-6b2-187e-4df4.ngrok.io",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default axiosInstance;
