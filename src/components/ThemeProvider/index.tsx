import darkTheme from 'constants/theme/dark';
import lightTheme from 'constants/theme/light';
import React, { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useColorScheme } from 'react-native-appearance';
import { Provider as PaperProvider } from 'react-native-paper';
import { DefaultTheme, ThemeProvider as StyledProvider } from 'styled-components';

const ThemeContext = createContext<ContextProps>(null)

export enum ThemeType {
  DARK = 'dark',
  LIGHT = 'light',
}

interface ContextProps {
  setTheme: (theme: ThemeType) => void
  theme: DefaultTheme
  themeType: ThemeType
}

interface Props {
  children: ReactNode
}

const themes = {
  [ThemeType.DARK]: darkTheme,
  [ThemeType.LIGHT]: lightTheme,
}

const colorSchemeToTheme = {
  dark: ThemeType.DARK,
  light: ThemeType.LIGHT,
  'no-preference': ThemeType.DARK,
}

export const ThemeProvider = ({ children }: Props) => {
  const colorScheme = useColorScheme()
  const [theme, setTheme] = useState<ThemeType>(colorSchemeToTheme[colorScheme])
  const handleThemeChange = useCallback(setTheme, [])
  const styledTheme = useMemo<DefaultTheme>(() => themes[theme], [theme])

  useEffect(() => {
    handleThemeChange(colorSchemeToTheme[colorScheme])
  }, [colorScheme])

  return (
    <ThemeContext.Provider
      value={{ setTheme: handleThemeChange, theme: styledTheme, themeType: theme }}
    >
      <StyledProvider theme={styledTheme}>
        <PaperProvider theme={styledTheme.paper}>{children}</PaperProvider>
      </StyledProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
