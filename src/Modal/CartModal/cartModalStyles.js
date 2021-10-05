import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  text: {fontSize: 16, color: 'green', marginLeft: 6},
  innerView: {
    flexDirection: 'row',
    width: 104,
    padding: 12,
  },
  outerView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 1,
  },

  checktext: {fontSize: 16, color: 'white', marginLeft: 6},

  checkInnerView: {flexDirection: 'row', alignItems: 'center'},
  checkOuterView: {
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

  checkContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: 600,
    backgroundColor: 'white',
  },
  cross: {
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollableModalText1: {
    fontSize: 20,
    color: 'white',
  },
  scrollableModalContent2: {
    height: 200,
    backgroundColor: '#A9DCD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollableModalText2: {
    fontSize: 20,
    color: 'white',
  },
});
