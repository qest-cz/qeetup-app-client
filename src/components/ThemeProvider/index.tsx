import darkTheme from 'constants/theme/dark';
import lightTheme from 'constants/theme/light';
import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
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
  initialTheme?: ThemeType
}

const themes = {
  [ThemeType.DARK]: darkTheme,
  [ThemeType.LIGHT]: lightTheme,
}

export const ThemeProvider = ({ children, initialTheme = ThemeType.DARK }: Props) => {
  const [theme, setTheme] = useState<ThemeType>(initialTheme)
  const handleThemeChange = useCallback(setTheme, [])
  const styledTheme = useMemo<DefaultTheme>(() => themes[theme], [theme])
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
