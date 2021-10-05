import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import Slider from '../../Components/Slider/Slider';
import {toggleProductDescription} from '../../../Redux/shop/shop.action';
import {addItem, removeItem} from '../../../Redux/cart/cart.action';
import HorizontalCartButton from '../../Components/HorizontalCartButton/HorizontalCartButton';
import styles from './productModalStyles';

function CartModal({
  productDes,
  toggleDes,
  item,
  addToCart,
  removeFromCart,
  cartItems,
}) {
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
    <Modal
      isVisible={productDes}
      style={styles.modal}
      onBackButtonPress={() => toggleDes()}
      onBackdropPress={() => toggleDes()}>
      <Icon
        style={styles.cross}
        name="times-circle"
        color={'white'}
        size={40}
        onPress={() => toggleDes()}
      />
      <View style={styles.scrollableModal}>
        <ScrollView>
          <Slider />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{item?.name}</Text>
            <Text style={styles.subtitle}>1 pc(s)</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              congue quam sit amet turpis semper, porttitor finibus dui egestas.
              Integer ac gravida arcu. Pellentesque id augue ac odio iaculis
              semper. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Donec vulputate ac erat at
              eleifend. Etiam molestie augue non neque feugiat, eget gravida
              velit vulputate. Quisque porta nisl eget turpis pulvinar
              pellentesque. Vivamus a accumsan mi.
            </Text>
            <View style={styles.price}>
              <Text style={styles.priceText}>${item?.price}</Text>
              {foundItem === undefined ? (
                <Icon
                  name="shopping-bag"
                  size={40}
                  color="green"
                  onPress={addItemToCart}
                />
              ) : (
                <HorizontalCartButton
                  count={foundItem?.quantity}
                  add={addItemToCart}
                  remove={removeItemFromCart}
                />
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const mapStateToProps = state => ({
  productDes: state.shop.productDescription,
  item: state.shop.selectedItem,
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = dispatch => ({
  toggleDes: () => dispatch(toggleProductDescription()),
  addToCart: item => dispatch(addItem(item)),
  removeFromCart: item => dispatch(removeItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
