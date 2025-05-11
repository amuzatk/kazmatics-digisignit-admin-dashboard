import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '@/pages/login';
import { useUserStore } from '@/store/useUserStore';
import { useRouter } from 'next/router';
import '@testing-library/jest-dom';

// Mock useRouter
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock Zustand store
jest.mock('@/store/useUserStore', () => ({
  useUserStore: jest.fn(),
}));

describe('Login Page', () => {
  const push = jest.fn();
  const login = jest.fn();

  // beforeEach(() => {
  //   (useRouter as jest.Mock).mockReturnValue({ push });

  //   // Mock the implementation of useUserStore
  //   (useUserStore as unknown as jest.Mock).mockReturnValue({
  //     login,
  //   });

  //   // Clear mock calls before each test
  //   push.mockClear();
  //   login.mockClear();
  // });

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push });
  
    (useUserStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ login })
    );
  
    push.mockClear();
    login.mockClear();
  });
  

  it('renders the login form', () => {
    render(<Login />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/login as/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('calls login and redirects for admin after form submission', async () => {
    render(<Login />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'admin@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'adminPassword' },
    });
    fireEvent.change(screen.getByLabelText(/login as/i), {
      target: { value: 'admin' },
    });

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(login).toHaveBeenCalledWith('mock-token', 'admin');
      expect(push).toHaveBeenCalledWith('/');
    });
  });

  it('shows loading state when logging in', async () => {
    render(<Login />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'admin@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'adminPassword' },
    });
    fireEvent.change(screen.getByLabelText(/login as/i), {
      target: { value: 'admin' },
    });

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(await screen.findByRole('button', { name: /logging in/i })).toBeInTheDocument();
  });
});








// // __test__/login/test.tsx
// import { render, screen, fireEvent } from '@testing-library/react';
// import Login from '@/pages/login';
// import { useUserStore } from '@/store/useUserStore';
// import { useRouter } from 'next/router';
// import '@testing-library/jest-dom';

// // Mocking useRouter hook
// jest.mock('next/router', () => ({
//   useRouter: jest.fn(),
// }));

// describe('Login Page', () => {
//   const push = jest.fn();
//   const login = jest.fn();

//   beforeEach(() => {
//     // Mock the useRouter hook to test routing
//     (useRouter as jest.Mock).mockReturnValue({ push });

//     // Spy on the login function inside the store, not mock the whole store
//     jest.spyOn(useUserStore.getState(), 'login').mockImplementation(login);
//   });

//   it('renders login buttons', () => {
//     render(<Login />);
//     // Test if login buttons are rendered
//     expect(screen.getByText('Login as:')).toBeInTheDocument();
//     expect(screen.getByText('Admin')).toBeInTheDocument();
//     expect(screen.getByText('Editor')).toBeInTheDocument();
//   });

//   it('calls login and redirects for admin', () => {
//     render(<Login />);
//     // Simulate clicking the 'Admin' button
//     fireEvent.click(screen.getByText('Admin'));

//     // Check if the login function was called with correct parameters
//     expect(login).toHaveBeenCalledWith('mock-token', 'admin');

//     // Check if the router.push was called with the correct URL
//     expect(push).toHaveBeenCalledWith('/');
//   });
// });