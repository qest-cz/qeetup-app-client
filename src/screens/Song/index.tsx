import CommentsList from 'components/CommentsList'
import SongInfoCard from 'components/SongInfoCard'
import theme from 'constants/theme'
import { Song as Props } from 'constants/types'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { IconButton } from 'react-native-paper'
import { NavigationInjectedProps } from 'react-navigation'

import { AddCommentInput, BackArrowContainer, CommentsHeader, CoverImage, OffsetCardContainer, SongName } from './styled'

const Song = ({
  navigation: {
    goBack,
    state: { params: song },
  },
}: NavigationInjectedProps<Props>) => {
  const { name, cover, comments } = song

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: theme.colors.background }}>
      <BackArrowContainer>
        <IconButton size={40} onPress={() => goBack()} icon="arrow-back" />
      </BackArrowContainer>
      <CoverImage source={{ uri: cover }} />
      <OffsetCardContainer>
        <SongName>{name}</SongName>
        <SongInfoCard {...song} />
        <CommentsHeader>Comments ({(comments && comments.length) || 0})</CommentsHeader>
        <CommentsList comments={comments} />
        <AddCommentInput
          mode="outlined"
          label="Tell your opinion"
          keyboardAppearance="dark"
          returnKeyType="done"
          enablesReturnKeyAutomatically={true}
          onSubmitEditing={console.log}
        />
      </OffsetCardContainer>
    </KeyboardAwareScrollView>
  )
}

export default Song
