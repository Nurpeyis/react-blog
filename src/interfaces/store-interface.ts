
export interface PostType {
  id: number
  title: string
  author: string
  body: string
}

export interface CommentsType {
  id: number
  body: string
  postId: number
}

export interface SinglePostType extends PostType {
  comments: CommentsType[]
}

export interface RootState {
  posts: {
    posts: PostType[]
    post: SinglePostType | null
    loader: boolean
  },
  comments: {
    comments: CommentsType[]
    loader: boolean
  }
}