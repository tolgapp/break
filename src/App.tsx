import { useEffect, useState, useCallback } from "react";
import { nanoid } from "nanoid";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Product, getLogoSrc, getClassNames } from "./data/helper";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [addedProducts, setAddedProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

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
        ? product.price.reduce((sum, p) => sum + p, 0) 
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
