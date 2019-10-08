import { Colors, DarkTheme, Theme } from 'react-native-paper'

console.log(DarkTheme.colors)

const theme: Theme = {
  ...DarkTheme,
  dark: true,
  roundness: 6,
  colors: {
    ...DarkTheme.colors,
    primary: Colors.red200,
    accent: Colors.teal200,
  },
}

export default theme
