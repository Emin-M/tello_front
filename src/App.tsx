import { Route, Routes } from "react-router-dom";
import "./App.css";
import GlobalStyles from "./components/styles/GlobalStyles";

/* Pages */
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
