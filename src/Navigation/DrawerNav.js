/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';

import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Products from '../Screens/ProductScreen/Products';
import CustomSidebarMenu from './CustomSidebarMenu';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const NavigationDrawerStructure = props => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Icon name="bars" size={25} color="green" style={{marginLeft: 16}} />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Products}
        options={{
          title: 'First Page',
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#000000',
        itemStyle: {marginVertical: 5},
      }}
      drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="Home Page"
        options={{drawerLabel: 'First page Option'}}
        component={firstScreenStack}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
