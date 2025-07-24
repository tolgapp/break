import { Navigate, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import User from './pages/User';
import NotFound from './pages/NotFound';
import Login from './components/Login';
import Signup from './components/Signup';
import UpdateData from './components/UpdateData';
import Navbar from './components/Navbar';
import LastOrders from './components/LastOrders';
import Points from './components/Beans';
import ProtectedRoute from './components/ProtectedRoute';
import ToggleTheme from './components/ToggleTheme';
import coffeeData from './data/coffee.json'
import { useCart } from './hooks/useCart';
import { useProductDetail } from './hooks/useProductDetail';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { useEffect } from 'react';
import { setProducts } from './store/reducers/productSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(coffeeData.coffeeSpecialties));
  }, []);
  const products = useSelector((state: RootState) => state.products.products); 

  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const { total, addedProducts, setAddedProducts, addToCart } = useCart();
  const { openDetail, closeDetail, selectedProductId, handleClick } = useProductDetail();

  const isProductsLoaded = products && products.length > 0;

  if (!isProductsLoaded) {
    return <div>Loading Products</div>;
  }

  return (
    <>
      <Analytics />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              setAddedProducts={setAddedProducts}
              openDetail={openDetail}
              closeDetail={closeDetail}
              selectedProductId={selectedProductId}
              handleClick={handleClick}
            />
          }
        />
        <Route
          path="/products"
          element={
            <Products
              addToCart={addToCart}
              setAddedProducts={setAddedProducts}
              openDetail={openDetail}
              productId={selectedProductId}
              handleClick={handleClick}
              closeDetail={closeDetail}
              selectedProductId={selectedProductId}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              addedProducts={addedProducts}
              setAddedProducts={setAddedProducts}
              total={total}
              closeDetail={closeDetail}
            />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/profile" element={<User />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/user/update-data" element={<UpdateData />} />
          <Route path="/user/last-orders" element={<LastOrders />} />
          <Route path="/user/theme-color" element={<ToggleTheme />} />
          <Route path="/user/points" element={<Points />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Navbar addedProducts={addedProducts} />
    </>
  );
};

export default App;
