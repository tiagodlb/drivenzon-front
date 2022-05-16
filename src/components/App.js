import { BrowserRouter, Routes, Route } from "react-router-dom";

import CartPage from "./pages/CartPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import CheckOutPage from "./pages/CheckOutPage";
import SignInPage from "./pages/SignInPage";
import ProductPage from "./pages/ProductPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} exact/>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/signin" element={<SignInPage />}/>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
