import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { getLogoSrc, getClassNames } from './data/helper';
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
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Analytics />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              toggle={toggle}
              setToggle={setToggle}
              getLogoSrc={getLogoSrc}
              getClassNames={getClassNames}
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
              toggle={toggle}
              getClassNames={getClassNames}
              setToggle={setToggle}
              getLogoSrc={getLogoSrc}
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
              toggle={toggle}
              getClassNames={getClassNames}
              setToggle={setToggle}
              getLogoSrc={getLogoSrc}
              addedProducts={addedProducts}
              setAddedProducts={setAddedProducts}
              total={total}
              userId={userId}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              toggle={toggle}
              getClassNames={getClassNames}
              setToggle={setToggle}
              getLogoSrc={getLogoSrc}
            />
          }
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Login
                toggle={toggle}
                getClassNames={getClassNames}
                setToggle={setToggle}
                getLogoSrc={getLogoSrc}
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
            <User
              toggle={toggle}
              getClassNames={getClassNames}
              setToggle={setToggle}
              getLogoSrc={getLogoSrc}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              userName={userName}
            />
          }
        />
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route
            path="/user/update-data"
            element={<UpdateData toggle={toggle} setToggle={setToggle} userId={userId} />}
          />
          <Route
            path="/user/last-orders"
            element={<LastOrders toggle={toggle} setToggle={setToggle} userId={userId} />}
          />
          <Route
            path="/user/theme-color"
            element={<ToggleTheme toggle={toggle} setToggle={setToggle} />}
          />
          <Route
            path="/user/points"
            element={<Points toggle={toggle} setToggle={setToggle} userId={userId} />}
          />
        </Route>
        <Route
          path="*"
          element={
            <NotFound
              toggle={toggle}
              getClassNames={getClassNames}
              setToggle={setToggle}
              getLogoSrc={getLogoSrc}
            />
          }
        />
      </Routes>
      <Navbar
        toggle={toggle}
        getClassNames={getClassNames}
        userName={userName}
        isLoggedIn={isLoggedIn}
        addedProducts={addedProducts}
      />
    </>
  );
};

export default App;
