import { render, screen } from '@testing-library/react';
import EditorPosts from '@/pages/editor';
import { withAuth } from '@/lib/withAuth';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom';

// Mocking the PostList and PostsChart components (optional if you just want to test rendering)
jest.mock('@/components/PostList', () => () => <div>PostList</div>);
jest.mock('@/features/dashboard/components/PostChart', () => () => <div>PostsChart</div>);

// Mock useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock withAuth
jest.mock('@/lib/withAuth', () => ({
  withAuth: (Component: React.ElementType, roles: string[]) => Component,
}));

describe('EditorPosts', () => {
  it('renders editor post viewer and PostList component', async () => {
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
      replace: jest.fn(),
    });

    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <EditorPosts />
      </QueryClientProvider>
    );

    expect(await screen.findByText('Editor Dashboard: Post Viewer')).toBeInTheDocument();
    expect(await screen.findByText('PostList')).toBeInTheDocument();
  });
});






// import { render, screen } from '@testing-library/react';
// import EditorPosts from '@/pages/editor';
// import { withAuth } from '@/lib/withAuth';
// import { useRouter } from 'next/router';
// import '@testing-library/jest-dom';

// // Mocking the PostList component
// jest.mock('@/components/PostList', () => () => <div>PostList</div>);

// // Mocking useRouter hook
// jest.mock('next/router', () => ({
//   useRouter: jest.fn(),
// }));

// // Mock `withAuth` to return the component directly without the HOC logic
// jest.mock('@/lib/withAuth', () => ({
//   withAuth: (Component: React.ElementType, roles: string[]) => Component,
// }));

// describe('EditorPosts', () => {
//   it('renders editor post viewer and PostList component', async () => {
//     // Mock useRouter return value with both push and replace methods
//     (useRouter as jest.Mock).mockReturnValue({
//       push: jest.fn(),
//       replace: jest.fn(),
//     });

//     render(<EditorPosts />);

//     // Wait for the text to appear
//     expect(await screen.findByText('Editor Post Viewer')).toBeInTheDocument();
//     expect(await screen.findByText('PostList')).toBeInTheDocument();
//   });
// });
