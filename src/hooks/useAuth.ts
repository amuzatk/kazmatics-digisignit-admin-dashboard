//src/hooks/useAuth.ts
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useUserStore } from '@/store/useUserStore';

export const useAuth = () => {
  const { login } = useUserStore();

  useEffect(() => {
    const token = Cookies.get('token');
    const role = Cookies.get('role') as 'admin' | 'editor' | undefined;

    if (token && role) {
      login(token, role);
    }
  }, [login]);
};
