import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";
import Cameras from "./components/Cameras";
import Lenses from "./components/Lenses";
import Filters from "./components/Filters";
import HotDeals from "./components/HotDeals";
import Accessories from "./components/Accessories";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/cameras" element={<Cameras />} />
        <Route path="lenses" element={<Lenses />} />
        <Route path="filters" element={<Filters />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="hotdeals" element={<HotDeals />} />
      </Routes>
    </div>
  );
}

export default App;
