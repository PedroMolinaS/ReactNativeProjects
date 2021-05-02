import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

export default function Alerta() {

  const msjAlerta = () => {
    Alert.alert(
      'Titulo',
      'Subtitulo o mensaje...',
      [
        {
          text: 'Cancelar',
          onPress: () => { },
          style: 'cancel'
        },
        {
          text: 'Guardar',
          onPress: () => console.log('presionó Guardar'),
          style: 'default'
        },
      ]
    )
  }

  return (
    <View style={styles.container}>
      <Button title="Abrir dialogo" onPress={msjAlerta} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
