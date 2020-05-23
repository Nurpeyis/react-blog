import React from 'react';
import { useDispatch } from 'react-redux';

import PostForm from '../components/post-form';
import { addPost } from '../store/Posts/actions';
import { PostType } from '../interfaces/store-interface';

const PostCreate: React.FC = () => {
  const dispatch = useDispatch();

  const onSubmit = (post: Omit<PostType, 'id' | 'author'>) =>
    dispatch(addPost(post));

  return (
    <div>
      <h1>Create Post</h1>

      <PostForm onSubmit={onSubmit} />
    </div>
  );
};

export default PostCreate;
