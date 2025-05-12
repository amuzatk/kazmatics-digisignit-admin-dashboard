import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Login from "@/pages/login";
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@/store/useUserStore", () => ({
  useUserStore: jest.fn(),
}));

describe("Login Page", () => {
  const push = jest.fn();
  const login = jest.fn();
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push });

    (useUserStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ login })
    );

    push.mockClear();
    login.mockClear();
  });

  it("renders the login form", () => {
    render(<Login />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/login as/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("calls login and redirects for admin after form submission", async () => {
    render(<Login />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "admin@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "adminPassword" },
    });
    fireEvent.change(screen.getByLabelText(/login as/i), {
      target: { value: "admin" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => {
      expect(login).toHaveBeenCalledWith("mock-token", "admin");
      expect(push).toHaveBeenCalledWith("/");
    });
  });

  it("shows loading state when logging in", async () => {
    render(<Login />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "admin@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "adminPassword" },
    });
    fireEvent.change(screen.getByLabelText(/login as/i), {
      target: { value: "admin" },
    });

    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    expect(
      await screen.findByRole("button", { name: /logging in/i })
    ).toBeInTheDocument();
  });
});
