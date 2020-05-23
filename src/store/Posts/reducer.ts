import { RootState } from "../../interfaces/store-interface";
import { PostsActionTypes } from './actions';

const initialState: RootState['posts'] = {
  posts: [],
  post: null,
  loader: false
};

export const postsReducer = (state: RootState['posts'] = initialState, action: any) => {
  switch (action.type) {
    case PostsActionTypes.CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] }

    case PostsActionTypes.FETCH_POSTS:
      return { ...state, posts: action.payload }

    case PostsActionTypes.FETCH_POST_DETAIL:
      return { ...state, post: action.payload }

    case PostsActionTypes.SET_LOADER:
      return { ...state, loader: action.payload }

    default:
      return state;
  }
}