import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Loading({ message = 'Carregando...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />

      <Text style={styles.text}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  text: {
    color: '#ffffff',
    marginTop: 12,
    fontSize: 16,
  },
});