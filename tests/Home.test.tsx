import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it, vi } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';
import toggleReducer from '../src/store/reducers/toggleSlice';
import authReducer from '../src/store/reducers/authSlice';
import productReducer from '../src/store/reducers/productSlice';
import Home from '../src/pages/Home';
import Cart from '../src/pages/Cart';
import { Routes, Route } from 'react-router-dom';

const mockProducts = [
  {
    id: 1,
    name: 'Cappuccino',
    description: 'A classic blend of espresso, steamed milk, and foam.',
    ingredients: ['Espresso', 'Steamed milk', 'Foamed milk'],
    sizes: ['Small', 'Medium', 'Large'],
    image: 'cappuccino.png',
    prices: [3.45, 4.45, 4.95],
    tags: ['Vegetarian', 'Fresh', 'All'],
  },
  {
    id: 2,
    name: 'Americano',
    description: 'Espresso diluted with hot water.',
    ingredients: ['Espresso', 'Hot water'],
    sizes: ['Small', 'Medium', 'Large'],
    image: 'americano.png',
    prices: [3.45, 4.45, 4.95],
    tags: ['Vegan', 'Sugar-Free', 'Lactose-Free', 'All'],
  },
  {
    id: 3,
    name: 'Espresso',
    description:
      'A rich and strong coffee shot, perfect for a quick energy boost.',
    ingredients: ['Espresso'],
    sizes: ['Single Shot', 'Double Shot'],
    image: 'espresso.png',
    prices: [2.5, 4.45],
    tags: ['Vegetarian', 'Bold', 'All'],
  },
  {
    id: 4,
    name: 'Iced Macchiato',
    description: 'Espresso with milk, caramel, and ice.',
    ingredients: ['Espresso', 'Milk', 'Caramel syrup', 'Ice'],
    sizes: ['Small', 'Medium', 'Large'],
    image: 'icedcaramellmacchiato.png',
    prices: [4.45, 5.45, 6.95],
    tags: ['Vegetarian', 'Fresh', 'All'],
  },
  {
    id: 5,
    name: 'Affogato',
    description: 'Espresso poured over vanilla ice cream.',
    ingredients: ['Espresso', 'Vanilla ice cream'],
    sizes: ['Small'],
    image: 'affogato.png',
    prices: [4.95],
    tags: ['Vegetarian', 'All'],
  },
  {
    id: 6,
    name: 'Flat White',
    description: 'A velvety smooth espresso with steamed milk.',
    ingredients: ['Espresso', 'Steamed milk'],
    sizes: ['Small', 'Medium', 'Large'],
    image: 'flatwhite.png',
    prices: [3.45, 4.45, 4.95],
    tags: ['Vegetarian', 'Fresh', 'All'],
  },
];

const mockAddToCart = vi.fn();
const mockHandleClick = vi.fn();
const mockCloseDetail = vi.fn();

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
      screen.findByRole('heading', {
        name: /4Friends Offer: Buy 4, Pay for 3!/i,
      })
    );

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    const heading = await screen.findByRole('heading', { name: /Espresso/i });
    expect(heading).toBeInTheDocument();
  });

  it('shows an specified product & product details on button click', async () => {
    renderWithRouter();

    const button = screen.getByTestId('product-button-4');
    fireEvent.click(button);

    const heading = await screen.findByRole('heading', { name: /Espresso/i });
    expect(heading).toBeInTheDocument();
  });

  it('navigates to Cart page after clicking Go to Checkout', async () => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});

    renderWithRouter({
      addToCart: mockAddToCart,
      handleClick: mockHandleClick,
      closeDetail: mockCloseDetail,
      openDetail: true,
      selectedProductId: 3,
    });

    const heading = await screen.findByRole('heading', {
      level: 3,
      name: /Espresso/i,
    });
    expect(heading).toBeInTheDocument();

    const espressoButton = await screen.findByTestId('product-button-3');
    fireEvent.click(espressoButton);

    const sizeButton = await screen.findByRole('button', {
      name: /Single Shot/i,
    });
    fireEvent.click(sizeButton);

    const addToCartBtn = await screen.findByLabelText(/add to cart/i);
    fireEvent.click(addToCartBtn);

    const goToCartBtn = await screen.findByLabelText(/go to checkout/i);
    fireEvent.click(goToCartBtn);

    expect(
      await screen.findByText(/no caffeine detected/i)
    ).toBeInTheDocument();
  });
});
