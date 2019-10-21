import { useQuery } from '@apollo/react-hooks'
import SongsList from 'components/SongsList'
import { Song } from 'constants/types'
import All_SONGS from 'gql/queries/allSongs'
import { AllSongsQuery } from 'gql/types'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { NavigationInjectedProps } from 'react-navigation'

import { Container, PlaylistHeader, StyledSafeView } from './styled'

const Playlists = ({ navigation: { navigate } }: NavigationInjectedProps) => {
  const { data, loading } = useQuery<AllSongsQuery>(All_SONGS)
  const handleSongClick = (song: Song) => navigate({ routeName: 'Song', params: song })

  if (loading) return <ActivityIndicator />

  const likedSongs = data.songs.filter(song => song.isLiked)
  const discover = data.songs.filter(song => !song.isLiked)

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
