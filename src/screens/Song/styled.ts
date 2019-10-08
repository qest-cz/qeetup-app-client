import { Image, View } from 'react-native'
import { Text, TextInput } from 'react-native-paper'
import styled from 'styled-components'

export const BackArrowContainer = styled(View)`
  z-index: 2;
  position: absolute;
  top: 30;
  width: 100%;
`

export const CoverImage = styled(Image)`
  width: 100%;
  height: 400;
`
export const OffsetCardContainer = styled(View)`
  padding-left: 20;
  padding-right: 20;
  padding-bottom: 20;
  padding-top: 0;
  margin-top: -120;
`
export const SongName = styled(Text)`
  margin-bottom: 10;
  font-size: 35;
  font-weight: bold;
`

export const CommentsHeader = styled(Text)`
  font-size: 20;
  font-weight: bold;
  margin-bottom: 20;
  color: ${({ theme }) => theme.colors.accent};
  margin-top: 20;
`

export const AddCommentInput = styled(TextInput)`
  margin-bottom: 20;
`
