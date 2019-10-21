import { MockedResponse } from '@apollo/react-testing'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { DocumentNode } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'

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

const link = new HttpLink({ uri: 'http://localhost:4000/' })
const cache = new InMemoryCache()

export const client = new ApolloClient({
  link,
  cache,
})
