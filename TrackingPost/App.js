import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import Users from './modules/Users';
import Posts from './modules/Posts';
import DetailPost from './modules/DetailPost';


const AppNavigator = createStackNavigator({
  User : {
    screen: Users,
  },
  Posts : {
    screen: Posts
  },
  DetallePost : {
    screen : DetailPost
  }
},{
  initialRouteName: 'User'
})

export default createAppContainer(AppNavigator)
