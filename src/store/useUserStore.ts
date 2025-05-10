import { create } from "zustand";
import Cookies from "js-cookie";

type Role = "admin" | "editor";

interface UserState {
  token: string | null;
  role: Role | null;
  isAuthenticated: boolean;
  login: (token: string, role: Role) => void;
  logout: () => void;
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
}));

// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// interface User {
//   name: string;
//   role: 'admin' | 'editor';
// }

// interface AuthState {
//   user: User | null;
//   login: (user: User) => void;
//   logout: () => void;
// }

// export const useAuthStore = create<AuthState>()(
//   persist(
//     (set) => ({
//       user: null,
//       login: (user) => set({ user }),
//       logout: () => set({ user: null }),
//     }),
//     {
//       name: 'auth-storage',
//     }
//   )
// );
