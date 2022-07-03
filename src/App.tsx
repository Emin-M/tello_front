import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { fetchCategories, fetchProducts } from "./redux/productsSlice";

/* Styles */
import "./App.css";
import GlobalStyles from "./pages/ReusuableComponents/styles/GlobalStyled";

/* Pages */
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<div>Login</div>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
