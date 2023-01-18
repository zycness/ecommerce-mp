import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "../src/pages/SingleProduct";
import Products from "../src/pages/Products";
import Cart from "../src/components/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./index.css";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:product' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
