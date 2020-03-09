import CircularProgress from 'components/CircularProgress'
import React, { useMemo } from 'react'
import { Platform, StatusBar } from 'react-native'
import { Title } from 'react-native-paper'
import { useSafeArea } from 'react-native-safe-area-context'
import { Transition, useToastBannerToggler } from 'react-native-toast-banner'

import { BannerType, Container, Subtitle } from './styled'

interface BannerProps {
  type: BannerType
  title: string
  subtitle?: string
  duration: number
}

export const Banner = ({ duration, title, subtitle, type }: BannerProps) => {
  const insets = useSafeArea()
  return (
    <Container type={type} inset={insets.top}>
      <StatusBar animated barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} />
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {duration > 500 && <CircularProgress duration={duration} />}
    </Container>
  )
}

interface ShowBannerOptions {
  title: string
  subtitle?: string
  type: BannerType
  onClick?: () => void
}

const bannerDurations = {
  [BannerType.ERROR]: 2000,
  [BannerType.SUCCESS]: 500,
  [BannerType.WARNING]: 2000,
  [BannerType.INFO]: 2000,
}
export const useBanner = () => {
  const { showBanner } = useToastBannerToggler()
  const handleShowBanner = ({ title, subtitle, type }: ShowBannerOptions) => {
    const duration = bannerDurations[type]
    const contentView = <Banner type={type} title={title} subtitle={subtitle} duration={duration} />
    showBanner({
      contentView,
      duration,
      transitions: [Transition.Move, Transition.FadeInOut],
    })
  }

  return handleShowBanner
}
