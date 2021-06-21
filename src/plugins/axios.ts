import axios from 'axios';

const config = {
  baseURL: process.env.VUE_APP_APIURL,
  timeout: 60 * 1000, // Timeout

};

const server = axios.create(config);

export default server;
