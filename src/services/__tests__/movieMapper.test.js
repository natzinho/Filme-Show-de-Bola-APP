import { formatMovie } from '../movieMapper';

describe('formatMovie', () => {
  test('deve formatar corretamente os dados de um filme da TMDB', () => {
    const movieFromApi = {
      id: 123,
      title: 'Filme de Teste',
      overview: 'Uma sinopse de teste.',
      release_date: '2026-09-10',
      vote_average: 8.456,
      poster_path: '/poster.jpg',
      genres: [
        {
          id: 1,
          name: 'Ação',
        },
        {
          id: 2,
          name: 'Aventura',
        },
      ],
    };

    const result = formatMovie(movieFromApi);

    expect(result.id).toBe(123);
    expect(result.title).toBe('Filme de Teste');
    expect(result.year).toBe('2026');
    expect(result.rating).toBe('8.5');

    expect(result.posterUrl).toBe(
      'https://image.tmdb.org/t/p/w500/poster.jpg'
    );

    expect(result.genres).toEqual([
      'Ação',
      'Aventura',
    ]);
  });
});
