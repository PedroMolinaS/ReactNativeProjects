import React, { useReducer } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const funcionReducer = (state, action) => {
  switch (action.type) {
    case "agregar": 
      return {
        ...state,
        contador: action.data
      }
    case "quitar": 
      return {
        ...state,
        contador: action.data
      }
    default: return state
  }
}

export default function UseReducerEjemplo() {

  const [state, dispatch] = useReducer(funcionReducer, {
    contador: 0
  })


  // funciones:
  const disminuirContador = (nuevoContador) => {
    dispatch({
      type: "quitar",
      data: nuevoContador
    })
  }

  const aumentarContador = (nuevoContador) => {
    dispatch({
      type: "agregar",
      data: nuevoContador
    })
  }



  return (
    <View style={styles.container}>
      <Text
        onPress={() => { disminuirContador(state.contador-1) }}
      >-</Text>
      <Text>Contador: {state.contador}</Text>
      <Text
        onPress={() => { aumentarContador(state.contador+1) }}
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
});
