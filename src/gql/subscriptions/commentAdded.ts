import gql from 'graphql-tag'

const ON_COMMENT_ADDED = gql`
  subscription OnCommentAdded($songId: ID!) {
    commentAdded(songId: $songId) {
      text
      user {
        avatar
        name
        isArtist
      }
    }
  }
`
export default ON_COMMENT_ADDED
