import { locale } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: locale,
  fallbackLng: 'en',
  // Load idealy with XHR
  resources: {
    en: {
      settings: {
        headline: 'Settings',
        theme: 'Theme',
        language: 'Language',
        cs: 'Czech',
        en: 'English',
      },
    },
    cs: {
      settings: {
        headline: 'Nastavení',
        theme: 'Vzhled',
        language: 'Jazyk',
        cs: 'Česky',
        en: 'Anglicky',
      },
    },
  },
})

export default i18n
