import React, { ChangeEvent, FormEvent } from 'react'
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';

import { CommentsType, RootState } from '../interfaces/store-interface';
import { addNewComment } from '../store/Comments/actions';

export const CommentForm: React.FC<{id: number}> = ({ id }) => {
  const isLoading: boolean = useSelector(
    (state: RootState) => state.comments.loader
  );
  const dispatch = useDispatch();
  const [commentText, setComment] = React.useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setComment(e.target.value);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const comment: Omit<CommentsType, 'id'> = { postId: id, body: commentText };
    dispatch(addNewComment(comment));
    setComment('');
  };

  return (
    <FormWrapper>
      <form onSubmit={submitHandler}>
        <FormBody>
          <Input
            type="text"
            name="comment"
            onChange={onChange}
            value={commentText}
            placeholder="Type comment ..."
            required
          />
          <Button
            type="submit"
            disabled={!commentText.trim().length || isLoading}
          >
            {isLoading ? 'Sending' : 'Send'}
          </Button>
        </FormBody>
      </form>
    </FormWrapper>
  );
};

export default CommentForm;

const FormWrapper = styled.div`
  margin: 1rem 0 2rem;
`;

const FormBody = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: .5rem;
  padding: .5rem 1rem;
  outline: none;
  flex: 1;
  font-size: 1rem;
`;

const Button = styled.button`
  border: 1px solid #007bff;
  background-color: #007bff;
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  outline: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover,
  &:disabled {
    background-color: rgba(0, 123, 255, 0.5);
    border-color: rgba(0, 123, 255, 0.5);
  }
`;
