/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'
import React, { useEffect, useState } from 'react';
import {Node} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ImagesList  from './ImagesList';
import SelectedImage from './SelectedImage';
import { Provider } from 'react-redux';
import { store } from './sotre';


const Stack = createNativeStackNavigator();


const App = () => {
  

  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName='ImagesList'>
        <Stack.Screen options={{headerShown: false}} name='ImagesList' component={ImagesList} />
        <Stack.Screen options={{headerShown: false}} name='SelectedImage' component={SelectedImage} />

      
      </Stack.Navigator>

    </NavigationContainer>
    </Provider>
    
  );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
 },
 header: {
  paddingTop: 20,
  paddingBottom: 20,
  textAlign: 'center',
  fontSize: 24,
  backgroundColor: 'gray',
  width: '100%'
 },

 
});

export default App;
