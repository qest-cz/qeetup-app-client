import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Home from 'screens/Home';

const Main = createMaterialBottomTabNavigator(
  {
    Home,
  },
  {
    initialRouteName: 'Home',
    shifting: true,
  },
)

const StackNavigator = createStackNavigator(
  {
    Main,
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
    mode: 'card',
  },
)

export default createAppContainer(StackNavigator)
