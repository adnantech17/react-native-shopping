import SHOP_DATA from './shopdata';

const INITIAL_STATE = {
  productDescription: false,
  collections: SHOP_DATA,
  menu: false,
  selectedItem: {
    id: 1,
    name: 'Brown Brim',
    imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
    price: 25,
  },
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PRODUCT_DESCRIPTION_TOGGLE':
      return {
        ...state,
        productDescription: !state.productDescription,
      };
    case 'SET_ITEM':
      return {
        ...state,
        selectedItem: action.payload,
      };
    case 'TOGGLE_MENU':
      return {
        ...state,
        menu: !state.menu,
      };
    default:
      return state;
  }
};

export default shopReducer;
