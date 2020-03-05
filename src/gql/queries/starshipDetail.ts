import { StarshipDetail } from 'gql/fragments/starship'
import gql from 'graphql-tag'

export const STARSHIP_DETAIL = gql`
  query StarshipDetail($id: ID, $name: String) {
    Starship(id: $id, name: $name) {
      ...StarshipDetail
    }
  }
  ${StarshipDetail}
`
