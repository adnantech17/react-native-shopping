import React, {useState} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../../Redux/cart/cart.action';
import HeaderComponents from '../../Components/HeaderComponents/HeaderComponents';
import Product from '../../Components/Product/Product';
import CartModal from '../../Modal/CartModal/CartModal';
import ProductModal from '../../Modal/ProductModal/ProductModal';
import styles from './productsStyles';

const Products = ({items, toggleCart, cartItems}) => {
  const [searchText, setSearchText] = useState('');
  const [filter, setFilter] = useState(null);
  const calculateAmount = () => {
    var total = 0;
    cartItems.forEach(cartItem => {
      total += cartItem.price * cartItem.quantity;
    });

    return total;
  };

  const filterResult = name => {
    var filtered =
      name === ''
        ? items
        : items.filter(item =>
            item.name.toLowerCase().includes(searchText.toLowerCase()),
          );

    if (filter !== null) {
      filtered = filtered.filter(item => item.tags.includes(filter.tag));
    }
    return filtered;
  };
  return (
    <View>
      <CartModal />
      <ProductModal />
      <FlatList
        ListHeaderComponent={
          <HeaderComponents
            searchText={searchText}
            setSearchText={setSearchText}
            filter={filter}
            setFilter={setFilter}
          />
        }
        data={filterResult(searchText)}
        renderItem={({item}) => <Product item={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      <TouchableOpacity onPress={() => toggleCart()} style={styles.container}>
        <View style={styles.outerView}>
          <View style={styles.innerView}>
            <Icon name="shopping-bag" size={24} color="white" />
            <Text style={styles.text}>{cartItems.length} Items</Text>
          </View>
          <View style={styles.innerRound}>
            <Text>${calculateAmount()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => ({
  items: state.shop.collections.items,
  cartItems: state.cart.cartItems,
});

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
