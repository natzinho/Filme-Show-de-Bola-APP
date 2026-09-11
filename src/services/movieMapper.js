const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export function formatMovie(movie) {
  return {
    id: movie.id,

    title: movie.title || 'Título não informado',

    overview: movie.overview || 'Sinopse não disponível.',

    releaseDate: movie.release_date || '',

    year: movie.release_date
      ? movie.release_date.substring(0, 4)
      : 'Não informado',

    rating:
      typeof movie.vote_average === 'number'
        ? movie.vote_average.toFixed(1)
        : 'N/A',

    posterUrl: movie.poster_path
      ? `${IMAGE_BASE_URL}${movie.poster_path}`
      : null,

    genres: movie.genres
      ? movie.genres.map((genre) => genre.name)
      : [],
  };
}
