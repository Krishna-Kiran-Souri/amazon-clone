import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Mi_days/Nov/Bunting/D18787601_BAU_Xiaomi_Family_DesktopHero_1500x600._CB417082045_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1}
            title={`OnePlus 7T Glacier Blue (8GB RAM+256GB Storage)by OnePlus`}
            image="https://images-eu.ssl-images-amazon.com/images/I/41CK68JShbL._AC_US160_FMwebp_QL70_.jpg"
            rating={3}
            price={19.99}
          />
          <Product
            id={2}
            image="https://m.media-amazon.com/images/I/41VDS6f7C3L._SY346_.jpg"
            title={"AirBeamTV Screen Mirroring Receiver by  AirBeamTV BV"}
            rating={4}
            price={29.99}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title={"AirScreen - AirPlay & Google Cast & Miracast & DLNA"}
            image="https://images-eu.ssl-images-amazon.com/images/I/31gweotv3lL.jpg"
            rating={5}
            price={19.99}
          />
          <Product
            id={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/51JxoKpo8zL.png"
            title={"AirScreen - AirPlay & Google Cast & Miracast & DLNA"}
            rating={3}
            price={19.99}
          />
          <Product
            id={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61TT-JBwf-L._SL1500_.jpg"
            title={`
           ReeCure Anti Ageing Face Cream With Bio Active Protein For Women, 50g`}
            rating={3}
            price={19.99}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            image="https://m.media-amazon.com/images/I/41dF7XWTCfL._AC_SR160,160_.jpg"
            title={`Spawake Moisturising Fairness Day Cream, Face Cream with SPF 25/PA++, 50g`}
            rating={3}
            price={19.99}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
