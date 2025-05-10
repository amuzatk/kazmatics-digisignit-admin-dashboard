import { create } from "zustand";
import Cookies from "js-cookie";

type Role = "admin" | "editor";

interface UserState {
  token: string | null;
  role: Role | null;
  isAuthenticated: boolean;
  login: (token: string, role: Role) => void;
  logout: () => void;
  hydrate: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  token: null,
  role: null,
  isAuthenticated: false,
  login: (token, role) => {
    Cookies.set("token", token);
    Cookies.set("role", role);
    set({ token, role, isAuthenticated: true });
  },
  logout: () => {
    Cookies.remove("token");
    Cookies.remove("role");
    set({ token: null, role: null, isAuthenticated: false });
  },
  hydrate: () => {
    const token = Cookies.get('token');
    const role = Cookies.get('role') as 'admin' | 'editor' | undefined;
    if (token && role) {
      set({ token, role, isAuthenticated: true });
    }
  },
}));