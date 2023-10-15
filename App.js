
import { StyleSheet, Text, View, Image, Pressable, Span } from 'react-native';
import React from 'react';
//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens import
import ColorScreen from '../Lab05/ColorScreen';
import checkOutScreen from './checkOutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='checkOutScreen' component={checkOutScreen}></Stack.Screen>
        <Stack.Screen name='ColorScreen' component={ColorScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    gap: '2rem',
    padding: '1rem',
  },
  imgsss: {
    height: '270px'
  },
  btnn1: {
    justifyContent: 'center',
    backgroundColor: 'red',
    width: '100px',
    height: '100px',
    padding: 10,
    borderRadius: 5,

  },
  btnn2: {
    justifyContent: 'center',
    backgroundColor: 'black',
    width: '100px',
    height: '100px',
    padding: 10,
    borderRadius: 5,

  },
  btnn3: {
    justifyContent: 'center',
    backgroundColor: 'lightpink',
    width: '100px',
    height: '100px',
    padding: 10,
    borderRadius: 5,

  },
  btnn4: {
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    width: '100px',
    height: '100px',
    padding: 10,
    borderRadius: 5,

  },
  spn: {
    fontWeight: 600, fontSize: '2rem'
  }

});
