import Layout from '@/components/Layout';
import { withAuth } from '@/lib/withAuth';

function EditorPosts() {

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Editor Post Viewer</h1>
      <p>You can view posts here.</p>
    </Layout>
  );
}

export default withAuth(EditorPosts, ['editor']);