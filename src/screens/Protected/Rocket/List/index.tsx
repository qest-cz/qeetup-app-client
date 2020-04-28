import { useQuery } from '@apollo/react-hooks'
import { StackNavigationProp } from '@react-navigation/stack'
import { useTheme } from 'components/ThemeProvider'
import { Spacing } from 'constants/spacing'
import { ALL_STARSHIP_LIST } from 'gql/queries/allStarshipsList'
import { AllStarshipsListQuery, ListStarshipFragment } from 'gql/types'
import React from 'react'
import { Image, RefreshControl, ScrollView, StatusBar, View } from 'react-native'
import { List, Searchbar, Surface, Text } from 'react-native-paper'
import { SafeAreaView, useSafeArea } from 'react-native-safe-area-context'
import { animated, useSpring } from 'react-spring'
import { RocketsStackParamList } from 'screens/@types'

type RocketsNavigationProp = StackNavigationProp<RocketsStackParamList, 'List'>

interface Props {
  navigation: RocketsNavigationProp
}

interface StarShipProps extends ListStarshipFragment {
  onPress?: (listStarship: ListStarshipFragment) => void
}
const Starship = ({ onPress, ...listStarship }: StarShipProps) => {
  return (
    <Surface style={{ marginBottom: 8, borderRadius: 16 }}>
      <List.Item
        onPress={() => onPress(listStarship)}
        left={() => (
          <View style={{ justifyContent: 'center' }}>
            <Image
              source={{ uri: `http://satyr.io/200x200/${Math.round(Math.random() * 10)}` }}
              style={{ height: 40, width: 40, borderRadius: 100 }}
            />
          </View>
        )}
        title={listStarship.name}
        description={listStarship.class}
        style={{ borderRadius: 16 }}
      />
    </Surface>
  )
}

/* Bug in react-spring types */
const AnimatedView = animated(View) as any
const AnimatedText = animated(Text) as any

const RocketsList = ({ navigation }: Props) => {
  const { top } = useSafeArea()
  const { data, loading, refetch } = useQuery<AllStarshipsListQuery>(ALL_STARSHIP_LIST)
  const [{ value }, set] = useSpring(() => ({ value: 0 }))
  const {
    theme: {
      paper: {
        roundness,
        colors: { accent },
      },
    },
  } = useTheme()

  const height = value.to({ extrapolate: 'clamp', range: [0, 150], output: [200, 60] })
  const opacity = value.to({ extrapolate: 'clamp', range: [60, 100], output: [1, 0] })
  const fontSize = value.to({ extrapolate: 'clamp', range: [30, 60], output: [36, 24] })

  const handleStarshipClick = ({ id }: ListStarshipFragment) => {
    navigation.navigate('Detail', { id })
  }
  return (
    <>
      <View style={{ height: top, backgroundColor: accent }} />
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: -top,
          paddingBottom: 0,
        }}
      >
        <StatusBar backgroundColor={accent} />
        <AnimatedView
          style={{
            height,
            backgroundColor: accent,
            borderBottomLeftRadius: roundness,
            borderBottomRightRadius: roundness,
          }}
        >
          <AnimatedView
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              opacity,
            }}
          >
            <AnimatedText
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize,
              }}
            >
              Star Wars
            </AnimatedText>
            <Text style={{ textAlign: 'center', fontWeight: '800' }}>Ships</Text>
          </AnimatedView>
          <Searchbar
            value={''}
            style={{
              marginBottom: Spacing.S,
              marginLeft: Spacing.S,
              marginRight: Spacing.S,
            }}
          />
        </AnimatedView>
        <ScrollView
          style={{
            paddingLeft: Spacing.M,
            paddingRight: Spacing.M,
          }}
          scrollEventThrottle={16}
          onScroll={({
            nativeEvent: {
              contentOffset: { y },
            },
          }) => {
            set({ value: y })
          }}
          refreshControl={<RefreshControl refreshing={loading} onRefresh={refetch} />}
        >
          <View style={{ height: 30 }} />
          {data &&
            data.allStarships.map(listStarship => (
              <Starship key={listStarship.id} onPress={handleStarshipClick} {...listStarship} />
            ))}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default RocketsList
