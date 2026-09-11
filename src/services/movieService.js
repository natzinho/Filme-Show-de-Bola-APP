import api from './api';
import { formatMovie } from './movieMapper';

export async function getPopularMovies() {
  const response = await api.get('/movie/popular', {
    params: {
      language: 'pt-BR',
      page: 1,
    },
  });

  return response.data.results.map(formatMovie);
}

export async function getMovieDetails(movieId) {
  const response = await api.get(`/movie/${movieId}`, {
    params: {
      language: 'pt-BR',
    },
  });

  return formatMovie(response.data);
}