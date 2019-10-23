import { MockedResponse } from '@apollo/react-testing'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { DocumentNode, split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import Constants from 'expo-constants'

import ALL_SONGS from './queries/allSongs'
import typeDefs from './schema'
import { Song } from './types'

const { manifest } = Constants

const httpUri = `http://${manifest.debuggerHost.split(':').shift()}:4000`
const wsUri = `ws://${manifest.debuggerHost.split(':').shift()}:4000/graphql`

export interface ApolloMock<R, I> extends MockedResponse {
  request: {
    query: DocumentNode
    variables?: I
    operationName?: string
    context?: Record<string, any>
    extensions?: Record<string, any>
  }
  result?: { data: R }
}

const wsLink = new WebSocketLink({
  uri: wsUri,
  options: {
    reconnect: true,
  },
})

const httpLink = new HttpLink({ uri: httpUri })

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query)

    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
  },
  wsLink,
  httpLink,
)

const cache = new InMemoryCache()

cache.writeData({
  data: {
    seenSongs: [],
  },
})

export const client = new ApolloClient({
  link,
  cache,
  resolvers: {
    Song: {
      isSeen: (song: Song) => {
        return song.isSeen || false
      },
    },
    Mutation: {
      setSongSeen: (_, variables, { cache }): Song => {
        const { songs } = cache.readQuery({ query: ALL_SONGS })
        const song = songs.find(({ id }) => id === variables.songId)
        return { ...song, isSeen: true }
      },
    },
  },
  typeDefs,
})
