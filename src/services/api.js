import axios from 'axios';

const token = process.env.EXPO_PUBLIC_TMDB_TOKEN;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 10000,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export default api;