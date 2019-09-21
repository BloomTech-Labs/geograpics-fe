import axios from 'axios';
const token = localStorage.getItem('token');

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  });
};