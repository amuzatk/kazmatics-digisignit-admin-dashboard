// src/lib/withAuth.tsx
import { useUserStore } from '@/store/useUserStore';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import type { ReactElement, ComponentType, JSX } from 'react';

// Add the constraint to `P`
export function withAuth<P extends JSX.IntrinsicAttributes>(
  Component: ComponentType<P> & { getLayout?: (page: ReactElement) => ReactElement },
  allowedRoles: ('admin' | 'editor')[]
) {
  const AuthenticatedComponent = (props: P) => {
    const { isAuthenticated, role } = useUserStore();
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated || !role || !allowedRoles.includes(role)) {
        router.replace('/login');
      }
    }, [isAuthenticated, role, router]);

    if (typeof window === 'undefined') return null; // Prevent SSR crash

    if (!isAuthenticated || !role || !allowedRoles.includes(role)) return null;

    return <Component {...props} />;
  };

  // Forward `getLayout` if present
  if (Component.getLayout) {
    (AuthenticatedComponent as typeof Component).getLayout = Component.getLayout;
  }

  return AuthenticatedComponent as ComponentType<P> & {
    getLayout?: (page: ReactElement) => ReactElement;
  };
}