import { Ionicons } from '@expo/vector-icons'
import useSoundPlayback from 'components/hooks/useSoundPlayback'
import Tag from 'components/Tag'
import songs from 'constants/songs'
import { Song } from 'constants/types'
import React, { useEffect, useRef, useState } from 'react'
import { Caption, Card, Colors, IconButton, Subheading, Text } from 'react-native-paper'

import { Listens, StyledCardActions, StyledDivider, TagsContainer } from './styled'

const SongInfoCard = ({ artist, description, tags, listens, isLiked, song }: Song) => {
  const { play, stop, isPlaying } = useSoundPlayback(songs[song] || songs.BadDreamBaby)

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
            icon={() => (
              <Ionicons
                name="md-heart"
                size={42}
                color={isLiked ? Colors.red400 : Colors.grey400}
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
