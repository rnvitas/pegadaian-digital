import "../css/promotion.css";
import Image from "../assets/promotion.png";
import Appstore from "../assets/appstore-download 1.png";
import Playstore from "../assets/googleplay-download 1.png";
function Promotion() {
  return (
    <div className="container-promotion">
      <div className="wrapper-body">
        <div className="row wrapper-body">
          <div className="col-lg-4">
            <img className="img-fluid" src={Image}></img>
          </div>
          <div className="col-lg-8">
            <div className="heading-promotion">
              <h6 className="tagline">#BanyakBisanyaBanyakPakainya</h6>
              <h2 className="title-promotion">
                Solusi Kebutuhanmu Lebih Dari Sekedar Gadai!
              </h2>
            </div>
            <div className="desc-promotion">
              <h4>Download Pegadaian Digital Sekarang!</h4>
            </div>
            <div className="icn-promotion">
              <a href="https://play.google.com/store/apps/details?id=com.pegadaiandigital&hl=en&gl=US">
                {" "}
                <img src={Playstore} className="img-fluid"></img>
              </a>
              <a href="https://apps.apple.com/us/app/pegadaian-digital/id1350501409">
                {" "}
                <img src={Appstore} className="img-fluid"></img>
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
