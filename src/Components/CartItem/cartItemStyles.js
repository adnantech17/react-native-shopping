import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'stretch',
    margin: 8,
  },
  descs: {
    flex: 3,
    margin: 8,
  },
  price: {
    flex: 2,
    margin: 8,
    fontSize: 20,
    color: 'green',
  },
  verticalBtn: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
  },
  cross: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
