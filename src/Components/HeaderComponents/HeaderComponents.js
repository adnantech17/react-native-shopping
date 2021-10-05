import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Carousel from '../Slider/Carousel';
import {SearchBar} from 'react-native-elements';
import {connect} from 'react-redux';
import {toggleMenu} from '../../../Redux/shop/shop.action';
import MenuModal from '../../Modal/MenuModal/MenuModal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './headerStyles';

const HeaderComponents = ({
  searchText,
  setSearchText,
  setFilter,
  filter,
  toggleFilterMenu,
}) => {
  const images = [
    'https://i.ibb.co/w4k6Ws9/nike-funky.png',
    'https://i.ibb.co/w4k6Ws9/nike-funky.png',
    'https://i.ibb.co/w4k6Ws9/nike-funky.png',
    'https://i.ibb.co/w4k6Ws9/nike-funky.png',
  ];
  return (
    <View>
      <SearchBar
        placeholder="Search your products from here"
        value={searchText}
        lightTheme
        round
        onChangeText={setSearchText}
        containerStyle={styles.searchcontainer}
        inputContainerStyle={styles.inputcontainer}
      />

      <Carousel images={images} />

      <View style={styles.filterContainer}>
        <View>
          {filter === null ? (
            <Text style={styles.text}>No Filter Selected</Text>
          ) : (
            <Text style={styles.filterText}>{filter.name}</Text>
          )}
          {filter && (
            <Icon
              style={styles.cross}
              name="times-circle"
              color={'red'}
              size={24}
              onPress={() => setFilter(null)}
            />
          )}
        </View>
        <TouchableOpacity onPress={toggleFilterMenu}>
          <Text style={styles.text}>Filter</Text>
        </TouchableOpacity>
      </View>
      <MenuModal setFilter={setFilter} />
    </View>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  toggleFilterMenu: () => dispatch(toggleMenu()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponents);
