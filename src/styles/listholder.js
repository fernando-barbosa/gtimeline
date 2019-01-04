import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop:10, 
    paddingRight:20, 
    paddingLeft:20, 
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
    justifyContent: "flex-start"
  },
  title: {
    fontSize: 20
  },
  content: {
    fontSize: 14
  },
  image: {
    width: 50,
    height: 100
  }
});