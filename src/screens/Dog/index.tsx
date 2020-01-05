import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'components/ThemeProvider';
import { Spacing } from 'constants/spacing';
import theme from 'constants/theme';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const Dog = () => {
  const {
    theme: {
      paper: {
        colors: { onBackground },
      },
    },
  } = useTheme()
  return (
    <SafeAreaView style={{ paddingLeft: Spacing.M, paddingRight: Spacing.M, flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 52, marginBottom: Spacing.L }}>Yo, its dog</Text>
        <FontAwesome5 name="dog" size={82} color={onBackground} />
      </View>
    </SafeAreaView>
  )
}

export default Dog
