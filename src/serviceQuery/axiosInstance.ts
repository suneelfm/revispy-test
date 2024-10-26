import axios from "axios";

const baseURL = "http://localhost:8082";
const axiosInstance = axios.create({ baseURL });

export default axiosInstance;
