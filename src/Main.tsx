import { NavigationContainer } from '@react-navigation/native'
import { Theme } from '@react-navigation/native/lib/typescript/src/types'
import { createStackNavigator } from '@react-navigation/stack'
import { useAuth } from 'components/AuthProvider'
import { AuthState } from 'components/AuthProvider/@types'
import { ThemeType, useTheme } from 'components/ThemeProvider'
import React, { Suspense } from 'react'
import { StatusBar } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
import { RootStackParamList } from 'screens/@types'
import Login from 'screens/Login'
import ProtectedApp from 'screens/Protected'
import Register from 'screens/Register'

const RootStack = createStackNavigator<RootStackParamList>()

export const Main = () => {
  const { themeType, theme } = useTheme()
  const { state } = useAuth()

  if (state === AuthState.PENDING) {
    return null
  }

  const navigationTheme: Theme = {
    colors: {
      background: theme.paper.colors.background,
      border: theme.paper.colors.backdrop,
      card: theme.paper.colors.surface,
      primary: theme.paper.colors.primary,
      text: theme.paper.colors.text,
    },
    dark: theme.paper.dark,
  }

  return (
    <NavigationContainer theme={navigationTheme}>
      <Suspense fallback={<ActivityIndicator size="large" />}>
        <StatusBar
          animated
          barStyle={themeType === ThemeType.DARK ? 'light-content' : 'dark-content'}
        />
        <RootStack.Navigator headerMode="none">
          {state === AuthState.NOT_VERIFIED && (
            <>
              <RootStack.Screen name="Login" component={Login} />
              <RootStack.Screen name="Register" component={Register} />
            </>
          )}
          {state === AuthState.VERIFIED && (
            <RootStack.Screen
              name="Protected"
              component={ProtectedApp}
              options={{ animationEnabled: false }}
            />
          )}
        </RootStack.Navigator>
      </Suspense>
    </NavigationContainer>
  )
}

export default Main
