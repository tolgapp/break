import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import User from "./pages/User";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { getLogoSrc, getClassNames, Product } from "./data/helper";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [addedProducts, setAddedProducts] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setAddedProducts((prev) => [...prev, product]);
  };
  

  useEffect(() => {
    console.log(addedProducts)
  }, [addedProducts])

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
              addedProdutcts={addedProducts}
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
        {/* Path for all other Routes that are not available */}
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
