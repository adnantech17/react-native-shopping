import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 15,
    flex: 1,
    justifyContent: 'space-around',
  },
  image: {alignItems: 'center', marginBottom: 20},
  price: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
