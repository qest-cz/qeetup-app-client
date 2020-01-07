import { Spacing } from 'constants/spacing';
import { Colors, DarkTheme } from 'react-native-paper';
import { DefaultTheme } from 'styled-components';

const darkTheme: DefaultTheme = {
  paper: {
    ...DarkTheme,
    dark: true,
    roundness: Spacing.M,
    colors: {
      ...DarkTheme.colors,
      primary: Colors.red200,
      accent: Colors.teal200,
    },
    mode: 'adaptive',
  },
  colors: {
    success: Colors.green400,
    warning: Colors.amber400,
  },
}

export default darkTheme
