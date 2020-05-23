import React from 'react';
import { PostType } from '../interfaces/store-interface';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface Props {
  post: PostType
}

const PostPreview: React.FC<Props> = ({post}) => {
  return (
    <PostWrapper>
      <h2>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.body}</p>
    </PostWrapper>
  );
};

export default PostPreview;

const PostWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: .5rem;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;
