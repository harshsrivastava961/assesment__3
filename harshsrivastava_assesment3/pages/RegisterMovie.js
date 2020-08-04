import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import Realm from 'realm';
let realm;

export default class RegisterMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_name: '',
      movie_genre: '',
      movie_discription: '',
    };
    realm = new Realm({ path: 'MovieDatabase.realm' });
  }

  register_movie = () => {
    var that = this;
    const { movie_name } = this.state;
    const { movie_genre } = this.state;
    const { movie_discription } = this.state;
    if (movie_name) {
      if (movie_genre) {
        if (movie_discription) {
          realm.write(() => {
            var ID =
              realm.objects('movie_details').sorted('movie_id', true).length > 0
                ? realm.objects('movie_details').sorted('movie_id', true)[0]
                    .movie_id + 1
                : 1;
            realm.create('movie_details', {
              movie_id: ID,
              movie_name: that.state.movie_name,
              movie_genre: that.state.movie_genre,
              movie_discription: that.state.movie_discription,
            });
            Alert.alert(
              'Success',
              'Movie is registered successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => that.props.navigation.navigate('DashBoard'),
                },
              ],
              { cancelable: false }
            );
          });
        } else {
          alert('Please fill Discription');
        }
      } else {
        alert('Please fill Genre');
      }
    } else {
      alert('Please fill Name');
    }
  };

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
              
            <Mytextinput
              placeholder="Enter Name"
              onChangeText={movie_name => this.setState({ movie_name })}
            />

            <Mytextinput
              placeholder="Enter Movie Genre"
              onChangeText={movie_genre => this.setState({ movie_genre })}
              //maxLength={10}
              //keyboardType="numeric"
            />

            <Mytextinput
              placeholder="Enter Discription"
              onChangeText={movie_discription => this.setState({ movie_discription })}
              maxLength={225}
              numberOfLines={5}
              multiline={true}
              style={{ textAlignVertical: 'top' }}
            />

            <Mybutton
              title="Submit"
              customClick={this.register_movie.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}