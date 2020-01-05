import { FontAwesome5 } from '@expo/vector-icons';
import { ThemeType, useTheme } from 'components/ThemeProvider';
import theme from 'constants/theme';
import React, { Suspense } from 'react';
import { StatusBar } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Atom from 'screens/Atom';
import Banners from 'screens/Banners';
import Dog from 'screens/Dog';
import Settings from 'screens/Settings';

const BottomTabs = createMaterialBottomTabNavigator(
  {
    Atom: {
      screen: Atom,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome5 style={{ margin: -5 }} name="atom" size={24} color={tintColor} />
        ),
      },
    },
    Chat: {
      screen: Banners,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome5 style={{ margin: -5 }} name="comment" size={24} color={tintColor} />
        ),
      },
    },
    Banners: {
      screen: Banners,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome5 style={{ margin: -5 }} name="bell" size={24} color={tintColor} />
        ),
      },
    },
    Dog: {
      screen: Dog,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome5 style={{ margin: -5 }} name="dog" size={24} color={tintColor} />
        ),
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome5 style={{ margin: -5 }} name="cog" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    labeled: false,
    initialRouteName: 'Atom',
    shifting: true,
  },
)

const StackNavigator = createStackNavigator(
  {
    BottomTabs,
  },
  {
    initialRouteName: 'BottomTabs',
    headerMode: 'none',
    mode: 'card',
  },
)

const NavigationRoot = createAppContainer(StackNavigator)

export const Main = () => {
  const { themeType } = useTheme()
  return (
    <>
      <StatusBar
        animated
        barStyle={themeType === ThemeType.DARK ? 'light-content' : 'dark-content'}
      />
      <Suspense fallback={<ActivityIndicator size="large" />}>
        <NavigationRoot theme={themeType === ThemeType.DARK ? 'dark' : 'light'} />
      </Suspense>
    </>
  )
}

export default Main
