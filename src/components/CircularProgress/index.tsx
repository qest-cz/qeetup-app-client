import { useTheme } from 'components/ThemeProvider';
import theme from 'constants/theme';
import React from 'react';
import { Circle, Svg } from 'react-native-svg';
import { animated, useSpring } from 'react-spring';

const size = 24
const strokeWidth = size / 6
const r = (size - strokeWidth) / 2
const cx = size / 2
const cy = size / 2
const circumference = r * 2 * Math.PI

const AnimatedCircle = animated(Circle)

interface Props {
  duration: number
}

const CircularProgress = ({ duration }: Props) => {
  const props = useSpring({
    from: { value: 0 },
    to: { value: circumference },
    config: { duration },
  })
  const { theme } = useTheme()
  return (
    <Svg width={size} height={size} style={{ transform: [{ rotateZ: '270deg' }] }}>
      <AnimatedCircle
        stroke={theme.paper.colors.onBackground}
        fill="none"
        {...{
          strokeWidth,
          strokeDashoffset: props.value,
          cx,
          cy,
          r,
        }}
        strokeDasharray={circumference}
      />
    </Svg>
  )
}

export default CircularProgress
