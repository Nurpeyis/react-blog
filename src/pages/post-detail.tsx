import React from 'react'
import { useParams, Link } from 'react-router-dom';
import styled from '@emotion/styled';

import useGetPostDetail from '../hooks/useGetPostDetail';
import CommentsList from '../components/comments-list';
import CommentForm from '../components/comment-form';

const PostDetail:React.FC = () => {
  const { id } = useParams();
  const { isLoading, post } = useGetPostDetail(id);

  if (isLoading) {
    return <div>Post is loading ...</div>;
  }

  return (
    <div>
      {post && (
        <React.Fragment>
          <PostEdit to={`/posts/${post.id}/edit`}>Edit Post</PostEdit>

          <h1>{post.title}</h1>
          <p>{post.body}</p>

          <PostFooter>
            <CommentForm id={post.id} />

            <CommentsList />
          </PostFooter>
        </React.Fragment>
      )}
    </div>
  );
}

export default PostDetail

const PostEdit = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
`;

const PostFooter = styled.div`
  border-top: 1px solid #ddd;
`;
