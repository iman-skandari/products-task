import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./page/Landing/Landing";
import Navbar from "./components/Navbar/navbar";
import ProductList from "./components/ProductList/ProductList";
import ShowProduct from "./components/ShowProduct/ShowProduct";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/product/:id" element={<ShowProduct />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
