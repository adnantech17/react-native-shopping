import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  searchcontainer: {
    backgroundColor: '#FBFBFB',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderRadius: 0,
    marginVertical: 10,
  },
  inputcontainer: {
    backgroundColor: '#eeeeee',
    borderRadius: 3,
  },
  text: {
    fontSize: 20,
    color: 'green',
  },

  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  cross: {
    position: 'absolute',
    right: -16,
    top: -16,
  },
  filterText: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 10,
  },
});
