import React from "react";
import Slider from "react-slick";

function Cardcarosel() {
  var settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        
        <div className="card-testimoni">
          <h3 className="petik">"</h3>
          <p className="desc-testimoni">
            Suka banget sama Pegadaian Digital. Gadai tabungan emas langsung
            dari HP, praktis dan mudah banget! Cocok buat yang butuh dana cepat
            tanpa harus keluar rumah.
          </p>
          <p className="by-testimoni">Intan Siagan</p>
        </div>

        <div className="card-testimoni">
          <h3 className="petik">"</h3>
          <p className="desc-testimoni">
            Suka banget sama Pegadaian Digital. Gadai tabungan emas langsung
            dari HP, praktis dan mudah banget! Cocok buat yang butuh dana cepat
            tanpa harus keluar rumah.
          </p>
          <p className="by-testimoni">Intan Siagan</p>
        </div>

        <div className="card-testimoni">
          <h3 className="petik">"</h3>
          <p className="desc-testimoni">
            Suka banget sama Pegadaian Digital. Gadai tabungan emas langsung
            dari HP, praktis dan mudah banget! Cocok buat yang butuh dana cepat
            tanpa harus keluar rumah.
          </p>
          <p className="by-testimoni">Intan Siagan</p>
        </div>

        <div className="card-testimoni">
          <h3 className="petik">"</h3>
          <p className="desc-testimoni">
            Suka banget sama Pegadaian Digital. Gadai tabungan emas langsung
            dari HP, praktis dan mudah banget! Cocok buat yang butuh dana cepat
            tanpa harus keluar rumah.
          </p>
          <p className="by-testimoni">Intan Siagan</p>
        </div>

        <div className="card-testimoni">
          <h3 className="petik">"</h3>
          <p className="desc-testimoni">
            Suka banget sama Pegadaian Digital. Gadai tabungan emas langsung
            dari HP, praktis dan mudah banget! Cocok buat yang butuh dana cepat
            tanpa harus keluar rumah.
          </p>
          <p className="by-testimoni">Intan Siagan</p>
        </div>

        <div className="card-testimoni">
          <h3 className="petik">"</h3>
          <p className="desc-testimoni">
            Suka banget sama Pegadaian Digital. Gadai tabungan emas langsung
            dari HP, praktis dan mudah banget! Cocok buat yang butuh dana cepat
            tanpa harus keluar rumah.
          </p>
          <p className="by-testimoni">Intan Siagan</p>
        </div>
      </Slider>
    </div>
  );
}

export default Cardcarosel;
