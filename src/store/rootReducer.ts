import { combineReducers } from "redux";

import { postsReducer } from "./Posts/reducer";
import { commentsReducer } from './Comments/reducer'

export const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer
});