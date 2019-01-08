import React from "react";
import { Alert } from "react-native";
import Style from "../styles/listholder";

const DescriptionAlert = props => {
  return Alert.alert(
    props.name,
    props.year,
    [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    { cancelable: false }
  );
};

export default DescriptionAlert;
