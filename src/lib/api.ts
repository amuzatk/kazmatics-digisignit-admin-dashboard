// src/lib/api.ts
import { PostData } from '@/types';
import { api } from './axios';

export async function fetchPosts(): Promise<PostData[]> {
  const res = await api.get<PostData[]>('/posts');
  return res.data;
}
