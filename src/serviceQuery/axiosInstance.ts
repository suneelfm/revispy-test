import axios from "axios";

const baseURL = "https://revispy-test-server.vercel.app";
const axiosInstance = axios.create({ baseURL });

export default axiosInstance;
