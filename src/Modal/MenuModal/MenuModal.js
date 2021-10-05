/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {toggleMenu} from '../../../Redux/shop/shop.action';
import NestedListView, {NestedRow} from 'react-native-nested-listview';
import {TouchableOpacity} from 'react-native';

import styles from './menuModalStyles';

// eslint-disable-next-line no-shadow
function MenuModal({menu, toggleMenu, setFilter}) {
  const data = [
    {
      name: 'Men',
      icon: 'male',
      tag: 'men',
      children: [
        {
          name: 'Shoes',
          icon: 'shoe-prints',
          tag: 'men-shoe',
        },
        {
          name: 'Cloths',
          icon: 'user-graduate',
          tag: 'men-cloths',
          children: [
            {
              name: 'Jackets',
              icon: 'user-secret',
              tag: 'men-jackets',
            },
            {
              icon: 'tshirt',
              name: 'Tshirts',
              tag: 'men-tshirts',
            },
          ],
        },
      ],
    },
    {
      name: 'Women',
      icon: 'female',
      tag: 'women',
      children: [
        {
          icon: 'shoe-prints',
          name: 'Shoes',
          tag: 'women-shoes',
        },
        {
          icon: 'user-graduate',
          name: 'Cloths',
          tag: 'women-cloths',
        },
        {
          name: 'Hats',
          icon: 'hat-cowboy-side',
          tag: 'women-hats',
        },
      ],
    },
  ];
  return (
    <Modal
      isVisible={menu}
      style={styles.modal}
      onBackButtonPress={() => toggleMenu()}
      onBackdropPress={() => toggleMenu()}>
      <Icon
        style={styles.cross}
        name="times-circle"
        color={'white'}
        size={40}
        onPress={() => toggleMenu()}
      />
      <View style={styles.scrollableModal}>
        <View style={{marginTop: 20}}>
          <NestedListView
            data={data}
            getChildrenName={() => 'children'}
            onNodePressed={node => {
              if (!node.children) {
                setFilter({name: node.name, tag: node.tag});
                toggleMenu();
              }
            }}
            renderNode={(node, level) => (
              <NestedRow
                level={level}
                paddingLeftIncrement={20}
                style={styles.nestedRow}>
                <TouchableOpacity
                  onPress={() => {
                    setFilter({name: node.name, tag: node.tag});
                    toggleMenu();
                  }}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon
                    name={node.icon}
                    size={18}
                    style={
                      node.opened === true ? styles.selectedText : styles.text
                    }
                  />
                  <Text
                    style={
                      node.opened === true ? styles.selectedText : styles.text
                    }>
                    {node.name}
                  </Text>
                </TouchableOpacity>
                {node.children ? (
                  node.opened ? (
                    <Icon name="chevron-down" size={20} />
                  ) : (
                    <Icon name="chevron-right" size={20} />
                  )
                ) : null}
              </NestedRow>
            )}
          />
        </View>
      </View>
    </Modal>
  );
}

const mapStateToProps = state => ({
  menu: state.shop.menu,
});

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MenuModal);
