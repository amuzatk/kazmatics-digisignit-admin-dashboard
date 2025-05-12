import Layout from '@/components/Layout';
import PostList from '@/components/PostList';
import PostsChart from '@/features/dashboard/components/PostChart';
import { withAuth } from '@/lib/withAuth';
import type { ReactElement } from 'react';

function AdminPosts() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Admin Dashboard: Post Management</h1>
      <p className="text-lg text-center mt-4">Manage, edit, and delete posts for better control over the content on your platform.</p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Post Analytics</h2>
        <p className="text-md mt-2 text-gray-600">Here’s an overview of posts by user to help you make data-driven decisions.</p>
        <PostsChart />
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Post Management</h2>
        <p className="text-md mt-2 text-gray-600">You can edit or delete posts here to maintain content quality.</p>
        <PostList editable />
      </section>
    </>
  );
}

AdminPosts.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default withAuth(AdminPosts, ['admin']);