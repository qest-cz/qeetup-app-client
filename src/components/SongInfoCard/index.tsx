import { Ionicons } from '@expo/vector-icons'
import Tag from 'components/Tag'
import { Song } from 'constants/types'
import { Audio } from 'expo-av'
import React, { useEffect, useRef, useState } from 'react'
import { Caption, Card, Colors, IconButton, Subheading, Text } from 'react-native-paper'

import { Listens, StyledCardActions, StyledDivider, TagsContainer } from './styled'

const SongInfoCard = ({ artist, description, tags, listens, isLiked }: Song) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const soundObject = useRef(null)

  useEffect(() => {
    const initSong = async () => {
      const result = await Audio.Sound.createAsync(require('../../../assets/BadDreamBaby.mp3'), {
        shouldPlay: false,
      })
      soundObject.current = result
    }

    initSong()

    return () => {
      soundObject.current.sound.unloadAsync()
    }
  }, [])

  const togglePlaySong = async () => {
    try {
      if (isPlaying) {
        await soundObject.current.sound.stopAsync()
        return setIsPlaying(false)
      }

      if (soundObject.current.status.isLoaded) {
        await soundObject.current.sound.playAsync()
        setIsPlaying(true)
      }
    } catch (error) {}
  }

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
            onPress={togglePlaySong}
          ></IconButton>
        </StyledCardActions>
      </Card.Content>
    </Card>
  )
}

export default SongInfoCard
