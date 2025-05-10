// pages/admin.tsx
import Layout from '@/components/Layout';
import PostList from '@/components/PostList';
import PostsChart from '@/features/dashboard/components/PostChart';
import { withAuth } from '@/lib/withAuth';
import type { ReactElement } from 'react';

function AdminPosts() {
  return (
    <>
      <h1 className="text-2xl font-bold">Admin Posts Management</h1>

      <PostsChart />
      <p className="text-xl font-bold mt-6">You can edit or delete posts here.</p>

      <PostList editable />
    </>
  );
}

// Define layout
AdminPosts.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

// Export with auth and layout preserved
export default withAuth(AdminPosts, ['admin']);