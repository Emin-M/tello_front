import { Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalStyles from "./components/styles/GlobalStyled";

/* Pages */
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
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
