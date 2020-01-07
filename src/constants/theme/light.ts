import { Spacing } from 'constants/spacing';
import { Colors, DefaultTheme as LightTheme } from 'react-native-paper';
import { DefaultTheme } from 'styled-components';

const lightTheme: DefaultTheme = {
  paper: {
    ...LightTheme,
    dark: false,
    roundness: Spacing.M,
    colors: {
      ...LightTheme.colors,
      error: Colors.red300,
    },
    mode: 'adaptive',
  },
  colors: {
    success: Colors.green400,
    warning: Colors.yellow400,
  },
}

export default lightTheme
