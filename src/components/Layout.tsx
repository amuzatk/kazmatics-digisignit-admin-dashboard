'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { useUserStore } from '@/store/useUserStore';
import { ThemeToggle } from '@/components/ThemeToggle';
// Import icons from react-icons
import { FaBars } from 'react-icons/fa'; // Hamburger icon
import { MdClose } from 'react-icons/md'; // Close icon

export default function Layout({ children }: { children: ReactNode }) {
  const { role, logout } = useUserStore();

  // State to manage sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen dark:bg-gray-400 text-gray-900 dark:text-white">
      {/* Sidebar */}
      <aside
        className={`fixed mt-[69px] lg:mt-0 inset-0 bg-gray-100 dark:bg-gray-400 dark:text-white text-black p-4 space-y-2 transition-transform transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:static lg:translate-x-0 w-[25%] lg:w-64 z-10`}
      >
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        {role === 'admin' && <Link href="/admin">Admin Posts</Link>}
        {role === 'editor' && <Link href="/editor">Editor Posts</Link>}
        <button onClick={logout} className="mt-4 block text-red-400">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
          <button
            className="lg:hidden p-2"
            onClick={toggleSidebar} // Toggle the sidebar visibility
          >
            {isSidebarOpen ? (
              <MdClose className="h-5 w-5 text-gray-700 dark:text-white" />
            ) : (
              <FaBars className="h-5 w-5 text-gray-700 dark:text-white" />
            )}
          </button>
          <h1 className="text-lg font-semibold">Welcome, {role}</h1>
          <ThemeToggle />
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}








// // components/Layout.tsx
// import { ReactNode } from "react";
// import Link from "next/link";
// import { useUserStore } from "@/store/useUserStore";
// import { ThemeToggle } from "@/components/ThemeToggle"; // Add this import

// export default function Layout({ children }: { children: ReactNode }) {
//   const { role, logout } = useUserStore();

//   return (
//     <div className="flex h-screen  dark:bg-gray-400 text-gray-900 dark:text-white">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-100 dark:bg-gray-400 dark:text-white text-black p-4 space-y-2">
//         <h2 className="text-xl font-bold mb-4">Dashboard</h2>
//         {role === "admin" && <Link href="/admin">Admin Posts</Link>}
//         {role === "editor" && <Link href="/editor">Editor Posts</Link>}
//         <button onClick={logout} className="mt-4 block text-red-400">
//           Logout
//         </button>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <header className="flex justify-between items-center p-4 border-b border-gray-300 dark:border-gray-700">
//           <h1 className="text-lg font-semibold">Welcome, {role}</h1>
//           <ThemeToggle />
//         </header>

//         {/* Page content */}
//         <main className="flex-1 p-6 overflow-y-auto">{children}</main>
//       </div>
//     </div>
//   );
// }