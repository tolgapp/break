import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi, afterEach } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../src/store/reducers/toggleSlice';
import authReducer from '../src/store/reducers/authSlice';
import productReducer from '../src/store/reducers/productSlice';
import Home from '../src/pages/Home';
import Cart from '../src/pages/Cart';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import { mockProducts } from './testHelperData';
import { Provider } from 'react-redux';

const mockAddToCart = vi.fn();

const renderWithRouter = (propsOverride = {}) => {
  const store = configureStore({
    reducer: {
      toggle: toggleReducer,
      auth: authReducer,
      products: productReducer,
    },
    preloadedState: {
      toggle: { toggle: false },
      auth: { isLoggedIn: false, userId: '', userName: '' },
      products: {
        products: mockProducts,
      },
    },
  });

  const utils = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addToCart={() => {}}
                handleClick={() => {}}
                openDetail={false}
                closeDetail={() => {}}
                selectedProductId={1}
                setAddedProducts={() => {}}
                {...propsOverride}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                total={0}
                addedProducts={[]}
                closeDetail={() => {}}
                setAddedProducts={() => {}}
              />
            }
          />
        </Routes>
      </MemoryRouter>
    </Provider>
  );

  return {
    store,
    ...utils,
  };
};

describe('Home', () => {
  it('renders Logo and random product header text', async () => {
    renderWithRouter();

    expect(await screen.findByAltText('Logo')).toBeInTheDocument();
    const images = await screen.findAllByRole('img');
    expect(images.length).toBeGreaterThan(2);
    expect(
      await screen.findByText('Selected Coffee Specialties')
    ).toBeInTheDocument();
  });

  it('shows offer details after click on the offer image', async () => {
    renderWithRouter();

    const image = await screen.findByLabelText(/offerImage-0/i);
    fireEvent.click(image);

    expect(
      await screen.findByRole('heading', {
        name: /4Friends Offer: Buy 4, Pay for 3!/i,
      })
    ).toBeInTheDocument();

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    const heading = await screen.findByRole('heading', { name: /Espresso/i });
    expect(heading).toBeInTheDocument();
  });

  it('shows a specified product & product details on button click', async () => {
    renderWithRouter();

    const button = screen.getByTestId('product-button-3');
    fireEvent.click(button);

    const heading = await screen.findByRole('heading', { name: /Espresso/i });
    expect(heading).toBeInTheDocument();
  });

  it('displays product detail for selected product', async () => {
    renderWithRouter({
      openDetail: true,
      selectedProductId: 3,
    });

    const heading = await screen.findByRole('heading', {
      level: 3,
      name: /Espresso/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('adds a product to cart when size is selected and add button clicked', async () => {
    renderWithRouter({
      openDetail: true,
      selectedProductId: 3,
      addToCart: mockAddToCart,
    });

    const sizeButton = await screen.findByRole('button', {
      name: /Single Shot/i,
    });
    fireEvent.click(sizeButton);

    const addToCartBtn = await screen.findByLabelText(/add to cart/i);
    fireEvent.click(addToCartBtn);

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });

  it('navigates to Cart page after clicking Go to Checkout', async () => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});

    renderWithRouter({
      openDetail: true,
      selectedProductId: 3,
    });

    const goToCartBtn = await screen.findByLabelText(/go to checkout/i);
    fireEvent.click(goToCartBtn);

    expect(
      await screen.findByText(/no caffeine detected/i)
    ).toBeInTheDocument();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.clearAllMocks();
  });
});
