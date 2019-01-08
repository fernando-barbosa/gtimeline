import React from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
  RefreshControl
} from "react-native";
import ListHolderComponent from "../../components/ListHolderComponent";
import Style from "../../styles/styles";
import Colors from "../../utils/colors";
import Constants from "../../utils/constants";
import Strings from "../../utils/strings";

export default class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  static navigationOptions = {
    title: Strings.TITLE_DETAILS,
    headerStyle: {
      backgroundColor: Colors.GLOBAL.PRIME_COLOR
    },
    headerTintColor: Colors.GLOBAL.WHITE
  };
}
