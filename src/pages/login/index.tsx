// pages/login.tsx
import { useRouter } from 'next/router';
import { useUserStore } from '@/store/useUserStore';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Login() {
  const login = useUserStore((state) => state.login);
  const router = useRouter();

  const handleLogin = (role: 'admin' | 'editor') => {
    login('mock-token', role);
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
          <ThemeToggle />
      <div className="space-y-4">
        <h1 className="text-xl font-bold">Login as:</h1>
        <button onClick={() => handleLogin('admin')} className="bg-blue-500 text-white px-4 py-2 rounded">Admin</button>
        <button onClick={() => handleLogin('editor')} className="bg-green-500 text-white px-4 py-2 rounded">Editor</button>
      </div>
    </div>
  );
}





// // pages/login.tsx
// import { useRouter } from "next/router";
// import { useUserStore } from "@/store/useUserStore";
// import { useState } from "react";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [role, setRole] = useState<"admin" | "editor">("editor");
//   const login = useUserStore((state) => state.login);
//   const router = useRouter();

//   const handleSubmit = () => {
//     login("mock-token", role);
//     router.push("/");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div>
//         <input value={username} onChange={(e) => setUsername(e.target.value)} />
//         <select onChange={(e) => setRole(e.target.value as "admin" | "editor")}>
//           <option value="editor">Editor</option>
//           <option value="admin">Admin</option>
//         </select>
//         <button onClick={() => handleSubmit()}>Login</button>
//       </div>
//     </div>
//   );
// }
