import Comment from 'components/Comment'
import { Comment as CommentType } from 'constants/types'
import React from 'react'
import { Paragraph } from 'react-native-paper'

interface Props {
  comments: CommentType[]
}
const CommentsList = ({ comments }: Props) => {
  return (
    <>
      {comments && (
        <>
          {comments.map((comment, index) => (
            <Comment key={index} {...comment} />
          ))}
        </>
      )}
      {(!comments || comments.length === 0) && (
        <Paragraph style={{ marginBottom: 20 }}>
          Nobody commented just yet. You can be the first to do so!
        </Paragraph>
      )}
    </>
  )
}

export default CommentsList
