import Layout from "@/components/Layout";
import PostList from "@/components/PostList";
import PostsChart from "@/features/dashboard/components/PostChart";
import { withAuth } from "@/lib/withAuth";
import type { ReactElement } from "react";

function EditorPosts() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">
        Editor Dashboard: Post Viewer
      </h1>
      <p className="text-lg text-center mt-4">
        View posts and contribute to content moderation. You have view-only
        access.
      </p>

      <section className="hidden">
        <h2 className="text-2xl font-semibold">Post Analytics</h2>
        <p className="text-md mt-2">
          Explore post trends and insights to inform your editing process.
        </p>
        <div>
          <PostsChart />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">View Posts</h2>
        <p className="text-md mt-2">
          Browse posts and monitor content to ensure quality and relevance.
        </p>
        <PostList />
      </section>
    </>
  );
}

// Define layout
EditorPosts.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

// Export with auth and layout preserved
export default withAuth(EditorPosts, ["editor"]);
