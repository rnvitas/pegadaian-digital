import "../css/testimoni.css";
import React from "react";
import Cardcarosel from "./Cardcarosel";
// import Image from "../assets/keamanan.png"; // Assuming the image is in a subfolder named 'images'

function Testimoni() {
  return (
    <div className="container-testimoni">
      <div className="wrapper-body">
        <div className="heading-testimoni">
          <h6 className="tagline">#BanyakBisanyaBanyakPakainya</h6>
          <h2 className="headline-testimoni">Apa Kata Sahabat Pegadaian?</h2>
        </div>
        <div className="row wrapper-body">
          <div className="col-lg-12 ">
            <div className="carosel-testimoni">
              <div className="wrapper-bodya">
                <Cardcarosel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimoni;
