import { StackNavigationProp } from '@react-navigation/stack'
import { useAuth } from 'components/AuthProvider'
import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-paper'
import { RootStackParamList } from 'screens/@types'

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>

interface Props {
  navigation: ProfileScreenNavigationProp
}

const Register = ({ navigation: { goBack } }: Props) => {
  const { loginSuccess } = useAuth()
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={() => loginSuccess('some-token')} mode="contained">
        Register
      </Button>
      <Button onPress={() => goBack()}>Back</Button>
    </View>
  )
}

export default Register
