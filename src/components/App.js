import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import CheckOutPage from "./pages/CheckOutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
