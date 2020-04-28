import { Spacing } from 'constants/spacing'
import { Platform, View } from 'react-native'
import { Caption } from 'react-native-paper'
import styled, { DefaultTheme } from 'styled-components'

export enum BannerType {
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
}

interface ContainerProps {
  type: BannerType
  inset: number
  theme: DefaultTheme
}

const backgroundColorByType = ({ theme, type }: ContainerProps) => {
  const colors = {
    [BannerType.ERROR]: theme.paper.colors.error,
    [BannerType.SUCCESS]: theme.colors.success,
    [BannerType.WARNING]: theme.colors.warning,
    [BannerType.INFO]: theme.paper.colors.accent,
  }

  return colors[type]
}

export const Container = styled(View)<ContainerProps>`
  background-color: ${backgroundColorByType};
  border-bottom-left-radius: ${Spacing.M}px;
  border-bottom-right-radius: ${Spacing.M}px;
  padding: ${Spacing.M}px;
  padding-top: ${({ inset }) => Spacing.M + inset + (Platform.OS === 'android' ? Spacing.M : 0)}px;
  margin-top: -${({ inset }) => inset}px;
  align-items: center;
`

export const Subtitle = styled(Caption)`
  margin-bottom: 20px;
`
