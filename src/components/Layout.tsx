"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { useUserStore } from "@/store/useUserStore";
import { ThemeToggle } from "@/components/ThemeToggle";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export default function Layout({ children }: { children: ReactNode }) {
  const { role, logout } = useUserStore();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <aside
        className={`fixed mt-[69px] lg:mt-0 inset-0  border-r border-gray-300 p-4 space-y-2 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static bg-gray-500 lg:bg-white lg:translate-x-0 w-60 lg:w-64 z-10`}
      >
        <h2 className="text-xl text-[white] lg:text-[black] font-bold mb-4">
          Dashboard
        </h2>
        {role === "admin" && (
          <Link className="text-[white] lg:text-[black]" href="/admin">
            Admin Posts
          </Link>
        )}
        {role === "editor" && (
          <Link className="text-[white] lg:text-[black]" href="/editor">
            Editor Posts
          </Link>
        )}
        <button onClick={logout} className="mt-4 block text-red-400">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="flex justify-between items-center p-4 border-b border-gray-300">
          <button className="lg:hidden p-2" onClick={toggleSidebar}>
            {isSidebarOpen ? (
              <MdClose className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5 " />
            )}
          </button>
          <h1 className="  text-lg font-semibold">Welcome, {role}</h1>
          <ThemeToggle />
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
