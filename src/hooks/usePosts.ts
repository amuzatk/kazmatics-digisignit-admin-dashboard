// src/hooks/usePosts.ts
import { fetchPosts } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { usePostStore } from '@/store/usePostStore';

export function usePosts() {
  const setPosts = usePostStore((s) => s.setPosts);

  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const data = await fetchPosts();
      setPosts(data); // <- Sync with Zustand
      return data;
    },
  });
}




// // src/hooks/usePosts.ts
// import { fetchPosts } from '@/lib/api';
// import { useQuery } from '@tanstack/react-query';

// export function usePosts() {
//   return useQuery({
//     queryKey: ['posts'],
//     queryFn: fetchPosts,
//   });
// }
