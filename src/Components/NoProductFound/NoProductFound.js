import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './noProductStyles';

const NoProductFound = () => {
  return (
    <View style={styles.container}>
      <Icon style={styles.notFoundIcon} name="shopping-bag" size={128} />
      <Text style={styles.notFound}>No products found</Text>
    </View>
  );
};

export default NoProductFound;
