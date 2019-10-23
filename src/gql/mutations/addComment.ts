import CompleteSong from 'gql/fragments/completeSong'
import gql from 'graphql-tag'

const ADD_COMMENT = gql`
  mutation AddComment($songId: ID!, $comment: CommentInput!) {
    addComment(songId: $songId, comment: $comment) {
      ...CompleteSong
    }
  }
  ${CompleteSong}
`
export default ADD_COMMENT
