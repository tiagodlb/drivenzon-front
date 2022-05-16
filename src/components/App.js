import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartPage from "./pages/CartPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import CheckOutPage from "./pages/CheckOutPage";
import SignInPage from "./pages/SignInPage";
import ProductPage from "./pages/ProductPage";
import UserContext from "./context/useContext.js";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState("");

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/SignInPage" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="/CartPage/:id" element={<CartPage />} />
            <Route path="/shipping" element={<CheckOutPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
