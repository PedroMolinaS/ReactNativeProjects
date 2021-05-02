import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const Logo = () => {
  return (
    <Text>Titulo customizado</Text>
  )
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Páginas del Home</Text>
      <Button
        title="Ver detalle"
        onPress={() => {
          navigation.navigate('Detalle', {
            nombre: 'Pedro',
            apellido: 'Molina',
            id: 1,
            titulo: 'Usuario 1'
          })
        }}
      />
    </View>
  )
}
// cambiando los titulos:
HomeScreen.navigationOptions = ({ navigation }) => {
  return ({
    headerTitle: () => <Logo />,
    headerStyle: {
      backgroundColor: '#419450',
    },
  })
}

const DetalleHome = ({ navigation }) => {

  const [contador, setContador] = useState(0)
  const nombre = navigation.getParam('nombre')
  const dni = navigation.getParam('dni', '41999873')

  const incrementar = () => {
    setContador(contador + 1)
  }

  useEffect(() => {
    navigation.setParams({ incrementar })
  }, [contador])

  return (
    <View style={styles.container}>
      <Text>Datos del creador: Mi nombre es {nombre} con DNI: {dni}</Text>
      <Text>Contador: {contador}</Text>
      {/* <Button title="Volver a Home" onPress={() => navigation.goBack()} /> */}
      {/* <Button title="Actualizar titulo" onPress={() => navigation.setParams({ titulo: `Hola ${nombre}` })} /> */}
      <Button title="Ir a Modal" onPress={() => navigation.navigate("MiModal")} />
    </View>
  )
}

// Cambiando titulo del detalle
DetalleHome.navigationOptions = ({ navigation, navigationOptions }) => {
  return ({
    title: navigation.getParam('titulo', 'Cargando...'),
    headerRight: () =>
      <Button
        title="+1"
        onPress={navigation.getParam('incrementar')}
        color='#444' />
    ,
    headerStyle: {
      backgroundColor: navigationOptions.headerStyle.backgroundColor
    }
  })
}

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detalle: {
    screen: DetalleHome
  },
},
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#1BADD9'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  })

const RootStack = createStackNavigator({
  Main : AppStackNavigator,
  MiModal : {
    screen : () => <Text>Soy un Modal</Text>
  }
},{
  mode: 'modal',
  headerMode : 'none'
})

// export default createAppContainer(RootStack)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
