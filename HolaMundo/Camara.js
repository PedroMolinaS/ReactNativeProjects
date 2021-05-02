import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, Button, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Camera } from 'expo-camera';

export default function Camara() {

  const [permisos, setPermisos] = useState(null);
  const [tipo, setTipo] = useState(Camera.Constants.Type.back);

  const getPermisos = async () => {
    const {status} = await Camera.requestPermissionsAsync()
    setPermisos(status === 'granted')
    console.log(status);
  }
  useEffect(() => {
    getPermisos();
  }, [])

  if(permisos===null){
    return <View><Text>Esperando permisos...</Text></View>
  }
  if(permisos===false){
    return <View><Text>No se tiene permisos a la camara</Text></View>
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={tipo}>
        <Button
          title="Voltear"
          style= {styles.boton}
          onPress={()=>{
            const { front, back} = Camera.Constants.Type
            const nuevoTipo = tipo===front ? back: front
            setTipo(nuevoTipo) 
          }}
        >

        </Button>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  boton: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // margin: 40
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
