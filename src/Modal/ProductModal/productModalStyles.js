import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  infoContainer: {
    margin: 32,
  },
  title: {
    marginTop: 12,
    fontWeight: 'bold',
    fontSize: 32,
    color: 'black',
  },
  priceText: {
    color: 'green',
    fontSize: 28,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 24,
    fontSize: 18,
    color: 'black',
  },
  subtitle: {
    marginTop: 12,
    fontSize: 16,
    color: '#999999',
  },
  price: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  cross: {
    textAlign: 'center',
    marginBottom: 20,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  scrollableModal: {
    height: 600,
    backgroundColor: 'white',
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
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  category: {
    padding: 8,
    backgroundColor: 'green',
    marginRight: 6,
    borderRadius: 4,
  },
});
