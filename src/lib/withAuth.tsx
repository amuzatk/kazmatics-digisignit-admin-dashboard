import { useUserStore } from '@/store/useUserStore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function withAuth<P extends object>(
  Component: React.ComponentType<P>,
  allowedRoles: ('admin' | 'editor')[]
) {
  return function AuthenticatedComponent(props: P) {
    const { isAuthenticated, role } = useUserStore();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated || !role || !allowedRoles.includes(role)) {
        router.replace('/login');
      }
    }, [isAuthenticated, role, router]);

    if (!isAuthenticated || !role || !allowedRoles.includes(role)) return null;

    return <Component {...props} />;
  };
}
