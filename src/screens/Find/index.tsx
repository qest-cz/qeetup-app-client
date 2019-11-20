import { useLazyQuery } from '@apollo/react-hooks';
import SongsList from 'components/SongsList';
import Constants from 'expo-constants';
import SEARCH_SONG from 'gql/queries/searchSong';
import { QuerySearchArgs, SearchQuery, Song } from 'gql/types';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Headline, TextInput } from 'react-native-paper';
import { NavigationInjectedProps } from 'react-navigation';
import { PlaylistHeader } from 'screens/Playlists/styled';

import { NotFoundContainer } from './styled';

const Find = ({ navigation: { navigate } }: NavigationInjectedProps) => {
  const handleSongClick = (song: Song) =>
    navigate({ routeName: 'Song', params: { songId: song.id } })
  const [search, { data }] = useLazyQuery<SearchQuery, QuerySearchArgs>(SEARCH_SONG)

  const didFound = data && data.search.length > 0
  return (
    <SafeAreaView style={{ marginTop: Constants.statusBarHeight, flex: 1 }}>
      <View style={{ padding: 10, flex: 1, height: '100%' }}>
        <TextInput
          placeholder="Search for song"
          keyboardAppearance="dark"
          returnKeyType="done"
          mode="outlined"
          onSubmitEditing={({ nativeEvent: { text } }) => {
            search({ variables: { name: text } })
          }}
        />
        {data && (
          <>
            <PlaylistHeader>What we found</PlaylistHeader>
            {didFound && <SongsList songs={data.search} onSongClick={handleSongClick} />}
            {!didFound && (
              <NotFoundContainer>
                <Headline>Nothing 😢</Headline>
              </NotFoundContainer>
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  )
}

export default Find
