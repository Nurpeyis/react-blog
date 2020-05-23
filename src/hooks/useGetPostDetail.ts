import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPostDetail } from '../store/Posts/actions';
import { RootState, SinglePostType } from '../interfaces/store-interface';

interface useGetPostDetailReturn {
  isLoading: boolean;
  post: SinglePostType | null;
  dispatch: any
}

export default function useGetPostDetail(id: number): useGetPostDetailReturn {
  const dispatch = useDispatch();

  const isLoading: boolean = useSelector(
    (state: RootState) => state.posts.loader
  );

  const post: useGetPostDetailReturn['post'] = useSelector(
    (state: RootState) => state.posts.post
  );

  useEffect(() => {
    dispatch(fetchPostDetail(id));
  }, [dispatch, id]);

  return { isLoading, post, dispatch };
}