import { render, screen } from '@testing-library/react';
import EditorPosts from '@/pages/editor';
import { withAuth } from '@/lib/withAuth';
import { useRouter } from 'next/router';
import '@testing-library/jest-dom';

// Mocking the PostList component
jest.mock('@/components/PostList', () => () => <div>PostList</div>);

// Mocking useRouter hook
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock `withAuth` to return the component directly without the HOC logic
jest.mock('@/lib/withAuth', () => ({
  withAuth: (Component: React.ElementType, roles: string[]) => Component,
}));

describe('EditorPosts', () => {
  it('renders editor post viewer and PostList component', async () => {
    // Mock useRouter return value with both push and replace methods
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
      replace: jest.fn(),
    });

    render(<EditorPosts />);

    // Wait for the text to appear
    expect(await screen.findByText('Editor Post Viewer')).toBeInTheDocument();
    expect(await screen.findByText('PostList')).toBeInTheDocument();
  });
});
