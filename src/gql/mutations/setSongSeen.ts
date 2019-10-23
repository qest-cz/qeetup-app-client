import CompleteSong from 'gql/fragments/completeSong'
import gql from 'graphql-tag'

const SET_SONG_SEEN = gql`
  mutation SetSongSeen($songId: ID!) {
    setSongSeen(songId: $songId) @client {
      ...CompleteSong
    }
  }
  ${CompleteSong}
`
export default SET_SONG_SEEN
