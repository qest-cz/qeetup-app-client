import { useMutation } from '@apollo/react-hooks'
import { Ionicons } from '@expo/vector-icons'
import useSoundPlayback from 'components/hooks/useSoundPlayback'
import Tag from 'components/Tag'
import songs from 'constants/songs'
import SET_LIKE from 'gql/mutations/setLike'
import { MutationSetLikeArgs, SetLikeMutation, Song, Toggle } from 'gql/types'
import React from 'react'
import { Caption, Card, Colors, IconButton, Subheading, Text } from 'react-native-paper'

import { Listens, StyledCardActions, StyledDivider, TagsContainer } from './styled'

const SongInfoCard = (props: Song) => {
  const { artist, description, tags, listens, isLiked, audio, id } = props
  const { play, stop, isPlaying } = useSoundPlayback(songs[audio] || songs.BadDreamBaby)
  const [setLike, { data }] = useMutation<SetLikeMutation, MutationSetLikeArgs>(SET_LIKE)

  const isSongLiked = data ? data.setLike.isLiked : isLiked

  return (
    <Card elevation={1}>
      <Card.Content>
        <Subheading>by {artist}</Subheading>
        <Caption>{description}</Caption>
        <TagsContainer>
          {tags.map((tag, index) => (
            <Tag key={index} {...tag} />
          ))}
        </TagsContainer>
        <StyledDivider />
        <Listens>{listens.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</Listens>
        <Text>Monthly listens</Text>
        <StyledCardActions>
          <IconButton
            onPress={() => {
              const like = isSongLiked ? Toggle.Remove : Toggle.Add
              setLike({ variables: { songId: id, like } })
            }}
            icon={() => (
              <Ionicons
                name="md-heart"
                size={42}
                color={isSongLiked ? Colors.red400 : Colors.grey400}
              />
            )}
          />
          <IconButton
            icon={isPlaying ? 'stop' : 'play-circle-filled'}
            size={60}
            color={Colors.red200}
            style={{ width: 60, height: 60 }}
            onPress={isPlaying ? stop : play}
          ></IconButton>
        </StyledCardActions>
      </Card.Content>
    </Card>
  )
}

export default SongInfoCard
