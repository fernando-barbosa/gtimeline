import React from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import ListHolderComponent from "../../components/ListHolderComponent";
import Style from '../../styles/styles';
import Colors from '../../utils/colors';
import Constants from '../../utils/constants';
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

  async componentDidMount() {
    try {
      const response = await fetch(Constants.BASE_URL);
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson.timelines,
      }, function() { });
    }
    catch (error) {
      console.error(error);
    }
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={Style.loading}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={Style.flex}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => (
              <ListHolderComponent name = {item.name} />
            )}
        />
      </View>
    );
  }
}