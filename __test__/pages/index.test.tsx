import { render } from '@testing-library/react';
import Home from '@/pages/index';
import { useUserStore } from '@/store/useUserStore';
import { useRouter } from 'next/router';
import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/store/useUserStore', () => ({
  useUserStore: jest.fn(),
}));

// DRY Helper
const renderHomeWithUser = (authProps: { isAuthenticated: boolean; role: string }) => {
  const push = jest.fn();
  (useRouter as jest.Mock).mockReturnValue({ push });
  (useUserStore as unknown as jest.Mock).mockReturnValue(authProps);

  render(<Home />);
  return push;
};

describe('Home Page Redirection', () => {
  it('redirects to login if not authenticated', () => {
    const push = renderHomeWithUser({ isAuthenticated: false, role: '' });
    expect(push).toHaveBeenCalledWith('/login');
  });

  it('redirects to admin if role is admin', () => {
    const push = renderHomeWithUser({ isAuthenticated: true, role: 'admin' });
    expect(push).toHaveBeenCalledWith('/admin');
  });

  it('redirects to editor if role is editor', () => {
    const push = renderHomeWithUser({ isAuthenticated: true, role: 'editor' });
    expect(push).toHaveBeenCalledWith('/editor');
  });
});





// import { render, screen } from '@testing-library/react';
// import Home from '@/pages/index';
// import { useUserStore } from '@/store/useUserStore';
// import { useRouter } from 'next/router';
// import '@testing-library/jest-dom';

// // Mocking the useRouter hook
// jest.mock('next/router', () => ({
//   useRouter: jest.fn(),
// }));

// // Mocking useUserStore
// jest.mock('@/store/useUserStore', () => ({
//   useUserStore: jest.fn(),
// }));

// describe('Home Page Redirection', () => {
//   const push = jest.fn();

//   beforeEach(() => {
//     // Mock the useRouter hook to test routing
//     (useRouter as jest.Mock).mockReturnValue({ push });

//     // Provide mock return values for useUserStore
//     (useUserStore as unknown as jest.Mock).mockReturnValue({
//       isAuthenticated: false,
//       role: '',
//     });
//   });

//   it('redirects to login if not authenticated', () => {
//     render(<Home />);
//     expect(push).toHaveBeenCalledWith('/login');
//   });

//   it('redirects to admin if role is admin', () => {
//     // Mock the store state for this test
//     (useUserStore as unknown as jest.Mock).mockReturnValue({
//       isAuthenticated: true,
//       role: 'admin',
//     });

//     render(<Home />);
//     expect(push).toHaveBeenCalledWith('/admin');
//   });

//   it('redirects to editor if role is editor', () => {
//     // Mock the store state for this test
//     (useUserStore as unknown as jest.Mock).mockReturnValue({
//       isAuthenticated: true,
//       role: 'editor',
//     });

//     render(<Home />);
//     expect(push).toHaveBeenCalledWith('/editor');
//   });
// });
