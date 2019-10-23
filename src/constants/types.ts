export interface User {
  name: string
  avatar: string
  isArtist?: Boolean
}

export interface Comment {
  user: User
  text: string
}

export interface Song {
  id: string
  name: string
  artist: string
  cover: string
  song?: string
  description: string
  listens: number
  tags: Tag[]
  isLiked?: Boolean
  comments?: Comment[]
}

export interface Tag {
  value: string
  isImportant?: Boolean
}
