import React, { useCallback, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function UseCallBackEjemplo() {

  const [cont, setCont] = useState(0)

  // funciones:
  const disminuirContador = useCallback(() => {
    setCont(cont - 1)
  },[cont])

  const aumentarContador = useCallback(() => {
    setCont(cont + 1)
  },[cont])

  return (
    <View style={styles.container}>
      <Text
        style={styles.texto}
        onPress={disminuirContador}
      >-</Text>
      <Text style={styles.texto}>Contador: {cont}</Text>
      <Text
        style={styles.texto}
        onPress={aumentarContador}
      >+</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20
  }
});
