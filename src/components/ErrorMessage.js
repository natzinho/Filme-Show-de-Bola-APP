import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function ErrorMessage({
  message = 'Não foi possível carregar os dados.',
  onRetry,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Ops! Algo deu errado.
      </Text>

      <Text style={styles.message}>
        {message}
      </Text>

      {onRetry && (
        <Pressable
          style={styles.button}
          onPress={onRetry}
        >
          <Text style={styles.buttonText}>
            Tentar novamente
          </Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },

  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  message: {
    color: '#bbbbbb',
    textAlign: 'center',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#e50914',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 8,
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});