import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="headerBanner">
      <h6>Logo</h6>
      <div className="searchContainer">
        <input type="text" className="inputBar" placeholder="Search"></input>
        <button className="searchButton">Search</button>
      </div>
      <nav className="navBar">
        <ul>
          <Link to="/">Home</Link>
          <Link to="allproducts">All Products</Link>
          <Link to="cameras">Cameras</Link>
          <Link to="lenses">Lenses</Link>
          <Link to="accessories">Accessories</Link>
          <Link to="hotdeals">Hot Deals</Link>
        </ul>
      </nav>
      <button className="cartButton">Cart</button>
    </header>
  );
};

export default NavBar;
