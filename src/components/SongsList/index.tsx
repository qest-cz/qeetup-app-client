import { Song } from 'gql/types';
import React from 'react';
import { Card, List } from 'react-native-paper';

import { Thumbnail } from './styled';

interface Props {
  songs: Partial<Song>[]
  onSongClick: (song: Partial<Song>) => void
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
