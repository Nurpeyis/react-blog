import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from '../store/Posts/actions';
import { RootState, PostType } from '../interfaces/store-interface';

interface useGetPostsReturn {
  isLoading: boolean;
  posts: PostType[];
}

export default function useGetPosts(): useGetPostsReturn {
  const dispatch = useDispatch();

  const isLoading: boolean = useSelector(
    (state: RootState) => state.posts.loader
  );

  const posts: PostType[] = useSelector(
    (state: RootState) => state.posts.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return { isLoading, posts };
}