// components/Layout.tsx
import { ReactNode } from "react";
import Link from "next/link";
import { useUserStore } from "@/store/useUserStore";
import { ThemeToggle } from "@/components/ThemeToggle"; // Add this import

export default function Layout({ children }: { children: ReactNode }) {
  const { role, logout } = useUserStore();

  return (
    <div className="flex h-screen  dark:bg-gray-400 text-gray-900 dark:text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 dark:bg-gray-400 dark:text-white text-black p-4 space-y-2">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        {role === "admin" && <Link href="/admin">Admin Posts</Link>}
        {role === "editor" && <Link href="/editor">Editor Posts</Link>}
        <button onClick={logout} className="mt-4 block text-red-400">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
          <h1 className="text-lg font-semibold">Welcome, {role}</h1>
          <ThemeToggle />
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}





// import { ReactNode } from "react";
// import Link from "next/link";
// import { useUserStore } from "@/store/useUserStore";

// export default function Layout({ children }: { children: ReactNode }) {
//   const { role, logout } = useUserStore();

//   return (
//     <div className="flex h-screen">
//       <aside className="w-64 bg-gray-800 text-white p-4 space-y-2">
//         <h2 className="text-xl font-bold mb-4">Dashboard</h2>
//         {role === "admin" && <Link href="/admin">Admin Posts</Link>}
//         {role === "editor" && <Link href="/editor">Editor Posts</Link>}
//         <button onClick={logout} className="mt-4 block text-red-400">
//           Logout
//         </button>
//       </aside>
//       <main className="flex-1 p-6 overflow-y-auto bg-gray-50">{children}</main>
//     </div>
//   );
// }
