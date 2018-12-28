import React from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Colors from '../../utils/colors';
import Constants from '../../utils/constants';
import Styles from '../../styles/styles';
import Strings from '../../utils/strings';

export default class DetailsScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {isLoading: true}
  }

  static navigationOptions = { 
    title: Strings.TITLE_DETAILS,
    headerStyle:  {
      backgroundColor: Colors.GLOBAL.PRIME_COLOR
    },
    headerTintColor: Colors.GLOBAL.WHITE
  };

  componentDidMount() {
    return fetch(Constants.BASE_URL)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.timelines,
        }, function(){});
      })
      .catch((error) =>{
        console.error(error);
      }
    );
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => (
              <View style={{paddingTop:10, paddingRight:20, paddingLeft:20, paddingBottom: 10}}>
                <Text style={{fontSize: 20}}>{item.name}</Text>
                {item.series.map((child) => (
                  <Text style={{fontSize: 14}}>{child.year} - {child.name}</Text>
                ))}
              </View>
            )}
        />
      </View>
    );
  }
}