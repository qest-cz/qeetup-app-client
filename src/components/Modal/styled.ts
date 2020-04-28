import { View } from 'react-native'
import { Surface } from 'react-native-paper'
import styled from 'styled-components'

export const StyledModal = styled(Surface)`
  flex: 1;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 20px;
`
export const HandleContainer = styled(View)`
  justify-content: center;
  align-items: center;
  height: 30px;
`

export const Handle = styled(Surface)`
  height: 8px;
  width: 50px;
  border-radius: 50px;
`
