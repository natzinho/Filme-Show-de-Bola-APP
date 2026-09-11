import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useCallback, useEffect, useState } from 'react';

import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

import { getMovieDetails } from '../services/movieService';

export default function MovieDetailsScreen({ route }) {
  const { movieId } = route.params;

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadMovie = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getMovieDetails(movieId);

      setMovie(data);
    } catch (err) {
      console.error(err);

      setError(
        'Não foi possível carregar os detalhes do filme.'
      );
    } finally {
      setLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    loadMovie();
  }, [loadMovie]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Loading message="Carregando detalhes..." />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <ErrorMessage
          message={error}
          onRetry={loadMovie}
        />
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {movie.posterUrl ? (
        <Image
          source={{ uri: movie.posterUrl }}
          style={styles.poster}
          resizeMode="cover"
        />
      ) : (
        <View style={[styles.poster, styles.noPoster]}>
          <Text style={styles.noPosterText}>
            Sem pôster
          </Text>
        </View>
      )}

      <Text style={styles.title}>
        {movie.title}
      </Text>

      <View style={styles.information}>
        <Text style={styles.info}>
          ⭐ {movie.rating}
        </Text>

        <Text style={styles.info}>
          📅 {movie.year}
        </Text>
      </View>

      {movie.genres.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>
            Gêneros
          </Text>

          <Text style={styles.text}>
            {movie.genres.join(', ')}
          </Text>
        </>
      )}

      <Text style={styles.sectionTitle}>
        Sinopse
      </Text>

      <Text style={styles.text}>
        {movie.overview}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },

  content: {
    paddingBottom: 40,
  },

  poster: {
    width: '100%',
    aspectRatio: 2 / 3,
  },

  noPoster: {
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },

  noPosterText: {
    color: '#aaaaaa',
  },

  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
    margin: 16,
  },

  information: {
    flexDirection: 'row',
    marginHorizontal: 16,
    gap: 20,
  },

  info: {
    color: '#dddddd',
    fontSize: 16,
  },

  sectionTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 8,
  },

  text: {
    color: '#cccccc',
    fontSize: 16,
    lineHeight: 24,
    marginHorizontal: 16,
  },
});