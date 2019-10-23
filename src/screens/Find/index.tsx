import { useLazyQuery } from '@apollo/react-hooks'
import SongsList from 'components/SongsList'
import Constants from 'expo-constants'
import SEARCH_SONG from 'gql/queries/searchSong'
import { QuerySearchArgs, SearchQuery, Song } from 'gql/types'
import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { TextInput } from 'react-native-paper'
import { NavigationInjectedProps } from 'react-navigation'
import { PlaylistHeader } from 'screens/Playlists/styled'

const Find = ({ navigation: { navigate } }: NavigationInjectedProps) => {
  const handleSongClick = (song: Song) => navigate({ routeName: 'Song', params: song })
  const [search, { data }] = useLazyQuery<SearchQuery, QuerySearchArgs>(SEARCH_SONG)
  return (
    <SafeAreaView style={{ marginTop: Constants.statusBarHeight, flex: 1 }}>
      <View style={{ padding: 10, flex: 1, height: '100%' }}>
        <TextInput
          placeholder="Search for song"
          mode="outlined"
          onSubmitEditing={({ nativeEvent: { text } }) => {
            search({ variables: { name: text } })
          }}
        />
        {data && (
          <>
            <PlaylistHeader>What we found</PlaylistHeader>
            <SongsList songs={data.search} onSongClick={handleSongClick} />
          </>
        )}
      </View>
    </SafeAreaView>
  )
}

export default Find
