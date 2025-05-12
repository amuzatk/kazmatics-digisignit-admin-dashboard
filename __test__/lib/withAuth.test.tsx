import { render, screen } from '@testing-library/react';
import { withAuth } from '@/lib/withAuth';
import { useUserStore } from '@/store/useUserStore';
import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  useRouter: () => ({
    replace: jest.fn(),
  }),
}));

jest.mock('@/store/useUserStore', () => ({
  useUserStore: jest.fn(),
}));

// Helper to DRY up test cases
const renderWithAuth = (authProps: { isAuthenticated: boolean; role: string }) => {
  (useUserStore as unknown as jest.Mock).mockReturnValue(authProps);
  const AuthComponent = withAuth(() => <div>Authenticated</div>, ['admin']);
  return render(<AuthComponent />);
};

describe('withAuth HOC', () => {
  it('redirects unauthenticated users to login', async () => {
    renderWithAuth({ isAuthenticated: false, role: '' });
    expect(screen.queryByText('Authenticated')).not.toBeInTheDocument();
  });

  it('renders component for users with valid roles', async () => {
    renderWithAuth({ isAuthenticated: true, role: 'admin' });
    expect(await screen.findByText('Authenticated')).toBeInTheDocument();
  });

  it('redirects authenticated users with invalid roles to login', async () => {
    renderWithAuth({ isAuthenticated: true, role: 'viewer' });
    expect(screen.queryByText('Authenticated')).not.toBeInTheDocument();
  });

  it('redirects authenticated users with missing role to login', async () => {
    renderWithAuth({ isAuthenticated: true, role: '' });
    expect(screen.queryByText('Authenticated')).not.toBeInTheDocument();
  });
});