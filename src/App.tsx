import { useEffect, useState, useCallback } from "react";
import { nanoid } from "nanoid";
import { Navigate, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Product, getLogoSrc, getClassNames } from "./data/helper";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UpdateData from "./components/UpdateData";
import Navbar from "./components/Navbar";
import LastOrders from "./components/LastOrders";
import Points from "./components/Beans";
import ProtectedRoute from "./components/ProtectedRoute";
import ToggleTheme from "./components/ToggleTheme";


const App = () => {
  const [toggle, setToggle] = useState(false);
  const [addedProducts, setAddedProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [openDetail, setOpenDetail] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedUserName = localStorage.getItem("userName");
    const storedUserId = localStorage.getItem("userId");

    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
      if (storedUserName) setUserName(storedUserName);
      if (storedUserId) setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    const storedProducts = localStorage.getItem("addedProducts");
    const storedTotal = localStorage.getItem("total");

    if (storedProducts) {
      setAddedProducts(JSON.parse(storedProducts));
    }
    if (storedTotal) {
      setTotal(Number(storedTotal));
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", userName);
      localStorage.setItem("userId", userId);
    } else {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userName");
      localStorage.removeItem("userId");
    }
  }, [isLoggedIn, userName, userId]);

  const addToCart = (product: Product) => {
    const productWithInstanceId = { ...product, instanceId: nanoid() };
    setAddedProducts((prev) => {
      const updatedProducts = [...prev, productWithInstanceId];
      localStorage.setItem("addedProducts", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  useEffect(() => {
    const totalPrice = addedProducts.reduce((acc, product) => {
      const productPrice = Array.isArray(product.price)
        ? product.prices.reduce((sum, price) => sum + price, 0)
        : product.price;
      return acc + productPrice;
    }, 0);

    setTotal(totalPrice);
    localStorage.setItem("total", totalPrice.toString());
  }, [addedProducts]);

  const handleClick = useCallback((id: number) => {
    setSelectedProductId(id);
    setOpenDetail(true);
  }, []);

  const closeDetail = useCallback(() => {
    setOpenDetail(false);
    setSelectedProductId(null);
  }, []);

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
            element={
              <UpdateData
                toggle={toggle}
                setToggle={setToggle}
                userId={userId}
              />
            }
          />
          <Route
            path="/user/last-orders"
            element={
              <LastOrders
                toggle={toggle}
                setToggle={setToggle}
                userId={userId}
              />
            }
          />
          <Route
            path="/user/theme-color"
            element={<ToggleTheme toggle={toggle} setToggle={setToggle} />}
          />
          <Route
            path="/user/points"
            element={
              <Points toggle={toggle} setToggle={setToggle} userId={userId} />
            }
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
