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
  categories,
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
  const photos = item.photo
    ? item.photo
    : [
        'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
      ];

  const categoryName = id => {
    return categories.find(cat => cat._id === id).name;
  };

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
          <Slider images={photos} />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{item?.name}</Text>
            <Text style={styles.subtitle}>{item.unit}</Text>
            <Text style={styles.description}>{item?.description}</Text>
            <View style={styles.price}>
              <Text style={styles.priceText}>{item?.price}৳</Text>
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

            <View style={styles.categories}>
              {item.category_id.map(id => (
                <Text style={styles.category} key={id}>
                  {categoryName(id)}
                </Text>
              ))}
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
  categories: state.shop.categories,
});

const mapDispatchToProps = dispatch => ({
  toggleDes: () => dispatch(toggleProductDescription()),
  addToCart: item => dispatch(addItem(item)),
  removeFromCart: item => dispatch(removeItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
