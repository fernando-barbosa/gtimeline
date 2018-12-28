import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import Consumer from '../../../App';
import Colors from '../../utils/colors';
import styles from '../../styles/styles';
import strings from '../../utils/strings';

export default class HomeScreen extends React.Component {

  static navigationOptions = { 
    title: 'App Bacana',
    headerStyle:  {
      backgroundColor: Colors.GLOBAL.PRIME_COLOR
    },
    headerTintColor: Colors.GLOBAL.WHITE
  };
  
  render() {
    return (
      <View style={styles.container}>

        <Image style={styles.logo} source={require('../../assets/images/head.png')} />
        
        <Text style={styles.heading}> {strings.WELCOME.toUpperCase()} </Text>
        
        <Text style={styles.text}> {strings.TEXT1} </Text>
        
        <Text style={styles.text}> {strings.TEXT2} </Text>
        
        <Button
            style={styles.button} title={strings.BUTTON}
            onPress={() => { this.props.navigation.navigate('Details') }} >
        </Button>

      </View>
    );
  }
}