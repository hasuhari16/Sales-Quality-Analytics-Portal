import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SalesDash from "./Components/SalesDash";
import QualityDah from "./Components/QualityDah";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sales" element={<SalesDash />} />
          <Route path="/quality" element={<QualityDah />} />
        </Routes>
      </BrowserRouter>
      {/* <Home />
      <Dashboards /> */}
    </div>
  );
}

export default App;
