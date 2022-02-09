import axios from 'axios';

export default axios.create({
  baseURL: '',
  headers: {
    'accept': 'application/json',
    'X-TheySaidSo-Api-Secret': `${process.env.REACT_APP_API_KEY}`
  }
});
