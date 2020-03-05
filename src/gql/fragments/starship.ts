import gql from 'graphql-tag'

export const ListStarship = gql`
  fragment ListStarship on Starship {
    name
    class
    id
  }
`

export const StarshipDetail = gql`
  fragment StarshipDetail on Starship {
    name
    class
    id
    class
    costInCredits
    createdAt
    crew
    hyperdriveRating
    length
    manufacturer
    mglt
  }
`
