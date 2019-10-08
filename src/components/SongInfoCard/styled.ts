import { View } from 'react-native'
import { Card, Divider, Text } from 'react-native-paper'
import styled from 'styled-components'

export const TagsContainer = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 20;
  flex-wrap: wrap;
`

export const StyledDivider = styled(Divider)`
  margin-top: 10;
  margin-bottom: 10;
`
export const Listens = styled(Text)`
  font-weight: bold;
  font-size: 40;
`

export const StyledCardActions = styled(Card.Actions)`
  justify-content: space-between;
`
