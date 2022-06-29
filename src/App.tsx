import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { addProduct } from "./redux/productsSlice";

/* Styles */
import "./App.css";
import GlobalStyles from "./components/styles/GlobalStyled";

/* Pages */
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
