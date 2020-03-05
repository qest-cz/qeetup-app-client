import { ListStarship } from 'gql/fragments/starship'
import gql from 'graphql-tag'

export const ALL_STARSHIP_LIST = gql`
  query AllStarshipsList {
    allStarships {
      ...ListStarship
    }
  }
  ${ListStarship}
`
