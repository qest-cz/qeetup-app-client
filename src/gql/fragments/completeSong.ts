import gql from 'graphql-tag'

const CompleteSong = gql`
  fragment CompleteSong on Song {
    isSeen @client
    id
    name
    artist
    audio
    comments {
      text
      user {
        avatar
        isArtist
        name
      }
    }
    cover
    description
    isLiked
    listens
    tags {
      isImportant
      value
    }
  }
`
export default CompleteSong
