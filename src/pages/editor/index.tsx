// pages/edotor.tsx
import Layout from '@/components/Layout';
import PostList from '@/components/PostList';
import { withAuth } from '@/lib/withAuth';
import type { ReactElement } from 'react';

function EditorPosts() {
  return (
    <>
      <h1 className="text-2xl font-bold">Editor Post Viewer</h1>
      <p>Do have a nice viewing...</p>
      <PostList />
    </>
  );
}

// Define layout
EditorPosts.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

// Export with auth and layout preserved
export default withAuth(EditorPosts, ['editor']);
