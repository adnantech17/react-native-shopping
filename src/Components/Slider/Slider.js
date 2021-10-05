/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';

import Swiper from 'react-native-swiper';

export default class extends Component {
  constructor(props) {
    super(props);
    this.swiper = React.createRef();
    this.state = {index: 0};
  }
  images = [
    'https://i.ibb.co/w4k6Ws9/nike-funky.png',
    'https://i.ibb.co/w4k6Ws9/nike-funky.png',
    'https://i.ibb.co/w4k6Ws9/nike-funky.png',
    'https://i.ibb.co/w4k6Ws9/nike-funky.png',
  ];

  render() {
    return (
      <>
        <View style={{height: 200, margin: 32}}>
          <Swiper
            style={styles.wrapper}
            height={200}
            showsPagination={false}
            showsButtons={false}
            ref={this.swiper}
            onIndexChanged={index => this.setState({index: index})}>
            {this.images.map((img, ind) => (
              <Image key={ind} source={{uri: img, height: 200}} />
            ))}
          </Swiper>
        </View>
        <View style={styles.thumbContainer}>
          {this.images.map((img, ind) => (
            <TouchableOpacity
              key={ind}
              onPress={() => {
                if (this.swiper.current.state.index === ind + 1) {
                  this.swiper.current.scrollBy(-1);
                } else {
                  this.swiper.current.scrollTo(ind + 1);
                }
              }}>
              <Image
                source={{uri: img, height: 48, width: 48}}
                style={
                  this.state.index === ind ? styles.selected : styles.unselected
                }
              />
            </TouchableOpacity>
          ))}
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  thumbContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 32,
  },

  selected: {
    borderWidth: 2,
    borderColor: 'green',
  },
});
