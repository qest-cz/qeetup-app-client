import { FontAwesome5 } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { ProtectedTabParamList } from 'screens/@types'

import Atom from './Atom'
import Banners from './Banners'
import Dog from './Dog'
import Rockets from './Rocket'
import Settings from './Settings'

const Tab = createBottomTabNavigator<ProtectedTabParamList>()

interface TabBarIconProps {
  color: string
  focused: boolean
  size: number
}
const tabBarIcon = (iconName: string) => ({ color }: TabBarIconProps) => (
  <FontAwesome5 style={{ margin: -5 }} name={iconName} size={24} color={color} />
)

const tabBarIcons = {
  Atom: 'atom',
  Settings: 'cog',
  Dog: 'dog',
  Banners: 'bell',
  Rocket: 'rocket',
}

const ProtectedApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          title: route.name,
          tabBarIcon: tabBarIcon(tabBarIcons[route.name]),
        }
      }}
    >
      <Tab.Screen name="Atom" component={Atom} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Dog" component={Dog} />
      <Tab.Screen name="Banners" component={Banners} />
      <Tab.Screen name="Rocket" component={Rockets} />
    </Tab.Navigator>
  )
}

export default ProtectedApp
