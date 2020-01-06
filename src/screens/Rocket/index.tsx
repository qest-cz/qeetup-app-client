import { useQuery } from '@apollo/react-hooks';
import { useTheme } from 'components/ThemeProvider';
import { Spacing } from 'constants/spacing';
import { ALL_STARSHIP_LIST } from 'gql/queries/allStarshipsList';
import { AllStarshipsListQuery } from 'gql/types';
import React from 'react';
import { RefreshControl, ScrollView, StatusBar, View } from 'react-native';
import { Caption, Card, Text } from 'react-native-paper';
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

const Rockets = () => {
  const { top } = useSafeArea()
  const { data, loading, refetch } = useQuery<AllStarshipsListQuery>(ALL_STARSHIP_LIST)
  const [{ value }, set] = useSpring(() => ({ value: 0 }))
  const {
    theme: {
      paper: {
        colors: { accent },
      },
    },
  } = useTheme()

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
            height: value.to({ extrapolate: 'clamp', range: [0, 200], output: [200, 100] }),
            backgroundColor: accent,
            borderBottomLeftRadius: Spacing.M,
            borderBottomRightRadius: Spacing.M,
            marginBottom: value.to({
              extrapolate: 'clamp',
              range: [0, 200],
              output: [Spacing.L, 0],
            }),
          }}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ textAlign: 'center', fontWeight: '800', fontSize: 36 }}>Star Wars</Text>
            <Text style={{ textAlign: 'center', fontWeight: '800' }}>Ships</Text>
          </View>
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
