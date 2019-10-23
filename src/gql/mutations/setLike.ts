import CompleteSong from 'gql/fragments/completeSong'
import gql from 'graphql-tag'

const SET_LIKE = gql`
  mutation SetLike($songId: ID!, $like: Toggle!) {
    setLike(songId: $songId, like: $like) {
      ...CompleteSong
    }
  }
  ${CompleteSong}
`
export default SET_LIKE
