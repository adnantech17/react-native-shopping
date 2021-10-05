/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image} from 'react-native';
import VerticalCartButton from '../VerticalCartButton/VerticalCartButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import styles from './cartItemStyles';
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../../Redux/cart/cart.action';

const CartItem = ({item, addToCart, removeFromCart, clearItemsFromCart}) => {
  const addItemToCart = () => {
    addToCart({...item, quantity: 0});
  };

  const removeItemFromCart = () => {
    removeFromCart({...item, quantity: 0});
  };
  return (
    <View style={styles.container}>
      <View style={styles.verticalBtn}>
        <VerticalCartButton
          style={{flex: 2}}
          count={item?.quantity}
          add={addItemToCart}
          remove={removeItemFromCart}
        />
      </View>
      <Image
        style={styles.image}
        source={{uri: item.imageUrl, width: 48, height: 48}}
      />
      <View style={styles.descs}>
        <Text>{item.name}</Text>
        <Text>${item.price}</Text>
        <Text>{item.quantity}x1pc(s)</Text>
      </View>
      <Text style={styles.price}>${item.price * item.quantity}</Text>
      <Icon
        style={styles.cross}
        name="times"
        color={'black'}
        size={24}
        onPress={() => clearItemsFromCart(item)}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addItem(item)),
  removeFromCart: item => dispatch(removeItem(item)),
  clearItemsFromCart: item => dispatch(clearItemFromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
