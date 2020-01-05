import { Spacing } from 'constants/spacing';
import React, { useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const spinValue = new Animated.Value(0)

Animated.loop(
  Animated.timing(spinValue, {
    toValue: 1,
    duration: 8000,
    easing: Easing.linear,
  }),
).start()

const spin = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
})

const Atom = () => {
  return (
    <SafeAreaView style={{ paddingLeft: Spacing.M, paddingRight: Spacing.M, flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Animated.Image
          style={{
            height: 200,
            width: 200,
            transform: [{ rotate: spin }],
          }}
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default Atom
