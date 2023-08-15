import "./Home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeBanner">
        <h1 className="siteName">PhotoField</h1>
        <img src="https://wallpapercave.com/wp/wp1845526.jpg"></img>
      </div>
      <div className="productPreview">
        <div className="bestSeller">
          <h1>Best Seller</h1>
          <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6323/6323759_sd.jpg;maxHeight=640;maxWidth=550"></img>
          <h4>
            Canon - EOS Rebel T7 DSLR Video Two Lens Kit with EF-S 18-55mm and
            EF 75-300mm Lenses
          </h4>
          <h2>$549.99</h2>
        </div>
        <div className="dealDay">
          <h1>Deal of the Day</h1>
          <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6323/6323758_sd.jpg;maxHeight=640;maxWidth=550"></img>
          <h4>
            Canon - EOS Rebel T7 DSLR Video Camera with 18-55mm Lens - Black
          </h4>
          <h2>$399.99</h2>
        </div>
        <div className="newArrival">
          <h1>New Arrival</h1>
          <img src="https://m.media-amazon.com/images/I/81Pp8uMX80L._AC_SL1500_.jpg"></img>
          <h4>Walking Way's 1/4 Black Pro Mist Diffusion Filter 67mm</h4>
          <h2>$29.74</h2>
        </div>
      </div>
      <div className="adContainer">
        <div className="leftAd">
          <img src="https://d1rzxhvrtciqq1.cloudfront.net/uploads/images/listingimage/586445/image/big-90a2603ec444ec215b2405cb816691ec.png"></img>
        </div>
      </div>
      <footer>
        <ul>
          <h6>About</h6>
          <h6>Contact</h6>
          <h6>Careers</h6>
          <h6>Products</h6>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
