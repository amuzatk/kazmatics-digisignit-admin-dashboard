// src/hooks/usePosts.ts
import { fetchPosts } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { usePostStore } from '@/store/usePostStore';

export function usePosts() {
  const setPosts = usePostStore((s) => s.setPosts);
  const setIsLoading = usePostStore((s) => s.setIsLoading);

  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      setIsLoading(true);
      try {
        const data = await fetchPosts();
        setPosts(data);
        return data;
      } finally {
        setIsLoading(false);
      }
    },
  });
}





// // src/hooks/usePosts.ts
// import { fetchPosts } from '@/lib/api';
// import { useQuery } from '@tanstack/react-query';
// import { usePostStore } from '@/store/usePostStore';

// export function usePosts() {
//   const setPosts = usePostStore((s) => s.setPosts);

//   return useQuery({
//     queryKey: ['posts'],
//     queryFn: async () => {
//       const data = await fetchPosts();
//       setPosts(data); // <- Sync with Zustand
//       return data;
//     },
//   });
// }