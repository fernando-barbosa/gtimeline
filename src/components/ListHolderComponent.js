import React from 'react';
import { Text, View, Image } from 'react-native';
import Style from '../styles/listholder';

const ListHolderComponent = (props) => {
	return(
    <View style={Style.container}>
      <Text style={Style.title}>{props.name}</Text>
      { 
        props.series.map((child) => (
          <View style={Style.row_container}>
            <Image style={Style.image} source={require('../assets/images/head.png')} />
							<View style={Style.column_container}>
								<Text style={Style.content}>Series Name:</Text>
								<Text style={Style.content}>{child.name}</Text>
            		<Text style={Style.content}>Century date:</Text>
								<Text style={Style.content}>{child.year}</Text>
						</View>
          </View>
        ))
      }    
    </View>
  );
}

export default ListHolderComponent;