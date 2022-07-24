import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { fetchCategories } from "./redux/actions/categoryActions";
import { fetchCards } from "./redux/actions/cardActions";

/* Styles */
import GlobalStyles from "./components/ReusuableComponents/styles/GlobalStyled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

/* Pages */
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Params from "./pages/Product/components/Params";
import Comments from "./pages/Product/components/Comments";
import Card from "./pages/Card";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchCards());
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return (
    <div className="App">
      <GlobalStyles />
      <ToastContainer />;
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path=":id" element={<Products />} />
        </Route>
        <Route path="/product" element={<Product />}>
          <Route path="params" element={<Params />}>
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="comments" element={<Comments />}>
            <Route path=":id" element={<Comments />} />
          </Route>
        </Route>
        <Route path="/card" element={<Card />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
