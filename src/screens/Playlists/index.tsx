import SongsList from 'components/SongsList'
import { Song } from 'constants/types'
import React from 'react'
import { NavigationInjectedProps } from 'react-navigation'

import data from '../../data'
import { Container, PlaylistHeader, StyledSafeView } from './styled'

const likedSongs = data.filter(song => song.isLiked)
const discover = data.filter(song => !song.isLiked)

const Playlists = ({ navigation: { navigate } }: NavigationInjectedProps) => {
  const handleSongClick = (song: Song) => navigate({ routeName: 'Song', params: song })
  return (
    <StyledSafeView>
      <Container>
        <PlaylistHeader>Songs you love</PlaylistHeader>
        <SongsList songs={likedSongs} onSongClick={handleSongClick} />
        <PlaylistHeader>Discover</PlaylistHeader>
        <SongsList songs={discover} onSongClick={handleSongClick} />
      </Container>
    </StyledSafeView>
  )
}

export default Playlists
