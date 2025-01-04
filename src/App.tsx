import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import Products from "./components/Products";

const getClassNames = (toggle: boolean): string =>
  `${toggle ? "bg-slate-50 text-black" : "bg-gray-900 text-white"}`;

const getLogoSrc = (toggle: boolean) =>
  `/logo${toggle ? "/breakitblack" : "/breakitwhite"}.svg`;

const App = () => {
  const [toggle, setToggle] = useState(false);

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
            />
          }
        />
        <Route
          path="/products"
          element={<Products   toggle={toggle}
          getClassNames={getClassNames}
          setToggle={setToggle}
          getLogoSrc={getLogoSrc} />}
        />
        <Route path="/order" element={<Order />} />
        {/* Path for all other Routes that are not available */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
