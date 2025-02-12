import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8081/FarmersMarketplace/',
  headers: {
    'Content-Type': 'application/json',
  },
});
