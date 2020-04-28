import { ParamListBase, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export type RootStackParamList = {
  Protected: undefined
  Login: undefined
  Register: undefined
}

export type ProtectedTabParamList = {
  Atom: undefined
  Settings: undefined
  Rocket: undefined
}

export type RocketsStackParamList = {
  List: undefined
  Detail: { id: string }
}

export type StackNavigationProps<T extends ParamListBase, V extends keyof T = string> = {
  route: RouteProp<T, V>
  navigation: StackNavigationProp<T, V>
}
