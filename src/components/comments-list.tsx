import React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux';

import { CommentsType, RootState } from '../interfaces/store-interface'

const CommentsList:React.FC = () => {
  const comments: CommentsType[] = useSelector(
    (state: RootState) => state.comments.comments
  );

  return (
    <ListWrap>
      {comments.map(comment => <CommentWrap key={comment.id}>{comment.body}</CommentWrap>)}
    </ListWrap>
  )
}

export default CommentsList

const ListWrap = styled.div`
  margin: 1rem 0;
`;

const CommentWrap = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: .5rem 1rem;
  margin: .5rem 0;
`;
