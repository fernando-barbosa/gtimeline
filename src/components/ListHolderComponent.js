import React from 'react';
import { Text, View, Image } from 'react-native';
import Style from '../styles/listholder';

const ListHolderComponent = (props) => {
    return(
        <View style={Style.container}>
            <Text style={Style.title}>{props.name}</Text>
            { 
                props.series.map((child) => (
                    <Text style={Style.content}>{child.year} - {child.name}</Text>
                ))
            }
        </View>
    );
}

export default ListHolderComponent;