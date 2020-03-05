import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { AsyncStorage } from 'react-native'

import { AuthState, ContextProps, LoginSuccessFn, LogoutSuccessFn } from './@types'
import { AuthContext } from './context'

type RenderFn = (props: ContextProps) => React.ReactNode

interface Props {
  children: React.ReactNode | RenderFn
}

const AuthProvider = ({ children }: Props) => {
  const [state, setState] = useState<AuthState>(AuthState.PENDING)

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('token')
      if (!!token) return setState(AuthState.VERIFIED)
      return setState(AuthState.NOT_VERIFIED)
    }
    getToken()
  }, [])

  const loginSuccess = useCallback<LoginSuccessFn>(async token => {
    await AsyncStorage.setItem('token', token)
    setState(AuthState.VERIFIED)
  }, [])

  const logoutSuccess = useCallback<LogoutSuccessFn>(async () => {
    await AsyncStorage.removeItem('token')
    setState(AuthState.NOT_VERIFIED)
  }, [])

  const contextProps: ContextProps = {
    state,
    loginSuccess,
    logoutSuccess,
  }

  return (
    <AuthContext.Provider value={contextProps}>
      {typeof children === 'function' ? children(contextProps) : children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthProvider
