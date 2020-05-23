import React from 'react'
import { useParams, Link } from 'react-router-dom';
import styled from '@emotion/styled';

import useGetPostDetail from '../hooks/useGetPostDetail';
import CommentsList from '../components/comments-list';
import CommentForm from '../components/comment-form';
import { deletePost } from '../store/Posts/actions';

const PostDetail:React.FC = () => {
  const { id } = useParams();
  const { isLoading, post, dispatch } = useGetPostDetail(id);

  if (isLoading) {
    return <div>Post is loading ...</div>;
  }

  return (
    <div>
      {post && (
        <React.Fragment>
          <PostEdit to={`/posts/${post.id}/edit`}>Edit Post</PostEdit>
          <Button onClick={() => dispatch(deletePost(id))}>Delete</Button>

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

const Button = styled.button`
  border: 1px solid #dc3545;
  background-color: #dc3545;
  color: white;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
  margin-left: .5rem;

  &:hover,
  &:disabled {
    background-color: rgba(220, 53, 69, 0.5);
    border-color: rgba(220, 53, 69, 0.5);
  }
`;