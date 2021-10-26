import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home-image"
        />
        <div className="home-row">
          <Product
            id="12321341"
            title="Playstation DualSense Wireless Controller"
            price={69.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/612bjwBuobS._SL1500_.jpg"
            alt=""
          />
          <Product
            id="12381341"
            title="You Don't Know JS: this & Object Prototypes"
            price={56.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41MZdroe73L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
            alt=""
          />
        </div>
        <div className="home-row">
          <Product
            id="49538094"
            title="Apple iPhone 11 Pro Max, 512GB, Space Gray"
            price={849.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/81LmL94PUvS._AC_SL1500_.jpg"
            alt=""
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            alt=""
          />
          <Product
            id="32543545"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            alt=""
          />
        </div>
        <div className="home-row">
          <Product
            id="4903850"
            title="2021 Newest Dell Inspiron 3000 Laptop, 15.6 HD Display, Intel Celeron N4020 Processor, 8GB DDR4 RAM, 128GB PCIe SSD, Online Meeting Ready, Webcam, WiFi, HDMI, Bluetooth, Win10 Home, Black"
            price={429.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/81YXo+mgfAS._AC_SL1500_.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
