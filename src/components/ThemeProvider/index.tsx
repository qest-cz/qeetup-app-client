import React from 'react'
import { withTheme } from 'react-native-paper'
import { ThemeProvider as StyledProvider } from 'styled-components'

const ThemeProvider = ({ theme, children, ...props }) => {
  return (
    <StyledProvider theme={theme} {...props}>
      {children}
    </StyledProvider>
  )
}

export default withTheme(ThemeProvider)
