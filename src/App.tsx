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
import UserProfile from "./pages/UserProfile";
import ExchangeToken from "./pages/Login/ExchangeToken";
import Orders from "./pages/UserProfile/components/Orders";
import PersonalData from "./pages/UserProfile/components/PersonalData";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthRoute from "./components/AuthRoute";

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
        <Route path="/products">
          <Route path=":id" element={<Products />} />
        </Route>
        <Route path="/product">
          <Route path="params">
            <Route
              path=":id"
              element={
                <>
                  <Product />
                  <Params />
                </>
              }
            />
          </Route>
          <Route path="comments">
            <Route
              path=":id"
              element={
                <>
                  <Product />
                  <Comments />
                </>
              }
            />
          </Route>
        </Route>
        <Route path="/card" element={<Card />} />
        <Route
          path="/login"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthRoute>
              <SignUp />
            </AuthRoute>
          }
        />
        <Route path="/userprofile/:token" element={<ExchangeToken />} />
        <Route
          path="/userprofile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        >
          <Route path="orders" element={<Orders />} />
          <Route path="personaldata" element={<PersonalData />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
