import { useQuery } from '@apollo/react-hooks';
import { useTheme } from 'components/ThemeProvider';
import { Spacing } from 'constants/spacing';
import { ALL_STARSHIP_LIST } from 'gql/queries/allStarshipsList';
import { AllStarshipsListQuery } from 'gql/types';
import React from 'react';
import { RefreshControl, ScrollView, StatusBar, View } from 'react-native';
import { Caption, Card, Searchbar, Text } from 'react-native-paper';
import { SafeAreaView, useSafeArea } from 'react-native-safe-area-context';
import { animated, useSpring } from 'react-spring';

interface StarshipProps {
  name: string
  shipClass: string
}

const Starship = ({ name, shipClass }: StarshipProps) => {
  return (
    <Card style={{ marginBottom: Spacing.M }}>
      <Card.Title title={name} />
      <Card.Content>
        <Caption>{shipClass}</Caption>
      </Card.Content>
    </Card>
  )
}

/* Bug in react-spring types */
const AnimatedView = animated(View) as any
const AnimatedText = animated(Text) as any

const Rockets = () => {
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
            data.allStarships.map(({ id, name, class: shipClass }) => (
              <Starship key={id} name={name} shipClass={shipClass} />
            ))}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Rockets
