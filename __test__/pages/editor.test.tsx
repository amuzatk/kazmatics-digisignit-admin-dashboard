import { render, screen } from "@testing-library/react";
import EditorPosts from "@/pages/editor";
import { useRouter } from "next/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom";

jest.mock("@/components/PostList", () => () => <div>PostList</div>);
jest.mock("@/features/dashboard/components/PostChart", () => () => (
  <div>PostsChart</div>
));

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/lib/withAuth", () => ({
  withAuth: (Component: React.ElementType, roles: string[]) => Component,
}));

describe("EditorPosts", () => {
  it("renders editor post viewer and PostList component", async () => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
      replace: jest.fn(),
    });

    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <EditorPosts />
      </QueryClientProvider>
    );

    expect(
      await screen.findByText("Editor Dashboard: Post Viewer")
    ).toBeInTheDocument();
    expect(await screen.findByText("PostList")).toBeInTheDocument();
  });
});
