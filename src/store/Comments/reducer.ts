import { RootState } from "../../interfaces/store-interface";
import { CommentsActionTypes } from './actions';

const initialState: RootState['comments'] = {
  comments: [],
  loader: false
};

export const commentsReducer = (state: RootState['comments'] = initialState, action: any) => {
  switch (action.type) {
    case CommentsActionTypes.FETCH_COMMENTS:
      return { ...state, comments: action.payload }

    case CommentsActionTypes.ADD_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] }

    case CommentsActionTypes.SET_LOADER:
      return { ...state, loader: action.payload }

    default:
      return state;
  }
}