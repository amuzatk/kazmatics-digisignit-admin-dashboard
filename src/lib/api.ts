// src/lib/api.ts
import { PostData } from '@/types';
import { api } from './axios';

export async function fetchPosts(): Promise<PostData[]> {
  const res = await api.get<PostData[]>('/posts');
  return res.data;
}







// // src/lib/api.ts

// export interface PostData {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// export async function fetchPosts(): Promise<PostData[]> {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');

//   if (!res.ok) {
//     throw new Error("Failed to fetch posts");
//   }

//   const data: PostData[] = await res.json();
//   return data;
// }
