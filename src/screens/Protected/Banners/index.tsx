import { useBanner } from 'components/Banner';
import { BannerType } from 'components/Banner/styled';
import { useTheme } from 'components/ThemeProvider';
import { Spacing } from 'constants/spacing';
import React from 'react';
import { View } from 'react-native';
import { Button, Caption, Headline, Surface, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const Banners = () => {
  const showBanner = useBanner()
  const {
    theme: {
      colors: { warning, success },
      paper: {
        colors: { accent, error },
      },
    },
  } = useTheme()
  return (
    <SafeAreaView style={{ paddingLeft: Spacing.M, paddingRight: Spacing.M, flex: 1 }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <Headline>Try these fresh banners</Headline>
      </View>
      <View style={{ flex: 3 }}>
        <View
          style={{ justifyContent: 'space-evenly', height: 300, paddingLeft: 40, paddingRight: 40 }}
        >
          <Button
            color={error}
            mode="contained"
            onPress={() => {
              showBanner({
                type: BannerType.ERROR,
                title: 'No items found',
                subtitle: 'Try something else',
              })
            }}
          >
            Error
          </Button>
          <Button
            color={success}
            mode="contained"
            onPress={() => {
              showBanner({
                type: BannerType.SUCCESS,
                title: 'Item added to cart',
              })
            }}
          >
            Success
          </Button>
          <Button
            color={accent}
            mode="contained"
            onPress={() => {
              showBanner({
                type: BannerType.INFO,
                title: 'Some info',
              })
            }}
          >
            Info
          </Button>
          <Button
            color={warning}
            mode="contained"
            onPress={() => {
              showBanner({
                type: BannerType.WARNING,
                title: 'This is some warning',
              })
            }}
          >
            Warning
          </Button>
          <View style={{ alignItems: 'center' }}>
            <Caption>Edit appearance here</Caption>
            <Surface style={{ borderRadius: Spacing.S, padding: Spacing.S }}>
              <Text>/components/Banner</Text>
            </Surface>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Banners
