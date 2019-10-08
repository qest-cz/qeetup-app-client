import theme from 'constants/theme'
import { Comment as CommentProps } from 'constants/types'
import React from 'react'
import { Avatar, Card, Text, withTheme } from 'react-native-paper'

import { StyledCard } from './styled'

interface Props extends CommentProps {
  theme: typeof theme
}

const Comment = ({ user: { avatar, name, isArtist }, text, theme }: Props) => {
  return (
    <StyledCard elevation={1}>
      <Card.Title
        title={name}
        subtitle={isArtist && 'Artist'}
        subtitleStyle={{ color: theme.colors.accent }}
        left={props => (
          <Avatar.Image
            {...props}
            source={{
              uri: avatar,
            }}
          />
        )}
      />
      <Card.Content>
        <Text>{text}</Text>
      </Card.Content>
    </StyledCard>
  )
}

export default withTheme(Comment)
