import axios from 'axios';

const api = axios.create({
    baseURL: 'http://onmistackbackend.herokuapp.com',
})

export default api;