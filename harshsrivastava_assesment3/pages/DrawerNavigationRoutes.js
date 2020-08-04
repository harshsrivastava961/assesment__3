import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import RegisterMovie from './RegisterMovie';
import UpdateMovie from './UpdateMovie';
import ViewMovie from './ViewMovie';
import ViewAllMovies from './ViewAllMovies';
import DeleteMovie from './DeleteMovie';

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    DashBoard: {
        screen: DashBoard,
        navigationOptions: {
          title: 'DashBoard',
          headerStyle: { backgroundColor: '#3a59b7' },
          headerTintColor: '#ffffff',
        },
      },
      View: {
        screen: ViewMovie,
        navigationOptions: {
          title: 'View Movie',
          headerStyle: { backgroundColor: '#3a59b7' },
          headerTintColor: '#ffffff',
        },
      },
      ViewAll: {
        screen: ViewAllMovies,
        navigationOptions: {
          title: 'View All Movie',
          headerStyle: { backgroundColor: '#3a59b7' },
          headerTintColor: '#ffffff',
        },
      },
      Update: {
        screen: UpdateMovie,
        navigationOptions: {
          title: 'Update Movie',
          headerStyle: { backgroundColor: '#3a59b7' },
          headerTintColor: '#ffffff',
        },
      },
      Register: {
        screen: RegisterMovie,
        navigationOptions: {
          title: 'Register Movie',
          headerStyle: { backgroundColor: '#3a59b7' },
          headerTintColor: '#ffffff',
        },
      },
      Delete: {
        screen: DeleteMovie,
        navigationOptions: {
          title: 'Delete Movie',
          headerStyle: { backgroundColor: '#3a59b7' },
          headerTintColor: '#ffffff',
        },
      },
  },
});


const DrawerNavigationRoutes = createDrawerNavigator(
  {
    DashBoard: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'DashBoard',
      },
    },
  },
);
export default DrawerNavigationRoutes;