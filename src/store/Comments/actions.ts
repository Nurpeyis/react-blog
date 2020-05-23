import { Action, ActionCreator } from "redux";

import { CommentsType } from "../../interfaces/store-interface";
import { addComment } from "../../api";

export enum CommentsActionTypes {
  FETCH_COMMENTS = "FETCH_COMMENTS",
  ADD_COMMENT = "ADD_COMMENT",
  SET_LOADER = "SET_COMMENT_LOADER",
}

export interface AddComment extends Action<CommentsActionTypes.ADD_COMMENT> {
  payload: CommentsType
}

export interface GetComments extends Action<CommentsActionTypes.FETCH_COMMENTS> {
  payload: CommentsType[]
}

export const addNewComment = (comment: Omit<CommentsType, 'id'>) => async (dispatch: ActionCreator<AddComment>) => {
  dispatch({
    type: CommentsActionTypes.SET_LOADER,
    payload: true
  });

  try {
    const response = await addComment(comment);

    dispatch({
      type: CommentsActionTypes.ADD_COMMENT,
      payload: response.data
    });
  } catch (error) {
  }

  dispatch({
    type: CommentsActionTypes.SET_LOADER,
    payload: false
  });
}

export const getComments: ActionCreator<GetComments> = (comments: CommentsType[]) => ({
  type: CommentsActionTypes.FETCH_COMMENTS,
  payload: comments
})
