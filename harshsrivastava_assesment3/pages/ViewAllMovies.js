import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Realm from 'realm';
let realm;

export default class ViewAllMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    realm = new Realm({ path: 'MovieDatabase.realm' });
    var movie_details = realm.objects('movie_details');
    this.state = {
      FlatListItems: movie_details,
    };
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.5, width: '100%', backgroundColor: '#000' }} />
    );
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: 'white', padding: 20 }}>
              <Text>Id: {item.movie_id}</Text>
              <Text>Name: {item.movie_name}</Text>
              <Text>Genre: {item.movie_genre}</Text>
              <Text>Discription: {item.movie_discription}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}