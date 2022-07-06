import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { fetchProducts } from "./redux/productsSlice";
import { fetchCategories } from "./redux/categoriesSlice";

/* Styles */
import "./App.css";
import GlobalStyles from "./pages/ReusuableComponents/styles/GlobalStyled";

/* Pages */
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Params from "./pages/Product/components/Params";
import Comments from "./pages/Product/components/Comments";

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
        <Route path="login" element={<div>Login</div>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
