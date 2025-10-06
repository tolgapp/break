import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import type { Mock } from 'vitest';
import { vi } from 'vitest';
import Signup from '../src/components/Signup';
import { BACKEND_URL } from '../src/data/helper';
import authReducer from '../src/store/reducers/authSlice';
import toggleReducer from '../src/store/reducers/toggleSlice';
import { mockUser } from './testHelperData';

vi.mock('axios');

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        auth: authReducer,
        toggle: toggleReducer,
      },
      preloadedState,
    }),
    route = '/',
  } = {}
) {
  window.history.pushState({}, 'Test page', route);

  return {
    store,
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
      </Provider>
    ),
  };
}

describe('user can sign up with mockData', () => {
  beforeEach(() => {
    (axios.post as Mock).mockResolvedValue({
      data: mockUser,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('user can signup', async () => {
    renderWithProviders(<Signup />);

    fireEvent.change(screen.getByPlaceholderText('Name'), {
      target: { value: mockUser.name },
    });
    fireEvent.change(screen.getByPlaceholderText('Surname'), {
      target: { value: mockUser.surname },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: mockUser.email },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: mockUser.password },
    });

    fireEvent.click(screen.getByRole('button', { name: /signup/i }));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        `${BACKEND_URL}/signup`,
        expect.objectContaining({
          name: mockUser.name,
          surname: mockUser.surname,
          email: mockUser.email,
          password: mockUser.password,
        })
      );
    });
  });

  it('should not submit if some of fields are empty', async () => {
    renderWithProviders(<Signup />);

    fireEvent.change(screen.getByPlaceholderText('Name'), {
      target: { value: mockUser.name },
    });
  
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: mockUser.email },
    });
    
    fireEvent.click(screen.getByRole('button', { name: /signup/i }));

    await waitFor(() => {
      expect(axios.post).not.toHaveBeenCalled();
    });
  });

  it('should not submit if all fields are empty', async () => {
    renderWithProviders(<Signup />);
    fireEvent.click(screen.getByRole('button', { name: /signup/i }));
    await waitFor(() => {
      expect(axios.post).not.toHaveBeenCalled();
    });
  });
});
