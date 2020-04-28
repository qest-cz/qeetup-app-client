import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { RocketsStackParamList } from 'screens/@types'

import RocketDetail from './Detail'
import RocketsList from './List'

const RocketStack = createStackNavigator<RocketsStackParamList>()

export const Rocket = () => {
  return (
    <RocketStack.Navigator headerMode="none">
      <RocketStack.Screen name="List" component={RocketsList} />
      <RocketStack.Screen name="Detail" component={RocketDetail} />
    </RocketStack.Navigator>
  )
}

export default Rocket
