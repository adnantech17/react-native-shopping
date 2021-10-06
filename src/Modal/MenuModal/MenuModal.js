/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://crantech-ecommerce.herokuapp.com/category/get')
      .then(res => res.json())
      .then(data => list_to_tree(data.data))
      .catch(err => console.log(err));
  }, []);

  function list_to_tree(list) {
    var map = {},
      node,
      roots = [],
      i;
    for (i = 0; i < list.length; i += 1) {
      map[list[i]._id] = i;
    }

    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.parent_id !== null) {
        if (list[map[node.parent_id]].children) {
          list[map[node.parent_id]].children.push(node);
        } else {
          list[map[node.parent_id]].children = [];
          list[map[node.parent_id]].children.push(node);
        }
      } else {
        roots.push(node);
      }
    }
    setCategories(roots);
    return roots;
  }
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
            data={categories}
            getChildrenName={() => 'children'}
            onNodePressed={node => {
              if (!node.children) {
                setFilter({name: node.name, id: node._id});
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
                    setFilter({name: node.name, id: node._id});
                    toggleMenu();
                  }}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
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
