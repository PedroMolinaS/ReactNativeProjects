import React, { useReducer, useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { getProducts } from './serviceProductos';

// let stockFinal = 0

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

const users = [{ edad: 20 }, { edad: 30 }]

export default function UseMemoEjemplo() {

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

  const edadTotal = useMemo(() => {
    let sumaEdades = 0
    console.log("calculando...");
    users.forEach(objEdad => {
      sumaEdades = sumaEdades + objEdad.edad
    })
    return sumaEdades
  }, [users])


  console.log(`Edad total: ${edadTotal}`);
  // console.log(`Total de productos: ${stockProductos}`);

  return (
    <View style={styles.container}>
      <Text
        onPress={() => { disminuirContador(state.contador - 1) }}
      >-</Text>
      <Text>Contador: {state.contador}</Text>
      <Text
        onPress={() => { aumentarContador(state.contador + 1) }}
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
