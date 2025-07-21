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
import { useAuth } from './hooks/useAuth';
import { useCart } from './hooks/useCart';
import { useProductDetail } from './hooks/useProductDetail';

const App = () => {
  const { isLoggedIn, setIsLoggedIn, userName, setUserName, userId, setUserId } = useAuth();
  const { total, addedProducts, setAddedProducts, addToCart } = useCart();
  const { openDetail, closeDetail, selectedProductId, handleClick } = useProductDetail();

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
              isLoggedIn={isLoggedIn}
              userName={userName}
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
              userId={userId}
              isLoggedIn={isLoggedIn}
              closeDetail={closeDetail}
            />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Login
                setIsLoggedIn={setIsLoggedIn}
                setUserName={setUserName}
                setUserId={setUserId}
              />
            )
          }
        />
        <Route
          path="/profile"
          element={
            <User isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userName={userName} />
          }
        />
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/user/update-data" element={<UpdateData userId={userId} />} />
          <Route path="/user/last-orders" element={<LastOrders userId={userId} />} />
          <Route path="/user/theme-color" element={<ToggleTheme />} />
          <Route path="/user/points" element={<Points userId={userId} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Navbar userName={userName} isLoggedIn={isLoggedIn} addedProducts={addedProducts} />
    </>
  );
};

export default App;
