import {StyleSheet} from 'react-native';

StyleSheet.create({
  cross: {
    textAlign: 'center',
    marginBottom: 20,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  text: {fontSize: 18, color: 'black', marginLeft: 16},
  selectedText: {fontSize: 18, color: 'green', marginLeft: 16},
  scrollableModal: {
    height: 600,
    backgroundColor: 'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
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
  nestedRow: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
