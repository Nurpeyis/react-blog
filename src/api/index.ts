import axios, { AxiosInstance } from 'axios';
import { PostType, CommentsType } from '../interfaces/store-interface';

const fetcher: AxiosInstance = axios.create({
  baseURL: 'https://simpleblogapi.herokuapp.com'
});

fetcher.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  console.log(error.response.status, error.response.statusText);
  return Promise.reject(error);
});

export const getPosts = () => fetcher.get('/posts');

export const getPostDetail = (id: number) => fetcher.get(`/posts/${id}?_embed=comments`);

export const createPost = (post: Omit<PostType, 'id' | 'author'>) => fetcher.post('/posts', post);

export const updatePost = ({ id, title, body }: Omit<PostType, 'author'>) => fetcher.put(`/posts/${id}`, { title, body });

export const removePost = (id: number) => fetcher.delete(`/posts/${id}`);

export const addComment = (comment: Omit<CommentsType, 'id'>) => fetcher.post('/comments', comment);