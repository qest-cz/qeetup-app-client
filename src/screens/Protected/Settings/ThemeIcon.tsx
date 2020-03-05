import { FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from 'components/ThemeProvider';
import React from 'react';
import { animated, useSpring } from 'react-spring';

const AnimatedIcon = animated(FontAwesome5)

interface Props {
  name: string
  onPress: () => void
  isActive: boolean
}
const ThemeIcon = ({ onPress, name, isActive }: Props) => {
  const {
    theme: {
      paper: {
        colors: { onBackground, accent },
      },
    },
  } = useTheme()

  const { size } = useSpring({ size: isActive ? 42 : 32 })

  return (
    <AnimatedIcon
      name={name}
      onPress={onPress}
      size={size}
      color={isActive ? accent : onBackground}
    />
  )
}

export default ThemeIcon
