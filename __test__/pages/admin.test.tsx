import { render, screen } from '@testing-library/react';
import AdminPosts from '@/pages/admin';
import { withAuth } from '@/lib/withAuth';
import { useRouter } from 'next/router'; // Import useRouter
import '@testing-library/jest-dom';

// Mocking the PostList and PostChart components
jest.mock('@/components/PostList', () => () => <div>PostList</div>);
jest.mock('@/features/dashboard/components/PostChart', () => () => <div>PostsChart</div>);

// Mocking useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock `withAuth` to return the component directly without the HOC logic
jest.mock('@/lib/withAuth', () => ({
  withAuth: (Component: React.ElementType, roles: string[]) => Component,
}));

describe('AdminPosts', () => {
  it('renders admin post management and PostList component', async () => {
    // Mock useRouter return value with both push and replace methods
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
      replace: jest.fn(),
    });

    render(<AdminPosts />);

    // Wait for the text to appear (asynchronous rendering)
    expect(await screen.findByText('Admin Posts Management')).toBeInTheDocument();
    expect(await screen.findByText('PostList')).toBeInTheDocument();
  });
});
