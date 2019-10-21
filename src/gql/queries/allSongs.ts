import CompleteSong from 'gql/fragments/completeSong'
import gql from 'graphql-tag'

const All_SONGS = gql`
  query AllSongs {
    songs {
      ...CompleteSong
    }
  }
  ${CompleteSong}
`
export default All_SONGS
