import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'components/ThemeProvider';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { AppearanceProvider } from 'react-native-appearance';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ToastBannerPresenter, ToastBannerProvider } from 'react-native-toast-banner';
import i18n from 'utils/locale';

import { client } from './gql';
import Main from './Main';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <SafeAreaProvider>
        <ApolloProvider client={client}>
          <AppearanceProvider>
            <ThemeProvider>
              <ToastBannerProvider>
                <Main />
                <ToastBannerPresenter />
              </ToastBannerProvider>
            </ThemeProvider>
          </AppearanceProvider>
        </ApolloProvider>
      </SafeAreaProvider>
    </I18nextProvider>
  )
}

export default App
