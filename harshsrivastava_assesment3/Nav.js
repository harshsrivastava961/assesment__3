import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, createSwitchNavigator} from 'react-navigation-stack';
import splash from './pages/splash';
import login from './pages/login';
import RegisterScreen from './pages/RegisterScreen';
import DrawerNavigationRoutes from './pages/DrawerNavigationRoutes';

const Auth = createStackNavigator({
  login: {
    screen: login,
    navigationOptions: {
      headerShown: false,
    },
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      title: 'Register',
      headerStyle: {
        backgroundColor: '#307ecc',
      },
      headerTintColor: '#fff',
    },
  },
 
});
const App = createSwitchNavigator({
  splash: {
    screen: splash,
    navigationOptions: {
      headerShown: false,
    },
  },
  Auth: {

    screen: Auth,
  },
  DrawerNavigationRoutes: {
    screen: DrawerNavigationRoutes,
    navigationOptions: {
      headerShown: false,
    },
  },
});
export default createAppContainer(App);