import ThemeProvider from 'components/ThemeProvider'
import React from 'react'
import { StatusBar } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'

import theme from './constants/theme'
import Main from './Main'

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <ThemeProvider>
        <StatusBar barStyle="light-content" />
        <Main theme="dark" />
      </ThemeProvider>
    </PaperProvider>
  )
}

export default App
