import React from 'react'
import { Chip, withTheme } from 'react-native-paper'

export const ImportantChip = withTheme(({ theme, children, ...props }) => {
  return (
    <Chip
      {...props}
      textStyle={{ color: theme.colors.background, fontWeight: 'bold' }}
      style={{ backgroundColor: theme.colors.accent, margin: 5 }}
    >
      {children}
    </Chip>
  )
})

export const StyledChip = withTheme(({ theme, children, ...props }) => {
  return (
    <Chip {...props} textStyle={{ fontWeight: 'bold' }} style={{ margin: 5 }}>
      {children}
    </Chip>
  )
})
