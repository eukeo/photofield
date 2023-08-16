import "./Home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="homeContainer">
      <div className="fourSquareContainer" data-aos="fade-in">
        <div className="homeBanner__square1">
          <h1 className="siteName">photofield</h1>
          <h4 className="slogan">
            your ultimate destination for photography products
          </h4>
          <img src="https://wallpapercave.com/wp/wp1845526.jpg"></img>
        </div>
        <div className="homeBanner__square2">
          <h4>
            discover a world of premium photography gear and accessories that
            will elevate your creative journey. Whether you're a professional
            photographer or an enthusiastic hobbyist, we have everything you
            need to capture life's moments with unparalleled precision and
            artistry.
          </h4>
        </div>
        <div className="homeBanner__square3">
          <h4>
            unleash your creativity with our carefully selected lineup of
            photography products. From cutting-edge cameras to versatile lenses,
            filters, and more - we offer tools that transform ordinary scenes
            into extraordinary captures. browse our featured products and embark
            on a journey to capture moments like never before.
          </h4>
        </div>
        <div className="homeBanner__square4">
          <h4>browse filters</h4>
          <img src="https://i.ytimg.com/vi/fuU-QM2ZnUs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCqBslO5RDVUVAWjLyw0Ap-sgrBiwg"></img>
        </div>
      </div>
      <div
        className="productPreview"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <div className="bestSeller" data-aos="fade-up" data-aos-duration="2000">
          <h1>Best Seller</h1>
          <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6323/6323759_sd.jpg;maxHeight=640;maxWidth=550"></img>
          <h4>
            Canon - EOS Rebel T7 DSLR Video Two Lens Kit with EF-S 18-55mm and
            EF 75-300mm Lenses
          </h4>
          <h2>$549.99</h2>
        </div>
        <div className="dealDay" data-aos="fade-up" data-aos-duration="2000">
          <h1>Deal of the Day</h1>
          <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6323/6323758_sd.jpg;maxHeight=640;maxWidth=550"></img>
          <h4>
            Canon - EOS Rebel T7 DSLR Video Camera with 18-55mm Lens - Black
          </h4>
          <h2>$399.99</h2>
        </div>
        <div className="newArrival" data-aos="fade-up" data-aos-duration="2000">
          <h1>New Arrival</h1>
          <img src="https://m.media-amazon.com/images/I/81Pp8uMX80L._AC_SL1500_.jpg"></img>
          <h4>Walking Way's 1/4 Black Pro Mist Diffusion Filter 67mm</h4>
          <h2>$29.74</h2>
        </div>
      </div>
      <section
        className="aboutSection"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h2>about</h2>
        at photofield, we're passionate about photography just like you. our
        mission is to provide photographers of all levels with top-notch
        equipment that empowers them to tell their visual stories. with years of
        experience and a deep understanding of the industry, we curate a diverse
        range of products that cater to your unique needs.
      </section>
      <section className="ads" data-aos="fade-in" data-aos-duration="2000">
        <img src="https://store.bandccamera.com/cdn/shop/products/prism-lens-fx-cine-soft-12-fx-filter-77mm-105399.png?v=1677944711&width=1390"></img>
        <img src="https://res.cloudinary.com/codegrand/image/upload/v1629800764/nw6u45hcj6cee9xyyeyl.png"></img>
        <img src="https://prismlensfx.com/cdn/shop/products/IMG_8137_1800x1800.jpg?v=1658096395"></img>
        <img src="https://media.karousell.com/media/photos/products/2021/10/30/dream_fx_filter_82mm_1635589936_ad7b9b73_progressive.jpg"></img>
        <img src="https://magazin.photosynthesis.bg/192358-large_default/filtur-prism-lens-fx-prizm-lens-fx-dream.jpg"></img>
      </section>
      <footer data-aos="fade-in" data-aos-duration="2000">
        <h1>photofield</h1>
        <h6>About</h6>
        <h6>Contact</h6>
      </footer>
    </div>
  );
};

export default Home;
