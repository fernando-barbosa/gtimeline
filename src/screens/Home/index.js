import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import Consumer from '../../../App';
import Colors from '../../utils/colors';
import Styles from '../../styles/styles';
import Strings from '../../utils/strings';

export default class HomeScreen extends React.Component {

  static navigationOptions = { 
    title: Strings.APP_NAME,
    headerStyle:  {
      backgroundColor: Colors.GLOBAL.PRIME_COLOR
    },
    headerTintColor: Colors.GLOBAL.WHITE
  };
  
  render() {
    return (
      <View style={Styles.container}>

        <Image style={Styles.logo} source={require('../../assets/images/head.png')} />
        
        <Text style={Styles.heading}> {Strings.WELCOME.toUpperCase()} </Text>
        
        <Text style={Styles.text}> {Strings.TEXT1} </Text>
        
        <Text style={Styles.text}> {Strings.TEXT2} </Text>
        
        <Button
            style={Styles.button} title={Strings.BUTTON}
            onPress={() => { this.props.navigation.navigate(Strings.TITLE_DETAILS) }} >
        </Button>

      </View>
    );
  }
}