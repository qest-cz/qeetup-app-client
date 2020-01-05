import 'styled-components';

import { Theme } from 'react-native-paper';

declare module 'styled-components' {
  export interface DefaultTheme {
    paper: Theme
    colors: {
      success: string
      warning: string
    }
  }
}
