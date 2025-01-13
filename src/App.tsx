import { Route, Routes } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import User from "./pages/User";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { nanoid } from "nanoid";
import { getLogoSrc, getClassNames, Product } from "./data/helper";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [addedProducts, setAddedProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

  const addToCart = (product: Product) => {
    const productWithInstanceId = { ...product, instanceId: nanoid() };
    setAddedProducts((prev) => [...prev, productWithInstanceId]);
  };

  const handleClick = useCallback((id: number) => {
    setSelectedProductId(id);
    setOpenDetail(true);
    console.log("Clicked Container", id);
  }, []);

  const closeDetail = useCallback(() => {
    setOpenDetail(false);
    setSelectedProductId(null);
  }, []);

  useEffect(() => {
    const totalPrice = addedProducts.reduce(
      (acc, product) => acc + product.price[0],
      0
    );
    setTotal(totalPrice);
  }, [addedProducts]);

  return (
    <>
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
            />
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
            <Login
              toggle={toggle}
              getClassNames={getClassNames}
              setToggle={setToggle}
              getLogoSrc={getLogoSrc}
            />
          }
        />
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
    </>
  );
};

export default App;
