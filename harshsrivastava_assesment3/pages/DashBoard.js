import React from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import { View } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import Realm from 'realm';
import DashBoard from './pages/DashBoard';
import RegisterMovie from './pages/RegisterMovie';
import UpdateMovie from './pages/UpdateMovie';
import ViewMovie from './pages/ViewMovie';
import ViewAllMovies from './pages/ViewAllMovies';
import DeleteMovie from './pages/DeleteMovie';
let realm;

export default class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({
      path: 'MovieDatabase.realm',
      schema: [
        {
          name: 'movie_details',
          properties: {
            movie_id: { type: 'int', default: 0 },
            movie_name: 'string',
            movie_genre: 'string',
            movie_discription: 'string',
          },
        },
      ],
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#8fbc8f',
          flexDirection: 'column',
        }}>
        <Mytext text="  Movie Registration Screen" />
        <Mybutton
          title="Register Movie"
          customClick={() => this.props.navigation.navigate('Register')}
        />
        <Mybutton
          title="Update Movie"
          customClick={() => this.props.navigation.navigate('Update')}
        />
        <Mybutton
          title="Search Movies by Id"
          customClick={() => this.props.navigation.navigate('View')}
        />
        <Mybutton
          title="View All Registered Movies"
          customClick={() => this.props.navigation.navigate('ViewAll')}
        />
        <Mybutton
          title="Delete Movie"
          customClick={() => this.props.navigation.navigate('Delete')}
        />
      </View>
    );
  }
}
const App = createStackNavigator({
  App: {
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
});