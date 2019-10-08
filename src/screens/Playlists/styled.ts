import Constants from 'expo-constants'
import { SafeAreaView, ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import styled from 'styled-components'

export const StyledSafeView = styled(SafeAreaView)`
  margin-top: ${Constants.statusBarHeight};
  flex: 1;
`
export const PlaylistHeader = styled(Text)`
  font-size: 40;
  margin-top: 20;
  font-weight: bold;
  margin-bottom: 20;
  color: ${({ theme }) => theme.colors.primary};
`
export const Container = styled(ScrollView)`
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
  background-color: ${({ theme }) => theme.colors.background};
`
