import { render } from "@testing-library/react";
import Home from "@/pages/index";
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/store/useUserStore", () => ({
  useUserStore: jest.fn(),
}));

// DRY Helper
const renderHomeWithUser = (authProps: {
  isAuthenticated: boolean;
  role: string;
}) => {
  const push = jest.fn();
  (useRouter as jest.Mock).mockReturnValue({ push });
  (useUserStore as unknown as jest.Mock).mockReturnValue(authProps);

  render(<Home />);
  return push;
};

describe("Home Page Redirection", () => {
  it("redirects to login if not authenticated", () => {
    const push = renderHomeWithUser({ isAuthenticated: false, role: "" });
    expect(push).toHaveBeenCalledWith("/login");
  });

  it("redirects to admin if role is admin", () => {
    const push = renderHomeWithUser({ isAuthenticated: true, role: "admin" });
    expect(push).toHaveBeenCalledWith("/admin");
  });

  it("redirects to editor if role is editor", () => {
    const push = renderHomeWithUser({ isAuthenticated: true, role: "editor" });
    expect(push).toHaveBeenCalledWith("/editor");
  });
});
