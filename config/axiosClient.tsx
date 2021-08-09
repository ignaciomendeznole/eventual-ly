import axios from 'axios';

const BASE_URL = 'https://whispering-bastion-07256.herokuapp.com/api';

const axiosClient = axios.create({
  baseURL: BASE_URL,
});
export default axiosClient;
