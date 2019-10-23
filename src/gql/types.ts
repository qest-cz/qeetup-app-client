export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** Integers that will have a value of 0 or more. */
  NonNegativeInt: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};



export type ArtistUser = User & {
  __typename?: 'ArtistUser',
  name: Scalars['String'],
  avatar: Scalars['String'],
  isArtist?: Maybe<Scalars['Boolean']>,
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

export type CommentInput = {
  user: UserInput,
  text: Scalars['String'],
};

export type Mutation = {
  __typename?: 'Mutation',
  setLike: Song,
  addComment: Song,
  setSongSeen?: Maybe<Song>,
};


export type MutationSetLikeArgs = {
  songId: Scalars['ID'],
  like: Toggle
};


export type MutationAddCommentArgs = {
  songId: Scalars['ID'],
  comment: CommentInput
};


export type MutationSetSongSeenArgs = {
  songId: Scalars['ID']
};


export type Query = {
  __typename?: 'Query',
  songs: Array<Song>,
  search: Array<Song>,
};


export type QuerySearchArgs = {
  name: Scalars['String']
};

export type RegularUser = User & {
  __typename?: 'RegularUser',
  name: Scalars['String'],
  avatar: Scalars['String'],
  isArtist?: Maybe<Scalars['Boolean']>,
};

export type Song = {
  __typename?: 'Song',
  id: Scalars['ID'],
  name: Scalars['String'],
  artist: Scalars['String'],
  cover: Scalars['String'],
  description: Scalars['String'],
  listens: Scalars['NonNegativeInt'],
  tags: Array<Tag>,
  audio?: Maybe<Scalars['String']>,
  isLiked?: Maybe<Scalars['Boolean']>,
  comments?: Maybe<Array<Comment>>,
  isSeen: Scalars['Boolean'],
};

export type Subscription = {
  __typename?: 'Subscription',
  commentAdded: Comment,
  listens: Scalars['NonNegativeInt'],
};


export type SubscriptionCommentAddedArgs = {
  songId: Scalars['ID']
};


export type SubscriptionListensArgs = {
  songId: Scalars['ID']
};

export type Tag = {
  __typename?: 'Tag',
  value: Scalars['String'],
  isImportant?: Maybe<Scalars['Boolean']>,
};

export enum Toggle {
  Add = 'ADD',
  Remove = 'REMOVE'
}


export type User = {
  name: Scalars['String'],
  avatar: Scalars['String'],
  isArtist?: Maybe<Scalars['Boolean']>,
};

export type UserInput = {
  name: Scalars['String'],
  avatar: Scalars['String'],
  isArtist?: Maybe<Scalars['Boolean']>,
};

export type CompleteSongFragment = ({ __typename?: 'Song' } & Pick<Song, 'isSeen' | 'id' | 'name' | 'artist' | 'audio' | 'cover' | 'description' | 'isLiked' | 'listens'> & { comments: Maybe<Array<({ __typename?: 'Comment' } & Pick<Comment, 'text'> & { user: ({ __typename?: 'ArtistUser' | 'RegularUser' } & Pick<User, 'avatar' | 'isArtist' | 'name'>) })>>, tags: Array<({ __typename?: 'Tag' } & Pick<Tag, 'isImportant' | 'value'>)> });

export type AddCommentMutationVariables = {
  songId: Scalars['ID'],
  comment: CommentInput
};


export type AddCommentMutation = ({ __typename?: 'Mutation' } & { addComment: ({ __typename?: 'Song' } & CompleteSongFragment) });

export type SetLikeMutationVariables = {
  songId: Scalars['ID'],
  like: Toggle
};


export type SetLikeMutation = ({ __typename?: 'Mutation' } & { setLike: ({ __typename?: 'Song' } & CompleteSongFragment) });

export type SetSongSeenMutationVariables = {
  songId: Scalars['ID']
};


export type SetSongSeenMutation = ({ __typename?: 'Mutation' } & { setSongSeen: Maybe<({ __typename?: 'Song' } & CompleteSongFragment)> });

export type AllSongsQueryVariables = {};


export type AllSongsQuery = ({ __typename?: 'Query' } & { songs: Array<({ __typename?: 'Song' } & CompleteSongFragment)> });

export type SearchQueryVariables = {
  name: Scalars['String']
};


export type SearchQuery = ({ __typename?: 'Query' } & { search: Array<({ __typename?: 'Song' } & CompleteSongFragment)> });

export type OnCommentAddedSubscriptionVariables = {
  songId: Scalars['ID']
};


export type OnCommentAddedSubscription = ({ __typename?: 'Subscription' } & { commentAdded: ({ __typename?: 'Comment' } & Pick<Comment, 'text'> & { user: ({ __typename?: 'ArtistUser' | 'RegularUser' } & Pick<User, 'avatar' | 'name' | 'isArtist'>) }) });
