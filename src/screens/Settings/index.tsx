import { FontAwesome5 } from '@expo/vector-icons';
import { ThemeType, useTheme } from 'components/ThemeProvider';
import { Spacing } from 'constants/spacing';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { Button, Card, Headline, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import i18n from 'utils/locale';

const Settings = () => {
  const {
    setTheme,
    themeType,
    theme: {
      paper: {
        colors: { onBackground, accent },
      },
    },
  } = useTheme()
  const { t } = useTranslation('settings')
  return (
    <SafeAreaView style={{ paddingLeft: Spacing.M, paddingRight: Spacing.M, flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 52 }}>{t('headline')}</Text>
      </View>
      <View style={{ flex: 2 }}>
        <Card style={{ marginBottom: Spacing.M }}>
          <Card.Content>
            <Headline style={{ textAlign: 'center' }}>{t('theme')}</Headline>
            <View
              style={{
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                marginTop: Spacing.L,
                alignItems: 'center',
              }}
            >
              <FontAwesome5
                name="sun"
                onPress={() => setTheme(ThemeType.LIGHT)}
                size={themeType === ThemeType.LIGHT ? 42 : 32}
                color={themeType === ThemeType.LIGHT ? accent : onBackground}
              />
              <FontAwesome5
                name="moon"
                onPress={() => setTheme(ThemeType.DARK)}
                size={themeType === ThemeType.DARK ? 42 : 32}
                color={themeType === ThemeType.DARK ? accent : onBackground}
              />
            </View>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Headline style={{ textAlign: 'center' }}>{t('language')}</Headline>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <Button onPress={() => i18n.changeLanguage('cs')}>🇨🇿{t('cs')}</Button>
              <Button onPress={() => i18n.changeLanguage('en')}>🇬🇧{t('en')}</Button>
            </View>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  )
}

export default Settings
