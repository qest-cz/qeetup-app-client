import gql from 'graphql-tag';

export const ALL_STARSHIP_LIST = gql`
  query AllStarshipsList {
    allStarships {
      name
      class
      id
      manufacturer
      costInCredits
    }
  }
`
