/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomSidebarMenu(props) {
  const proileImage = 'https://i.ibb.co/w4k6Ws9/nike-funky.png';
  const items = [
    {
      navOptionThumb: 'home',
      navOptionName: 'First Screen',
      screenToNavigate: 'Home',
    },
    {
      navOptionThumb: 'home',
      navOptionName: 'Second Screen',
      screenToNavigate: 'Home',
    },
    {
      navOptionThumb: 'home',
      navOptionName: 'Third Screen',
      screenToNavigate: 'Home',
    },
  ];
  return (
    <View style={styles.sideMenuContainer}>
      {/*Top Large Image */}
      <Image source={{uri: proileImage}} style={styles.sideMenuProfileIcon} />
      {/*Divider between Top Image and Sidebar Option*/}
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#e2e2e2',
          marginTop: 15,
        }}
      />
      {/*Setting up Navigation Options from option array using loop*/}
      <View style={{width: '100%'}}>
        {items.map((item, key) => (
          <View
            key={key}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingTop: 10,
              paddingBottom: 10,
              backgroundColor:
                global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
            }}>
            <View style={{marginRight: 10, marginLeft: 20}}>
              <Icon name={item.navOptionThumb} size={25} color="#808080" />
            </View>
            <Text
              style={{
                fontSize: 15,
                color: global.currentScreenIndex === key ? 'red' : 'black',
              }}
              onPress={() => {
                global.currentScreenIndex = key;
                props.navigation.navigate(item.screenToNavigate);
              }}>
              {item.navOptionName}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
});
