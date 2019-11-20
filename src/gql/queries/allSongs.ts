import CompleteSong from 'gql/fragments/completeSong';
import gql from 'graphql-tag';

const ALL_SONGS = gql`
  query AllSongs {
    songs {
      ...CompleteSong
    }
  }
  ${CompleteSong}
`
export default ALL_SONGS
