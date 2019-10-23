import { useMutation, useSubscription } from '@apollo/react-hooks'
import CommentsList from 'components/CommentsList'
import SongInfoCard from 'components/SongInfoCard'
import theme from 'constants/theme'
import ADD_COMMENT from 'gql/mutations/addComment'
import ADD_SEEN_SOMG from 'gql/mutations/setSongSeen'
import ALL_SONGS from 'gql/queries/allSongs'
import ON_COMMENT_ADDED from 'gql/subscriptions/commentAdded'
import {
  AddCommentMutation,
  AllSongsQuery,
  MutationAddCommentArgs,
  MutationSetSongSeenArgs,
  OnCommentAddedSubscription,
  SetSongSeenMutation,
  Song as Props,
  SubscriptionCommentAddedArgs,
  User,
} from 'gql/types'
import React, { useEffect, useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { IconButton } from 'react-native-paper'
import { NavigationInjectedProps } from 'react-navigation'

import { AddCommentInput, BackArrowContainer, CommentsHeader, CoverImage, OffsetCardContainer, SongName } from './styled'

const user: User = {
  avatar:
    'https://scontent-prg1-1.xx.fbcdn.net/v/t1.0-9/20431595_10207638564602756_226176742352177248_n.jpg?_nc_cat=103&_nc_oc=AQmXgMwvNKTcjl_QhXhzpIOL_rzrXzZsVjbRKAa8nxKnIIbXvA4CVGXg8dRHRHzah6X7KcJZxQRqlo370lBJBOek&_nc_ht=scontent-prg1-1.xx&oh=8ed27ac6490a7363dedefd6b06ea1fc5&oe=5E564295',
  name: 'Pepa',
  isArtist: false,
}

const Song = ({
  navigation: {
    goBack,
    state: { params: song },
  },
}: NavigationInjectedProps<Props>) => {
  const { name, cover, comments: initialComments, id, isSeen } = song
  const [comments, setComments] = useState(initialComments || [])

  const [addComment] = useMutation<AddCommentMutation, MutationAddCommentArgs>(ADD_COMMENT)
  const [setSongSeen] = useMutation<SetSongSeenMutation, MutationSetSongSeenArgs>(ADD_SEEN_SOMG, {
    variables: { songId: id },
  })

  useEffect(() => {
    if (!isSeen) setSongSeen()
  }, [isSeen])

  useSubscription<OnCommentAddedSubscription, SubscriptionCommentAddedArgs>(ON_COMMENT_ADDED, {
    variables: {
      songId: id,
    },
    onSubscriptionData: ({ subscriptionData: { data }, client }) => {
      const newComments = [...comments, data.commentAdded]
      setComments(newComments)
      const { songs } = client.readQuery<AllSongsQuery>({ query: ALL_SONGS })

      client.writeQuery({
        query: ALL_SONGS,
        data: {
          songs: songs.map(song => {
            if (song.id === id) return { ...song, comments: newComments }
            return song
          }),
        },
      })
    },
  })

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
          onSubmitEditing={({ nativeEvent: { text } }) => {
            addComment({
              variables: {
                songId: id,
                comment: {
                  text,
                  user,
                },
              },
            })
          }}
        />
      </OffsetCardContainer>
    </KeyboardAwareScrollView>
  )
}

export default Song
