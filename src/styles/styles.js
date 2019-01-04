import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    marginTop: 100,
    width: 90,
    height: 90
  },
  heading: {
    fontSize: 30,
    marginTop: 40
  },
  text: {
    marginHorizontal: 8,
    marginVertical: 10
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});