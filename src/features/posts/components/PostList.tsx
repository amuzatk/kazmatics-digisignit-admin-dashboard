import { useEffect, useState } from 'react';
import { Post } from '@/types';
import { fetchPosts } from '@/lib/api';

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
