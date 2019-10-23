import CompleteSong from 'gql/fragments/completeSong'
import gql from 'graphql-tag'

const SEARCH_SONG = gql`
  query Search($name: String!) {
    search(name: $name) {
      ...CompleteSong
    }
  }
  ${CompleteSong}
`
export default SEARCH_SONG
