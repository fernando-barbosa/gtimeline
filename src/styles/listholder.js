import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 10
  },
  column_container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  row_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5
  },
  title: {
    fontSize: 20
  },
  body_title: {
    fontSize: 14
  },
  body_content: {
    fontWeight: "bold",
    fontSize: 14
  },
  image: {
    width: 60,
    height: 80,
    marginRight: 5,
    marginTop: 3,
    marginBottom: 5
  }
});
