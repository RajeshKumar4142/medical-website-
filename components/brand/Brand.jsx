import React from "react";
import Slider from "react-slick";
// import { client, client_1, client_2, client_3 } from "./import";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./brand.css";

const Brand = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    <div>
      <div className="brand-heading mt-5">
        <h1 className="brand_h1">TRUSTED CLIENT</h1>
      </div>
      <div className="car_brand">
        <Slider {...settings}>
          <div className="brand-logo">
            <img src="https://knackglobal.com/wp-content/uploads/2023/03/logo-8.svg" alt="car logo" />
          </div>
          <div className="brand-logo">
            <img src="https://knackglobal.com/wp-content/uploads/2023/03/logo-10.svg" alt="car logo" />
          </div>
          <div className="brand-logo">
            <img src="https://knackglobal.com/wp-content/uploads/2023/03/logo-1.svg" alt="car logo" />
          </div>
          <div className="brand-logo">
            <img src="https://knackglobal.com/wp-content/uploads/2023/03/logo-3.svg" alt="car logo" />
          </div>
          <div className="brand-logo">
            <img src="https://knackglobal.com/wp-content/uploads/2023/03/logo-7.svg" alt="car logo" />
          </div>
          <div className="brand-logo">
            <img src="https://knackglobal.com/wp-content/uploads/2023/03/logo-8.svg" alt="car logo" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Brand;