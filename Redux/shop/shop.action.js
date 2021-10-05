export const toggleProductDescription = () => ({
  type: 'PRODUCT_DESCRIPTION_TOGGLE',
});
export const toggleMenu = () => ({
  type: 'TOGGLE_MENU',
});

export const setItem = item => ({
  type: 'SET_ITEM',
  payload: item,
});
