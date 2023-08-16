import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="headerBanner">
      <Link to="/" className="cornerLogo">
        PhotoField
      </Link>
      <div className="searchContainer">
        <form>
          <input type="text" className="inputBar" placeholder="Search"></input>
          <a className="searchButton">
            <img src="https://icon-library.com/images/search-icon-white-png/search-icon-white-png-18.jpg"></img>
          </a>
        </form>
      </div>
      <nav className="navBar">
        <ul>
          <Link to="allproducts">all products</Link>
          <Link to="cameras">cameras</Link>
          <Link to="lenses">lenses</Link>
          <Link to="accessories">accessories</Link>
          <Link to="hotdeals">hot deals</Link>
        </ul>
      </nav>
      <div className="cartButton">
        <a>
          <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/shopping-basket-icon-18-256.png"></img>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
