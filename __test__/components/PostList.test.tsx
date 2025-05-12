import { render, waitFor } from "@testing-library/react";
import PostList from "@/components/PostList";
import { usePostStore } from "@/store/usePostStore";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { JSX } from "react";

jest.mock("antd", () => {
  const actualAntd = jest.requireActual("antd");

  return {
    ...actualAntd,
    Spin: () => <div className="ant-spin">Loading...</div>,
    Modal: ({ open, children }: { open: boolean; children: React.ReactNode }) =>
      open ? <div className="mock-modal">{children}</div> : null,
    Input: Object.assign(
      ({ value, onChange }: { value: string; onChange: (e: any) => void }) => (
        <input
          className="mock-input"
          value={value}
          onChange={onChange}
          placeholder="Input"
        />
      ),
      {
        TextArea: ({
          value,
          onChange,
        }: {
          value: string;
          onChange: (e: any) => void;
        }) => (
          <textarea
            className="mock-textarea"
            value={value}
            onChange={onChange}
            placeholder="TextArea"
          />
        ),
      }
    ),
  };
});

jest.mock("@/store/usePostStore", () => ({
  usePostStore: jest.fn(),
}));
jest.mock("sweetalert2", () => ({
  fire: jest.fn(() => Promise.resolve({ isConfirmed: true })),
}));
jest.mock("@/components/CustomConfirm", () => ({
  __esModule: true,
  default: () => <div className="mock-custom-confirm" />,
}));

describe("PostList", () => {
  const queryClient = new QueryClient();

  const renderWithClient = (component: JSX.Element) => {
    return render(
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>
    );
  };

  it("displays loading state", async () => {
    (usePostStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({
        posts: [],
        deletePost: jest.fn(),
        setPosts: jest.fn(),
        updatePost: jest.fn(),
        isLoading: true,
        setIsLoading: jest.fn(),
      })
    );

    renderWithClient(<PostList editable={true} />);

    await waitFor(() => {
      expect(document.querySelector(".ant-spin")).toBeInTheDocument();
    });
  }, 10000);
});
