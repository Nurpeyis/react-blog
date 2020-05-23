import React from 'react';

import PostPreview from '../components/post-preview';
import useGetPosts from '../hooks/useGetPosts';

const Posts: React.FC = () => {
  const { isLoading, posts } = useGetPosts();

  return (
    <div>
      <h1>Posts</h1>

      {!posts.length && isLoading
        ? 'Loading posts ...'
        : posts.map((post) => <PostPreview key={post.id} post={post} />)}
    </div>
  );
};

export default Posts;
