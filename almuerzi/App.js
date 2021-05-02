import {AsyncStorage} from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import AuthLoading from './screens/AuthLoading'
import Login from './screens/Login'
import Meals from './screens/Meals'
import Modal from './screens/Modal'
import Register from './screens/Register'

const OnBoardingNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  }
}, {
  initialRouteName: 'Login'
})

const AppNavigator = createStackNavigator({
  Meals: {
    screen: Meals,
  },
}, {
  initialRouteName: 'Meals',
}
)

const RootStack = createStackNavigator({
  Main: AppNavigator,
  Modal: Modal
}, {
  mode: 'modal',
  headerMode: 'none',
  initialRouteName: 'Main'
})

const BaseStack = createSwitchNavigator({
  AuthLoading: AuthLoading,
  OnBoarding: OnBoardingNavigator,
  Root: RootStack
},{
  initialRouteName: 'AuthLoading'
})

export default createAppContainer(BaseStack)
