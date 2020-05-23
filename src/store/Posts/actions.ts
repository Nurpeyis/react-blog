import { Action, ActionCreator } from "redux";

import { PostType, SinglePostType } from "../../interfaces/store-interface";
import { CommentsActionTypes } from "../Comments/actions";
import { getPosts, getPostDetail, createPost, updatePost } from "../../api";
import { history } from "../../history";

export enum PostsActionTypes {
  FETCH_POSTS = "FETCH_POSTS",
  FETCH_POST_DETAIL = "FETCH_POST_DETAIL",
  CREATE_POST = "CREATE_POST",
  SET_LOADER = "SET_LOADER",
}

export interface CreatePost extends Action<PostsActionTypes.CREATE_POST> {
  payload: PostType
}

export interface GetPosts extends Action<PostsActionTypes.FETCH_POSTS> {
  payload: PostType[]
}

export interface GetPostDetail extends Action<PostsActionTypes.FETCH_POST_DETAIL> {
  payload: SinglePostType
}

// Fetch All Posts
export const fetchPosts = () => async (dispatch: ActionCreator<GetPosts>) => {
  dispatch({
    type: PostsActionTypes.SET_LOADER,
    payload: true
  });

  try {
    const response = await getPosts();

    dispatch({
      type: PostsActionTypes.FETCH_POSTS,
      payload: response.data
    });
  } catch (error) {
  }

  dispatch({
    type: PostsActionTypes.SET_LOADER,
    payload: false
  });
}

// Fetch Single Post
export const fetchPostDetail = (id: number) => async (dispatch: ActionCreator<GetPostDetail>) => {
  dispatch({
    type: PostsActionTypes.SET_LOADER,
    payload: true
  });

  try {
    const response = await getPostDetail(id);

    dispatch({
      type: PostsActionTypes.FETCH_POST_DETAIL,
      payload: response.data
    });

    // Storing Comments Separate From Post
    dispatch({
      type: CommentsActionTypes.FETCH_COMMENTS,
      payload: response.data.comments
    });
  } catch (error) {
  }

  dispatch({
    type: PostsActionTypes.SET_LOADER,
    payload: false
  });
}

// Create New Post
export const addPost = (post: Omit<PostType, 'id' | 'author'>) => async (dispatch: ActionCreator<CreatePost>) => {
  dispatch({
    type: PostsActionTypes.SET_LOADER,
    payload: true
  });

  try {
    const response = await createPost(post);

    dispatch({
      type: PostsActionTypes.CREATE_POST,
      payload: response.data
    });

    history.push('/')
  } catch (error) {
  }

  dispatch({
    type: PostsActionTypes.SET_LOADER,
    payload: false
  });
}

// Edit Post
export const editPost = (post: Omit<PostType, 'author'>) => async (dispatch: ActionCreator<CreatePost>) => {
  dispatch({
    type: PostsActionTypes.SET_LOADER,
    payload: true
  });

  try {
    const response = await updatePost(post);

    dispatch({
      type: PostsActionTypes.CREATE_POST,
      payload: response.data
    });

    history.push(`/posts/${post.id}`)
  } catch (error) {
  }

  dispatch({
    type: PostsActionTypes.SET_LOADER,
    payload: false
  });
}