import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
// import { createBottomTabNavigator } from 'react-navigation-tabs'
// import { createDrawerNavigator } from 'react-navigation-drawer'

const Logo = () => {
  return (
    <View>
      <Text>Titulo Customizado</Text>
    </View>
  )
}

const Home = ({ navigation }) => {
  return (
    <View style={styles.homeStyle}>
      <Text>Soy el Home</Text>
      <Button title="Ir a detalle"
        onPress={() => {
          navigation.navigate('Detalle',{
            nombre: 'Pedro',
            apellido: 'Molina',
            id: 1,
            titulo: 'Usuario 1'
          })
        }} />
    </View>
  )
}
Home.navigationOptions = ({navigate}) => {
  return ({
    title: <Logo />,
    drawerIcon : ({tintColor}) => {
      return <Ionicons name={`ios-information-circle`} size={25} color={tintColor} />
    },
  })
}

const DetalleHome = ({ navigation }) => {

  const [contador, setContador] = useState(0)
  const nombre = navigation.getParam('nombre')

  const incrementar = () => setContador(contador + 1)

  useEffect(() => {
    navigation.setParams({ incrementar })
  }, [contador])

  return (
    <View style={styles.homeStyle}>
      <Text>Soy el detalle Home</Text>
      <Text>Mi nombre es: {nombre}</Text>
      <Text>Contador: {contador}</Text>
      <Button title="Modal" onPress={() => navigation.navigate('MiModal')} />
    </View>
  )
}

DetalleHome.navigationOptions = ({ navigation }) => {
  return ({
    headerRight: () => {
      return (
        <Button
          title="Suma 1"
          onPress={navigation.getParam('incrementar')
          } />
      )
    },
    headerTintColor: '#0f0'
  })
}

const AppNavigator = createSwitchNavigator({
  Home: {
    screen: Home
  },
  Detalle: {
    screen: DetalleHome
  }
}, {
  initialRouteName: 'Home',
})

const RootNavigator = createStackNavigator({
  Inicio: AppNavigator,
  MiModal: () => <Text>Soy un Modal</Text>
}, {
  mode: 'modal',
  headerMode: 'none'
})

// export default createAppContainer(RootNavigator)

const styles = StyleSheet.create({
  homeStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})
