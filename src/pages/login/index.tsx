import { useState } from 'react';
import { useRouter } from 'next/router';
import { useUserStore } from '@/store/useUserStore';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';

export default function Login() {
  const login = useUserStore((state) => state.login);
  const router = useRouter();

  const [role, setRole] = useState<'admin' | 'editor'>('admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      login('mock-token', role);
      router.push('/');
    }, 100);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-0 dark:bg-gray-900 transition-colors">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <motion.div
        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-[95%] md:w-full max-w-md space-y-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Sign In to Your Dashboard
        </h1>

        <div>
          <label htmlFor="email" className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            id="email"
            value={email}
            className="w-full px-4 py-2 border rounded focus:outline-none dark:bg-gray-700 dark:text-white"
            placeholder="e.g., user@example.com"
            type="email"
            onChange={handleEmailChange}
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>
          <input
            id="password"
            className="w-full px-4 py-2 border rounded focus:outline-none dark:bg-gray-700 dark:text-white"
            placeholder="••••••••"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div>
          <label htmlFor="loginAs" className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
            Login as
          </label>
          <select
            id="loginAs"
            value={role}
            onChange={(e) => setRole(e.target.value as 'admin' | 'editor')}
            className="w-auto box-border px-3 py-2 border rounded-md appearance-none dark:bg-gray-700 dark:text-white"
          >
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
          </select>
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </motion.div>
    </div>
  );
}





// //NEW pages/login.tsx
// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { useUserStore } from '@/store/useUserStore';
// import { ThemeToggle } from '@/components/ThemeToggle';

// export default function Login() {
//   const login = useUserStore((state) => state.login);
//   const router = useRouter();

//   const [role, setRole] = useState<'admin' | 'editor'>('admin');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleLogin = () => {
//     setLoading(true);
//     setTimeout(() => {
//       login('mock-token', role);
//       router.push('/');
//     }, 100);
//   };

//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-0 dark:bg-gray-900 transition-colors">
//       <div className="absolute top-4 right-4">
//         <ThemeToggle />
//       </div>
//       <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-[95%] md:w-full max-w-md space-y-6">
//         <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Admin Dashboard Login</h1>

// <div>
//   <label htmlFor="email" className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
//     Email
//   </label>
//   <input
//     id="email"
//     value={email}
//     className="w-full px-4 py-2 border rounded focus:outline-none dark:bg-gray-700 dark:text-white"
//     placeholder="e.g., user@example.com"
//     type="email"
//     // value=""
//     onChange={handleEmailChange}
//   />
// </div>

// <div>
//   <label htmlFor="password" className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
//     Password
//   </label>
//   <input
//     id="password"
//     className="w-full px-4 py-2 border rounded focus:outline-none dark:bg-gray-700 dark:text-white"
//     placeholder="••••••••"
//     type="password"
//     value={password}
//     onChange={handlePasswordChange}
//   />
// </div>

// <div>
//   <label htmlFor="loginAs" className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
//     Login as
//   </label>
//   <select
//     id="loginAs"
//     value={role}
//     onChange={(e) => setRole(e.target.value as 'admin' | 'editor')}
//     className="w-auto box-border px-3 py-2 border rounded-md appearance-none dark:bg-gray-700 dark:text-white"
//   >
//     <option value="admin">Admin</option>
//     <option value="editor">Editor</option>
//   </select>
// </div>


//         <button
//           onClick={handleLogin}
//           disabled={loading}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
//         >
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </div>
//     </div>
//   );
// }
