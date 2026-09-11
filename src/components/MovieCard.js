import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function MovieCard({ movie, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      {movie.posterUrl ? (
        <Image
          source={{ uri: movie.posterUrl }}
          style={styles.poster}
          resizeMode="cover"
        />
      ) : (
        <View style={[styles.poster, styles.noPoster]}>
          <Text style={styles.noPosterText}>Sem pôster</Text>
        </View>
      )}

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {movie.title}
        </Text>

        <Text style={styles.year}>{movie.year}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    overflow: 'hidden',
  },

  pressed: {
    opacity: 0.7,
  },

  poster: {
    width: '100%',
    aspectRatio: 2 / 3,
  },

  noPoster: {
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },

  noPosterText: {
    color: '#aaa',
  },

  info: {
    padding: 10,
  },

  title: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  year: {
    color: '#aaaaaa',
    marginTop: 4,
  },
});