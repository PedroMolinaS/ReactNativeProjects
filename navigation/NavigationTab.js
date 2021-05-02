import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'

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
          navigation.navigate('Detalle', {
            nombre: 'Pedro',
            dni: '41999873'
          })
        }} />
    </View>
  )
}
Home.navigationOptions = () => {
  return ({
    title: <Logo />
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

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: Home
  },
  Detalle: {
    screen: DetalleHome
  }
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: ({ navigation }) => {
    return ({
      tabBarOptions: {
        style: {
          backgroundColor: '#1d3'
        },
        activeTintColor: navigation.state.routeName === 'Home' ? 'red' : 'green',
        inactiveTintColor: '#777',
        labelStyle: {
          fontSize: 18
        }
      },
      tabBarIcon: ({focused,horizontal, tintColor}) => {
        
        const rutaActual = navigation.state.routeName
        let iconName = ''
        if(rutaActual==='Home'){
          iconName = `ios-information-circle${focused ? '' : '-outline'}`
        }else{
          iconName = `ios-options${focused ? '' : '-outline'}`
        }
        return <Ionicons name={iconName} size={30} tintColor={tintColor} />
      }
    })
  }
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
