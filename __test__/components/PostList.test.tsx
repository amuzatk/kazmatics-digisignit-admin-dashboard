// __test__/PostList.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import PostList from '@/components/PostList';
import { usePostStore } from '@/store/usePostStore';
import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { JSX } from 'react';

describe('PostList', () => {
  const queryClient = new QueryClient();

  const renderWithClient = (component: JSX.Element) => {
    return render(
      <QueryClientProvider client={queryClient}>
        {component}
      </QueryClientProvider>
    );
  };

  it('displays loading state', async () => {
    jest.spyOn(usePostStore, 'getState').mockReturnValue({
      posts: [],
      deletePost: jest.fn(),
      setPosts: jest.fn(),
      updatePost: jest.fn(),
    });

    renderWithClient(<PostList editable={true} />);

    await waitFor(() => {
        expect(document.querySelector('.ant-spin')).toBeInTheDocument();
      });      
  });
});
