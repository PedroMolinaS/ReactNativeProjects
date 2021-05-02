import React, { useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Location from 'expo-location';
import Constants from 'expo-constants';

export default function Ubicacion() {

  const buscarLocaton = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      return Alert.alert('No cuentas con permisos para accedere a ubicación');
    }
    console.log(status);
    let location = await Location.getCurrentPositionAsync({})
    console.log(location);
    // console.log('aaaa');
  }

  useEffect(() => {
    buscarLocaton();
  })

  return (
    <View style={styles.container}>
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
