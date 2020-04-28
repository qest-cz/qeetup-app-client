import { useQuery } from '@apollo/react-hooks'
import Modal, { ModalHeader } from 'components/Modal'
import { STARSHIP_DETAIL } from 'gql/queries/starshipDetail'
import { StarshipDetailQuery, StarshipDetailQueryVariables } from 'gql/types'
import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { useBottomModal } from 'react-native-bottom-modal'
import { Appbar, Button, Card, Paragraph } from 'react-native-paper'
import { RocketsStackParamList, StackNavigationProps } from 'screens/@types'

type NavProps = StackNavigationProps<RocketsStackParamList, 'Detail'>
interface Props extends NavProps {}

const RocketDetail = ({
  navigation,
  route: {
    params: { id },
  },
}: Props) => {
  const { data, loading } = useQuery<StarshipDetailQuery, StarshipDetailQueryVariables>(
    STARSHIP_DETAIL,
    {
      variables: { id },
    },
  )

  const { showModal } = useBottomModal()

  console.log(id)

  if (loading) return null
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={data.Starship.name} subtitle={data.Starship.class} />

        <Appbar.Action
          icon="dots-vertical"
          onPress={() =>
            showModal({
              header: <ModalHeader />,
              content: (
                <Modal>
                  <Button>Share</Button>
                </Modal>
              ),
            })
          }
        />
      </Appbar.Header>
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="cover"
          style={{ height: 300, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
          source={{
            uri:
              'https://ae01.alicdn.com/kf/HTB1RMoBGb1YBuNjSszhq6AUsFXaw/star-wars-X-wing-art-Poster-Print-Wall-Art-Decor.jpg_640x640q70.jpg',
          }}
        />
        <View style={{ flex: 1, padding: 20 }}>
          <Card>
            <Card.Content>
              <Paragraph>{data.Starship.hyperdriveRating}</Paragraph>
              <Paragraph>{data.Starship.costInCredits}</Paragraph>
              <Paragraph>{data.Starship.mglt}</Paragraph>
              <Paragraph>{data.Starship.crew}</Paragraph>
              <Paragraph>{data.Starship.manufacturer}</Paragraph>
            </Card.Content>
          </Card>
        </View>
      </View>
    </>
  )
}

export default RocketDetail
