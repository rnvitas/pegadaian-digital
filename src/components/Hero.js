import "../css/hero.css";
import Image from "../assets/image-hero.png";
import Appstore from "../assets/appstore-download 1.png";
import Playstore from "../assets/googleplay-download 1.png";
import Ojk from "../assets/icon-ojk 1.png";

function Hero(props) {
  return (
    <div className="container-hero">
      <div className="wrapper-body">
        <div className="row wrapper-body">
          <div className="col-lg-7 wrapper-body">
            <h1 className="text-white headline-hero">
              <b>Wujudkan Rencana Keuanganmu, Dalam Genggamanmu!</b>
            </h1>
            <h4 className="text-white subheadline-hero">
              Download Pegadaian Digital dan nikmati kemudahan mengatur
              keuangan, gadai barang berharga, dan berinvestasi emas dalam satu
              aplikasi!
            </h4>
            <h6 className="tagline">#BanyakBisanyaMudahPakainya</h6>

            <div className="logo-download">
              <a href="https://play.google.com/store/apps/details?id=com.pegadaiandigital&hl=en&gl=US">
                {" "}
                <img src={Playstore} className="img-fluid lg-playstore"></img>
              </a>
              <a href="https://apps.apple.com/us/app/pegadaian-digital/id1350501409">
                {" "}
                <img src={Appstore} className="img-fluid lg-appstore"></img>
              </a>{" "}
            </div>
            <div className="ojk-section">
              <p className="text-white">Terdaftar dan diawasi oleh:</p>
              <img src={Ojk} className="img-fluid"></img>
            </div>
          </div>

          <div className="col-lg-5 container-hero-img">
            <img src={Image} className="hero-img "></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
