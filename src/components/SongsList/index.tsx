import { Song } from 'gql/types'
import React from 'react'
import { View } from 'react-native'
import { Card, Colors, List } from 'react-native-paper'

import { Thumbnail } from './styled'

interface Props {
  songs: Song[]
  onSongClick: (song: Song) => void
}
const SongsList = ({ songs, onSongClick }: Props) => {
  return (
    <Card>
      <Card.Content>
        {songs.map(song => (
          <List.Item
            borderless={false}
            key={song.name}
            title={song.name}
            description={song.artist}
            right={props => <List.Icon {...props} icon="more-horiz" />}
            left={() => (
              <>
                <Thumbnail source={{ uri: song.cover }} />
                {!song.isSeen && (
                  <View
                    style={{
                      position: 'absolute',
                      height: 8,
                      width: 8,
                      borderRadius: 100,
                      backgroundColor: Colors.grey400,
                      top: -4,
                      left: -4,
                    }}
                  />
                )}
              </>
            )}
            onPress={() => onSongClick(song)}
          />
        ))}
      </Card.Content>
    </Card>
  )
}

export default SongsList
