import React from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import Colors from '../../utils/colors';
import styles from '../../styles/styles';

export default class DetailsScreen extends React.Component {
  
  static navigationOptions = { 
    title: 'Detalhes',
    headerStyle:  {
      backgroundColor: Colors.GLOBAL.PRIME_COLOR
    },
    headerTintColor: Colors.GLOBAL.WHITE
  };

  render() {
    return (
      <View style={styles.main}>
        <Text>Details Screen</Text>
        <Button onPress={ ()=>this.props.navigation.navigate('Home') } title='VOLTAR'/>
      </View>
    );
  }
}
