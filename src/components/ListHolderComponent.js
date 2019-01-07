import React from "react";
import { Text, View, Image } from "react-native";
import Style from "../styles/listholder";

const ListHolderComponent = props => {
  return (
    <View style={Style.container} key={props.id}>
      <Text style={Style.title}>{props.name}</Text>
      {props.series.map(child => (
        <View style={Style.row_container} key={child.id}>
          <Image style={Style.image} source={{ uri: child.image }} />
          <View style={Style.column_container}>
            <Text style={Style.body_title}>Series Name:</Text>
            <Text style={Style.body_content}>{child.name}</Text>
            <Text style={Style.body_title}>Century date:</Text>
            <Text style={Style.body_content}>{child.year}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ListHolderComponent;
