import Login from '../src/components/Login';
import authReducer from '../src/store/reducers/authSlice';
import toggleReducer from '../src/store/reducers/toggleSlice';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';

const mockUser = {
  email: 'mock@user.com',
  password: '123',
};

const renderWithRouter = () => {
  const store = configureStore({
    reducer: {
      toggle: toggleReducer,
      auth: authReducer,
    },
    preloadedState: {
      toggle: { toggle: false },
      auth: { isLoggedIn: false, userId: '', userName: '' },
    },
  });

  const utils = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  return {
    store,
    ...utils,
  };
};

describe('testing user login', () => {
  it('user can not log in with mock data', async () => {
    renderWithRouter();

    const inputLogin = await screen.findByPlaceholderText(/email/i);
    fireEvent.change(inputLogin, { target: { value: mockUser.email } });
    const inputPassword = await screen.findByPlaceholderText(/password/i);
    fireEvent.change(inputPassword, { target: { value: mockUser.password } });
    expect(inputLogin).toHaveValue(mockUser.email);
    expect(inputPassword).toHaveValue(mockUser.password);

    const loginButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(loginButton);

    screen.debug();

    expect(await screen.findByText(/network error/i)).toBeInTheDocument();
  });
});
