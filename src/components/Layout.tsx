import { ReactNode } from 'react';
import Link from 'next/link';
import { useUserStore } from '@/store/useUserStore';

export default function Layout({ children }: { children: ReactNode }) {
  const { role, logout } = useUserStore();

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4 space-y-2">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        {role === 'admin' && <Link href="/admin">Admin Posts</Link>}
        {role === 'editor' && <Link href="/editor">Editor Posts</Link>}
        <button onClick={logout} className="mt-4 block text-red-400">Logout</button>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
        {children}
      </main>
    </div>
  );
}