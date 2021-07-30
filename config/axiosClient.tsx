import axios from 'axios';

const BASE_URL = 'http://192.168.0.189:5000/api';

const axiosClient = axios.create({
  baseURL: BASE_URL,
});
export default axiosClient;
