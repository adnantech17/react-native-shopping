/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Swiper from 'react-native-swiper';

export default class extends Component {
  constructor(props) {
    super(props);
    this.swiper = React.createRef();
  }

  render() {
    return (
      <View style={{height: 200, marginBottom: 50}}>
        <Swiper
          showsButtons={false}
          style={styles.wrapper}
          height={200}
          showsPagination={false}
          ref={this.swiper}>
          {this.props.images.map((img, ind) => (
            <Image
              key={ind}
              style={{margin: 24, resizeMode: 'cover'}}
              source={{uri: img, height: 200}}
            />
          ))}
        </Swiper>
        <TouchableOpacity
          style={styles.buttonsLeft}
          onPress={() => {
            this.swiper.current.scrollBy(-1);
          }}>
          <Icon name="angle-left" size={40} color="green" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonsRight}
          onPress={() => {
            this.swiper.current.scrollBy(1);
          }}>
          <Icon name="angle-right" size={40} color="green" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsLeft: {
    borderRadius: 20,
    height: 40,
    width: 40,
    backgroundColor: 'white',
    position: 'absolute',
    top: 90,
    left: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    elevation: 5,
  },
  buttonsRight: {
    borderRadius: 20,
    height: 40,
    width: 40,
    backgroundColor: 'white',
    position: 'absolute',
    top: 90,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    elevation: 5,
  },
});
