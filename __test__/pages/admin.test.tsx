import { render, screen } from "@testing-library/react";
import AdminPosts from "@/pages/admin";
import { useRouter } from "next/router";
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

describe("AdminPosts", () => {
  it("renders admin post management and PostList component", async () => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
      replace: jest.fn(),
    });

    render(<AdminPosts />);

    expect(
      await screen.findByText("Admin Dashboard: Post Management")
    ).toBeInTheDocument();
    expect(await screen.findByText("PostList")).toBeInTheDocument();
  });
});
