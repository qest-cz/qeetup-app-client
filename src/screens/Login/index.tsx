import { StackNavigationProp } from '@react-navigation/stack'
import { useAuth } from 'components/AuthProvider'
import React from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'

import { RootStackParamList } from '../@types'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>

interface Props {
  navigation: ProfileScreenNavigationProp
}

const Login = ({ navigation }: Props) => {
  const { loginSuccess } = useAuth()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={() => loginSuccess('some-token')} mode="contained">
        Login
      </Button>
      <Text>Or</Text>
      <Button onPress={() => navigation.navigate('Register')} mode="contained">
        Register
      </Button>
    </View>
  )
}

export default Login
