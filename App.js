import React from 'react';
import store from './Redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNav from './src/Navigation/DrawerNav';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
