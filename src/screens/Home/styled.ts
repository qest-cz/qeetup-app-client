import Constants from 'expo-constants';
import { SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components';

export const StyledSafeView = styled(SafeAreaView)`
  margin-top: ${Constants.statusBarHeight};
  flex: 1;
`
export const Container = styled(ScrollView)`
  padding-top: 10;
  padding-left: 10;
  padding-right: 10;
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`
