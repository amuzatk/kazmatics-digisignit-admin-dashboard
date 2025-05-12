// pages/login/index.tsx
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUserStore } from "@/store/useUserStore";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";

export default function Login() {
  const login = useUserStore((state) => state.login);
  const router = useRouter();

  const [role, setRole] = useState<"admin" | "editor">("admin");
  const [loading, setLoading] = useState(false);

  // Ensure that the login happens only once the page is fully mounted
  useEffect(() => {
    setLoading(false);
  }, []);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      login("mock-token", role);
      router.push("/");
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {/* Wrapped container with Framer Motion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="shadow-lg rounded-lg p-8 w-[95%] md:w-full max-w-md space-y-6"
      >
        <h1 className="text-3xl font-bold text-center">
          Sign In to Your Dashboard
        </h1>

        <div>
          <label htmlFor="email" className="block text-sm mb-1">
            Email
          </label>
          <input
            readOnly
            id="email"
            value="user@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm mb-1">
            Password
          </label>
          <input
            readOnly
            id="password"
            value="••••••••"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>

        <div>
          <label htmlFor="loginAs" className="block text-sm mb-1">
            Login as
          </label>
          <select
            id="loginAs"
            value={role}
            onChange={(e) => setRole(e.target.value as "admin" | "editor")}
            className="w-auto px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option className="text-black bg-white" value="admin">
              Admin
            </option>
            <option className="text-black bg-white" value="editor">
              Editor
            </option>
          </select>
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </motion.div>
    </div>
  );
}


// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { useUserStore } from "@/store/useUserStore";
// import { ThemeToggle } from "@/components/ThemeToggle";
// // import { motion } from "framer-motion";

// export default function Login() {
//   const login = useUserStore((state) => state.login);
//   const router = useRouter();

//   const [role, setRole] = useState<"admin" | "editor">("admin");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Check if the component is mounted before calling router.push()
//     if (loading) {
//       setTimeout(() => {
//         login("mock-token", role);
//         router.push("/"); // navigate after login is successful
//       }, 300); // Increased delay to ensure smooth transition
//     }
//   }, [loading, role, login, router]);

//   const handleLogin = () => {
//     setLoading(true);
//   };

//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="absolute top-4 right-4">
//         <ThemeToggle />
//       </div>

//       <div
//         className="shadow-lg rounded-lg p-8 w-[95%] md:w-full max-w-md space-y-6"
//         // initial={{ opacity: 0, y: -50 }}
//         // animate={{ opacity: 1, y: 0 }}
//         // transition={{ duration: 0.5 }}
//       >
//         <h1 className="text-3xl font-bold text-center">Sign In to Your Dashboard</h1>

//         <div>
//           <label htmlFor="email" className="block text-sm mb-1">
//             Email
//           </label>
//           <input
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//             type="email"
//             placeholder="e.g., user@example.com"
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500"
//           />
//         </div>

//         <div>
//           <label htmlFor="password" className="block text-sm mb-1">
//             Password
//           </label>
//           <input
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//             type="password"
//             placeholder="••••••••"
//             className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 dark:placeholder-gray-500"
//           />
//         </div>

//         <div>
//           <label htmlFor="loginAs" className="block text-sm mb-1">
//             Login as
//           </label>
//           <select
//             id="loginAs"
//             value={role}
//             onChange={(e) => setRole(e.target.value as "admin" | "editor")}
//             className="w-auto px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option className="text-black bg-white" value="admin">
//               Admin
//             </option>
//             <option className="text-black bg-white" value="editor">
//               Editor
//             </option>
//           </select>
//         </div>
//         <button
//           onClick={handleLogin}
//           disabled={loading}
//           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </div>
//     </div>
//   );
// }

// // import { useState } from "react";
// // import { useRouter } from "next/router";
// // import { useUserStore } from "@/store/useUserStore";
// // import { ThemeToggle } from "@/components/ThemeToggle";
// // import { motion } from "framer-motion";

// // export default function Login() {
// //   const login = useUserStore((state) => state.login);
// //   const router = useRouter();

// //   const [role, setRole] = useState<"admin" | "editor">("admin");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const handleLogin = () => {
// //     setLoading(true);
// //     setTimeout(() => {
// //       login("mock-token", role);
// //       router.push("/");
// //     }, 100);
// //   };

// //   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setEmail(e.target.value);
// //   };

// //   const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setPassword(e.target.value);
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center  transition-colors">
// //       <div className="absolute top-4 right-4">
// //         <ThemeToggle />
// //       </div>

// //       <motion.div
// //         className="shadow-lg rounded-lg p-8 w-[95%] md:w-full max-w-md space-y-6"
// //         initial={{ opacity: 0, y: -50 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //       >
// //         <h1 className="text-3xl font-bold text-center">
// //           Sign In to Your Dashboard
// //         </h1>

// //         <div>
// //           <label htmlFor="email" className="block text-sm mb-1">
// //             Email
// //           </label>
// //           <input
// //             id="email"
// //             value={email}
// //             onChange={handleEmailChange}
// //             type="email"
// //             placeholder="e.g., user@example.com"
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500  placeholder-gray-400 dark:placeholder-gray-500"
// //           />
// //         </div>

// //         <div>
// //           <label htmlFor="password" className="block text-sm mb-1">
// //             Password
// //           </label>
// //           <input
// //             id="password"
// //             value={password}
// //             onChange={handlePasswordChange}
// //             type="password"
// //             placeholder="••••••••"
// //             className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500  placeholder-gray-400 dark:placeholder-gray-500"
// //           />
// //         </div>

// //         <div>
// //           <label htmlFor="loginAs" className="block text-sm mb-1">
// //             Login as
// //           </label>
// //           <select
// //             id="loginAs"
// //             value={role}
// //             onChange={(e) => setRole(e.target.value as "admin" | "editor")}
// //             className="w-auto px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
// //           >
// //             <option className="text-black bg-white" value="admin">
// //               Admin
// //             </option>
// //             <option className="text-black bg-white" value="editor">
// //               Editor
// //             </option>
// //           </select>
// //         </div>
// //         <button
// //           onClick={handleLogin}
// //           disabled={loading}
// //           className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
// //         >
// //           {loading ? "Logging in..." : "Login"}
// //         </button>
// //       </motion.div>
// //     </div>
// //   );
// // }
