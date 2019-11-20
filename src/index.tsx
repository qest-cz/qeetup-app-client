import { ApolloProvider } from '@apollo/react-hooks';
import ThemeProvider from 'components/ThemeProvider';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import theme from './constants/theme';
import { client } from './gql';
import Main from './Main';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <PaperProvider theme={theme}>
        <ThemeProvider>
          <StatusBar barStyle="light-content" />
          <Main theme="dark" />
        </ThemeProvider>
      </PaperProvider>
    </ApolloProvider>
  )
}

export default App
