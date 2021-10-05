import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Modal from 'react-native-modal';
import {connect} from 'react-redux';

import CartItem from '../../Components/CartItem/CartItem';
import NoProductFound from '../../Components/NoProductFound/NoProductFound';
import {toggleCartHidden} from '../../../Redux/cart/cart.action';

import styles from './cartModalStyles';

function CartModal({cartItems, toggleCart, hidden}) {
  const calculateAmount = () => {
    var total = 0;
    cartItems.forEach(cartItem => {
      total += cartItem.price * cartItem.quantity;
    });

    return total;
  };
  return (
    <Modal
      isVisible={!hidden}
      style={styles.modal}
      onBackButtonPress={() => toggleCart()}
      onBackdropPress={() => toggleCart()}>
      <Icon
        style={styles.cross}
        name="times-circle"
        color={'white'}
        size={40}
        onPress={() => toggleCart()}
      />
      <View style={styles.scrollableModal}>
        <View style={styles.outerView}>
          <View style={styles.innerView}>
            <Icon name="shopping-bag" size={24} color="green" />
            <Text style={styles.text}>{cartItems.length} Items</Text>
          </View>
        </View>
        {cartItems.length === 0 ? (
          <NoProductFound />
        ) : (
          <FlatList
            data={cartItems}
            renderItem={({item}) => <CartItem item={item} />}
            keyExtractor={item => item.id}
          />
        )}

        <TouchableOpacity style={styles.checkContainer}>
          <View style={styles.checkOuterView}>
            <View style={styles.checkInnerView}>
              <Icon name="shopping-bag" size={24} color="white" />
              <Text style={styles.checktext}>Checkout</Text>
            </View>
            <View style={styles.innerRound}>
              <Text>${calculateAmount()}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  hidden: state.cart.hidden,
});

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
