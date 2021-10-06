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
export const setCollections = collections => ({
  type: 'SET_COLLECTIONS',
  payload: collections,
});

export const setCats = cats => ({
  type: 'SET_CATEGORIES',
  payload: cats,
});
