import Layout from '@/components/Layout';
import PostsChart from '@/features/dashboard/components/PostChart';
import { withAuth } from '@/lib/withAuth';

function AdminPosts() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold">Admin Posts Management</h1>
      <p>You can edit or delete posts here.</p>
      <PostsChart />
    </Layout>
  );
}

export default withAuth(AdminPosts, ['admin']);
