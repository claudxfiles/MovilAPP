import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a SoulDream Mobile</Text>
      <Text style={styles.subtitle}>Esta es la pantalla de inicio (index.tsx).</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff', // Puedes ajustar el fondo
  },
  title: {
    fontSize: 28, // Ajustado para un look más de app
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18, // Ajustado
    color: '#38434D',
    textAlign: 'center',
  },
});
