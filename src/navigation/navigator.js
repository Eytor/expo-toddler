import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Boards from '../boards/index';


export default (AppNavigator = createStackNavigator({
  Home: {
    screen: Boards,
  },
}));
