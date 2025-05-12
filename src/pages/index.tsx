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

  return null;
}
