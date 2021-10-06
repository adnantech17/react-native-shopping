import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },

  text: {fontSize: 16, color: 'white', marginLeft: 6},
  innerView: {flexDirection: 'row', alignItems: 'center'},
  outerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'green',
    marginHorizontal: 32,
    borderRadius: 30,
    padding: 2,
    paddingLeft: 20,
    alignItems: 'center',
  },
  innerRound: {
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 12,
  },
  flatlist: {height: '100%'},
});
