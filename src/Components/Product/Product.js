import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {addItem, removeItem} from '../../../Redux/cart/cart.action';
import {
  setItem,
  toggleProductDescription,
} from '../../../Redux/shop/shop.action';
import VerticalCartButton from '../VerticalCartButton/VerticalCartButton';
import styles from './productStyles';

const Product = ({
  item,
  addToCart,
  cartItems,
  removeFromCart,
  toggleDes,
  setSelectedItem,
}) => {
  const findItem = () => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === item.id,
    );
    return existingCartItem;
  };

  const addItemToCart = () => {
    addToCart({...item, quantity: 0});
  };

  const removeItemFromCart = () => {
    removeFromCart({...item, quantity: 0});
  };

  const foundItem = findItem();
  return (
    <TouchableOpacity
      onPress={() => {
        toggleDes();
        setSelectedItem(item);
      }}
      style={styles.item}>
      <View>
        <View style={styles.image}>
          <Image source={{uri: item.imageUrl, width: 150, height: 200}} />
        </View>
        <Text>{item.name}</Text>
        <Text>1 pc(s)</Text>
        <View style={styles.price}>
          <Text>${item.price}</Text>
          {foundItem === undefined ? (
            <Icon
              name="shopping-bag"
              size={24}
              color="green"
              onPress={addItemToCart}
            />
          ) : (
            <VerticalCartButton
              count={foundItem?.quantity}
              add={addItemToCart}
              remove={removeItemFromCart}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
});
const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addItem(item)),
  removeFromCart: item => dispatch(removeItem(item)),
  toggleDes: () => dispatch(toggleProductDescription()),
  setSelectedItem: item => dispatch(setItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Product);
