import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import Find from 'screens/Find'
import Playlists from 'screens/Playlists'
import Song from 'screens/Song'

const Main = createMaterialBottomTabNavigator(
  {
    Playlist: {
      screen: Playlists,
      navigationOptions: {
        tabBarIcon: <Ionicons size={25} name="md-musical-notes" />,
      },
    },
    Find: {
      screen: Find,
      navigationOptions: {
        tabBarIcon: <Ionicons size={25} name="md-search" />,
      },
    },
  },
  {
    initialRouteName: 'Playlist',
    shifting: true,
  },
)

const StackNavigator = createStackNavigator(
  {
    Main,
    Song: {
      screen: Song,
    },
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
    mode: 'card',
  },
)

export default createAppContainer(StackNavigator)
