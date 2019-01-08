import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { StackNavigator } from "react-navigation";
import { Card } from "react-native-elements";
import Style from "../styles/listholder";

const displayDetails = props => {
  this.props.navigation.navigate("Details", {
    series: props
  });
};

const ListHolderComponent = props => {
  return (
    <Card containerStyle={Style.container} title={props.name}>
      {props.series.map((u, i) => {
        return (
          <TouchableOpacity
            key={i}
            onPress={() => {
              displayDetails(u);
            }}
          >
            <View style={Style.row_container} key={i}>
              <Image style={Style.image} source={{ uri: u.image }} />
              <View style={Style.column_container}>
                <Text style={Style.body_title}>Series Name:</Text>
                <Text style={Style.body_content}>{u.name}</Text>
                <Text style={Style.body_title}>Century date:</Text>
                <Text style={Style.body_content}>{u.year}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </Card>
  );
};

export default ListHolderComponent;
