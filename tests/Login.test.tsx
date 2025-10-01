import Login from '../src/components/Login';
import authReducer from '../src/store/reducers/authSlice';
import toggleReducer from '../src/store/reducers/toggleSlice';
import { Routes, Route, MemoryRouter, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import Navbar from '../src/components/Navbar';
import { vi } from 'vitest';
import type { Mock } from 'vitest';
import axios from 'axios';


const mockUser = {
  email: 'mock@user.com',
  password: '123',
};

vi.mock('axios');

beforeEach(() => {
  (axios.post as Mock).mockResolvedValue({
    data: {
      userName: 'Tony',
      userId: 'ironman123',
    },
  });
});

afterEach(() => {
  vi.restoreAllMocks();
});

const renderWithRouter = (preloadedIsLoggedIn = false) => {
  const store = configureStore({
    reducer: {
      toggle: toggleReducer,
      auth: authReducer,
    },
    preloadedState: {
      toggle: { toggle: false },
      auth: {
        isLoggedIn: preloadedIsLoggedIn,
        userId: preloadedIsLoggedIn ? 'ironman123' : '',
        userName: preloadedIsLoggedIn ? 'Tony' : '',
      },
    },
  });

  return {
    store,
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path="/login"
              element={
                preloadedIsLoggedIn ? <Navigate to="/" replace /> : <Login />
              }
            />
            <Route path="/" element={<div>Home Page (Mock)</div>} />
            <Route path="/profile" element={<div>Profile Page (Mock)</div>} />
          </Routes>
          <Navbar addedProducts={[]} />
        </MemoryRouter>
      </Provider>
    ),
  };
};

describe('testing user login', () => {
  it('user can not log in with mock data', async () => {
    (axios.post as Mock).mockRejectedValueOnce(new Error('Network Error'));
    renderWithRouter();

    const inputLogin = await screen.findByPlaceholderText(/email/i);
    fireEvent.change(inputLogin, { target: { value: mockUser.email } });
    const inputPassword = await screen.findByPlaceholderText(/password/i);
    fireEvent.change(inputPassword, { target: { value: mockUser.password } });
    expect(inputLogin).toHaveValue(mockUser.email);
    expect(inputPassword).toHaveValue(mockUser.password);

    const loginButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(loginButton);

    expect(await screen.findByText(/network error/i)).toBeInTheDocument();
  });


 it('user can login and gets redirected to Home Page', async () => {
   const { store } = renderWithRouter();

   fireEvent.change(await screen.findByPlaceholderText(/email/i), {
     target: { value: 'tony@stark.com' },
   });
   fireEvent.change(await screen.findByPlaceholderText(/password/i), {
     target: { value: '123' },
   });
   fireEvent.click(screen.getByRole('button', { name: 'Login' }));

   await waitFor(() => {
     const state = store.getState().auth;
     expect(state.isLoggedIn).toBe(true);
     expect(state.userName).toBe('Tony');
     expect(state.userId).toBe('ironman123');
   });

   expect(await screen.findByText('Tony')).toBeInTheDocument();

   expect(await screen.findByText(/Home Page \(Mock\)/i)).toBeInTheDocument();
 });


});
