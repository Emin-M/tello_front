import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { fetchCategories } from "./redux/actions/categoryActions";
import { fetchCards } from "./redux/actions/cardActions";
import { getUser } from "./redux/actions/userActions";

/* Styles */
import GlobalStyles from "./components/ReusuableComponents/styles/GlobalStyled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

/* Pages */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RoutesPage from "./routes";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  /* fetch categories and card first app render */
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchCards());
    localStorage.getItem("jwt") && dispatch(getUser());
  }, []);

  /* scroll top each time location change */
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
      <RoutesPage />
      <Footer />
    </div>
  );
};

export default App;
