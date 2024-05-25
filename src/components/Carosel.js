import React from "react";
import Slider from "react-slick";
import "../css/benefits.css";
import Image1 from "../assets/benefit-img1.png";
import Image2 from "../assets/benefit-img2.png";
import Image3 from "../assets/benefit-img3.png";

function Carosel() {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    arrows: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // initialSlide: 0,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="img-benefit">
          <img src={Image1} className=""></img>
        </div>

        <div className="img-benefit">
          <img src={Image2} className=""></img>
        </div>

        <div className="img-benefit">
          <img src={Image3} className=""></img>
        </div>
      </Slider>
    </div>
  );
}

export default Carosel;
