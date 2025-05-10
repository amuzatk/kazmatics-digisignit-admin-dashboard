import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { isAuthenticated, role } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    } else if (role === "admin") {
      router.push("/admin");
    } else if (role === "editor") {
      router.push("/editor");
    }
  }, [isAuthenticated, role, router]);

  return null; // Since we redirect, no UI here is needed
}



// // pages/index.tsx
// import { useUserStore } from "@/store/useUserStore";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

// export default function Home() {
//   const { isAuthenticated, role, logout } = useUserStore();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       router.push("/login");
//     }
//   }, [isAuthenticated, router]);

//   if (!isAuthenticated) return null;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">Welcome, {role}!</h1>
//       <p>This is the dashboard home page.</p>
//       <button
//         onClick={logout}
//         className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

