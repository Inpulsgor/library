import axios from 'axios';

axios.defaults.baseURL = 'https://smart-finance.goit.co.ua/api/v1';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
