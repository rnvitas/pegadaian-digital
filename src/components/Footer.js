import "../css/footer.css";
import Logo from "../assets/logo-pegadaian.png";
import Callcenter from "../assets/call-center.png";
import Appstore from "../assets/appstore-download 1.png";
import Playstore from "../assets/googleplay-download 1.png";
import Ojk from "../assets/icon-ojk 1.png";
import Fb from "../assets/Status=icon-fb.png";
import Twt from "../assets/Status=icon-twt.png";
import Ig from "../assets/Status=icon-ig.png";
import Ytb from "../assets/Status=icon-ytb.png";

function Footer() {
  return (
    <div className="container-footer">
      <div className="wrapper-body">
        <div className="row wrapper-body content-footer">
          <div className="col-lg-4 ft-1">
            <div className="container-lg-footer">
              <img src={Logo} className="img-fluid logo-pegadaian-footer" />
            </div>
            <div className="info-pegadaian">
              <h6>Kantor Pusat Pegadaian</h6>
              <div className="address">
                <p>Jl. Kramat Raya 162 Jakarta Pusat 10430 Indonesia</p>
              </div>
              <div className="call-center">
                <img src={Callcenter} className="img-fluid"></img>
              </div>
              <div className="aboutme">
                <h6>Tentang Kami</h6>
                <div className="sosial-media">
                  <a href="https://www.facebook.com/shbtpegadaian">
                    <img className="img-fluid" src={Fb}></img>
                  </a>
                  <a href="https://twitter.com/shbt_pegadaian">
                    <img className="img-fluid" src={Twt}></img>
                  </a>
                  <a href="https://instagram.com/sahabatpegadaian">
                    <img className="img-fluid" src={Ig}></img>
                  </a>
                  <a href="https://www.youtube.com/channel/UC1Q_4xSkcX4s5aiq0mePlpQ">
                    <img className="img-fluid" src={Ytb}></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ft-2">
            <div className="tautan">
              <h6>Tautan Cepat</h6>
              <div className="link">
                <a href="#">Promo</a>
                <a href="#">Produk</a>
                <a href="#">Artikel</a>
              </div>
              <div className="link">
                <a href="#">Acara</a>
                <a href="#">Simulasi</a>
                <a href="#">E-book</a>
              </div>
            </div>
            <div className="bantuan">
              <h6>Bantuan</h6>
              <div className="row">
                <a href="#">Syarat dan Kententuan</a>
                <a href="#">Tentang Kami</a>
                <a href="#">Hubungi Kami</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ft-3">
            <div className="download">
              <h6>Download Aplikasi</h6>
              <div className="icon-down-footer">
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

            <div className="ojk">
              <h6>Terdaftar dan Diawasi Oleh:</h6>
              <div className="icon-ojk-footer">
                <img src={Ojk} className="img-fluid"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright 2024 PT Pegadaian. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
