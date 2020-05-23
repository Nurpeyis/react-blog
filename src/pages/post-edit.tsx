import React from 'react';
import { useParams } from 'react-router-dom';

import PostForm from '../components/post-form';
import { editPost } from '../store/Posts/actions';
import { PostType } from '../interfaces/store-interface';
import useGetPostDetail from '../hooks/useGetPostDetail';

const PostEdit: React.FC = () => {
  const { id } = useParams();
  const { post, dispatch } = useGetPostDetail(id);

  const onSubmit = (post: Omit<PostType, 'id' | 'author'>) =>
    dispatch(editPost({...post, id}));

  return (
    <div>
      <h1>Edit Post</h1>

      <PostForm onSubmit={onSubmit} initialState={post} />
    </div>
  );
};

export default PostEdit;
