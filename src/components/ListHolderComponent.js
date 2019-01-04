import React from 'react';
import { Text, View, Image } from 'react-native';
import Style from '../styles/listholder';

const ListHolderComponent = (props) => {
    return(
        <View style={Style.container}>
            <Text style={Style.title}>{props.name}</Text>
        </View>
    );
}

export default ListHolderComponent;