import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import MapView, {Marker} from 'react-native-maps';

export default function Mapas() {

  const [ubicacion, setUbicacion] = useState({});

  const buscarLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      return Alert.alert('No cuentas con permisos para accedere a ubicación');
    }
    console.log(status);
    let location = await Location.getCurrentPositionAsync({})
    console.log(location);
    setUbicacion(location)
    
  }

  useEffect(() => {
    buscarLocation();
  },[])

  return (
    <View style={styles.container}>
      <MapView style={styles.mapa}>
        {
          ubicacion.coords ?
          <Marker
            coordinate = {ubicacion.coords}
            title= "Titulo"
            description = "Mi ubicación actual"
          />
          : null
        }
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapa: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
