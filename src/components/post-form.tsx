import React, { ChangeEvent, FormEvent } from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

import { PostType, RootState } from '../interfaces/store-interface';

interface Props {
  initialState?: Omit<PostType, 'author'> | null;
  onSubmit: (post: Omit<PostType, 'id' | 'author'>) => void;
}

const PostForm: React.FC<Props> = ({ initialState, onSubmit }) => {
  const isLoading: boolean = useSelector(
    (state: RootState) => state.posts.loader
  );

  const [state, setState] = React.useState({ title: '', body: '' });

  React.useEffect(() => {
    if (initialState) {
      setState({
        title: initialState.title,
        body: initialState.body,
      });
    }
  }, [initialState]);

  const onChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const submitHandle = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(state);
  };

  return (
    <FormWrapper>
      <form onSubmit={submitHandle}>
        <FormElement>
          <Input
            type="text"
            name="title"
            onChange={onChange}
            value={state.title}
            placeholder="Post title"
            required
          />
        </FormElement>

        <FormElement>
          <TextArea
            name="body"
            onChange={onChange}
            value={state.body}
            placeholder="Post content"
            rows={6}
            required
          />
        </FormElement>

        <FormElement>
          <Button
            type="submit"
            disabled={isLoading || !state.title.length || !state.body.length}
          >
            {isLoading ? 'Saving...' : 'Save'}
          </Button>
        </FormElement>
      </form>
    </FormWrapper>
  );
};

export default PostForm;

const FormWrapper = styled.div`
  max-width: 600px;
`;

const FormElement = styled.div`
  display: flex;
  margin: 0.5rem 0;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  outline: none;
  font-size: 1rem;
  width: 100%;
`;

const TextArea = styled.textarea`
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  outline: none;
  font-size: 1rem;
  width: 100%;
`;

const Button = styled.button`
  border: 1px solid #007bff;
  background-color: #007bff;
  color: white;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;

  &:hover,
  &:disabled {
    background-color: rgba(0, 123, 255, 0.5);
    border-color: rgba(0, 123, 255, 0.5);
  }
`;
