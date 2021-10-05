import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './horizontalCartStyles';

const HorizontalCartButton = ({count, add, remove}) => {
  return (
    <View style={styles.container}>
      <Icon name="minus" size={18} color="white" onPress={remove} />
      <Text style={styles.text}>{count}</Text>
      <Icon name="plus" size={18} color="white" onPress={add} />
    </View>
  );
};

export default HorizontalCartButton;
