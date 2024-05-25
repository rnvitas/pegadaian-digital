import "../css/security.css";
import Image from "../assets/keamanan.png"; // Assuming the image is in a subfolder named 'images'

function Security() {
  return (
    <div className="container-security">
      <div className="wrapper-body">
        <div className="row wrapper-body">
          <div className="col-lg-8">
            <div className="heading-security">
              <h2 className="title-security">
                Transaksi Aman, Tenang, dan Bebas Rasa Khawatir
              </h2>
            </div>
            <div className="desc-security">
              <li>
                <p>
                  Pegadaian Digital Terdaftar dan diawasi oleh{" "}
                  <b>Otoritas Jasa Keuangan (OJK)</b>.
                </p>
              </li>
              <li>
                <p>
                  Opsi penggunaan sidik jari, pengenalan wajah, password saat
                  login karena sudah ada <b>Fitur Biometric</b>.
                </p>
              </li>
              <li>
                <p>
                  Proses pencairan yang hanya bisa dil akukan ke rekening atas
                  nama kamu yang tercatat di KTP. .
                </p>
              </li>
            </div>
          </div>
          <div className="col-lg-4">
            <img className="img-fluid" src={Image}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Security;
