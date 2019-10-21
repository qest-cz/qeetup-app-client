export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Comment = {
  __typename?: 'Comment',
  user: User,
  text: Scalars['String'],
};

export type Query = {
  __typename?: 'Query',
  songs: Array<Song>,
};

export type Song = {
  __typename?: 'Song',
  name: Scalars['String'],
  artist: Scalars['String'],
  cover: Scalars['String'],
  description: Scalars['String'],
  listens: Scalars['Int'],
  tags: Array<Tag>,
  audio?: Maybe<Scalars['String']>,
  isLiked?: Maybe<Scalars['Boolean']>,
  comments?: Maybe<Array<Comment>>,
};

export type Tag = {
  __typename?: 'Tag',
  value: Scalars['String'],
  isImportant?: Maybe<Scalars['Boolean']>,
};


export type User = {
  __typename?: 'User',
  name: Scalars['String'],
  avatar: Scalars['String'],
  isArtist?: Maybe<Scalars['Boolean']>,
};

export type CompleteSongFragment = ({ __typename?: 'Song' } & Pick<Song, 'name' | 'artist' | 'audio' | 'cover' | 'description' | 'isLiked' | 'listens'> & { comments: Maybe<Array<({ __typename?: 'Comment' } & Pick<Comment, 'text'> & { user: ({ __typename?: 'User' } & Pick<User, 'avatar' | 'isArtist' | 'name'>) })>>, tags: Array<({ __typename?: 'Tag' } & Pick<Tag, 'isImportant' | 'value'>)> });

export type AllSongsQueryVariables = {};


export type AllSongsQuery = ({ __typename?: 'Query' } & { songs: Array<({ __typename?: 'Song' } & CompleteSongFragment)> });
