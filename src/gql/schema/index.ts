import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Mutation {
    setSongSeen(songId: ID!): Song
  }
`

export default typeDefs
