import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './verticalCartStyles';

const VerticalCartButton = ({count, add, remove}) => {
  return (
    <View style={styles.container}>
      <Icon name="plus" size={18} color="white" onPress={add} />
      <Text style={styles.text}>{count}</Text>
      <Icon name="minus" size={18} color="white" onPress={remove} />
    </View>
  );
};

export default VerticalCartButton;
