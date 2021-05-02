import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, Button } from 'react-native';

export default function Modal() {

  const [activo, setActivo] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType={'none'}
        transparent={true}
        visible={activo}
      >
        <View style={styles.center}>
          <View style={styles.content}>
            <Text>
              Este es un Modal...
            </Text>
            <Button title='Cerrar Modal' onPress={()=>setActivo(!activo)} />
          </View>
        </View>
      </Modal>
      <Text>Prueba 1</Text>
      <Text>Prueba 1</Text>
      <Text>Prueba 1</Text>
      <Text>Prueba 1</Text>
      <Text>Prueba 1</Text>
      <Text>Prueba 1</Text>
      <Text>Prueba 1</Text>
      <Text>Prueba 1</Text>
      <Button title='Abrir Modal' onPress={()=>setActivo(!activo)} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor:'#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  center: {
    flex:1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
