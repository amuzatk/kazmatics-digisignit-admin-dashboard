// src/store/usePostStore.ts
import { create } from 'zustand';
import { PostData } from '@/types';

interface PostStore {
  posts: PostData[];
  isLoading: boolean;
  setPosts: (posts: PostData[]) => void;
  setIsLoading: (loading: boolean) => void;
  updatePost: (updatedPost: PostData) => void;
  deletePost: (id: number) => void;
}

export const usePostStore = create<PostStore>((set) => ({
  posts: [],
  isLoading: false,
  setPosts: (posts) => set({ posts }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  updatePost: (updatedPost) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      ),
    })),
  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((post) => post.id !== id),
    })),
}));





// // src/store/usePostStore.ts
// import { create } from 'zustand';
// import { PostData } from '@/types';

// interface PostStore {
//   posts: PostData[];
//   setPosts: (posts: PostData[]) => void;
//   updatePost: (updatedPost: PostData) => void;
//   deletePost: (id: number) => void;
// }

// export const usePostStore = create<PostStore>((set) => ({
//   posts: [],
//   setPosts: (posts) => set({ posts }),
//   updatePost: (updatedPost) =>
//     set((state) => ({
//       posts: state.posts.map((post) =>
//         post.id === updatedPost.id ? updatedPost : post
//       ),
//     })),
//   deletePost: (id) =>
//     set((state) => ({
//       posts: state.posts.filter((post) => post.id !== id),
//     })),
// }));
