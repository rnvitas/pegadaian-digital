import "../css/benefits.css";
import Card from "./Card";
import Carosel from "./Carosel";

function Benefits() {
  const benefitData = [
    {
      judul: "1. Gadai Cepat, Mudah dan Aman",
      desc: "<li>Gadai barang berharga Anda tanpa antri di kantor Pegadaian. Dapatkan dana cair langsung ke rekeningmu. Mager keluar rumah? mau disamperin atau barang dianterin cukup gunakan fitur Gadai dari Rumah.</li>",
    },
    {
      judul: "2. Bunga Kompetitif dan Transparan",
      desc: "<li>Bunga Pegadaian Digital kompetitif dan transparan, tidak ada biaya tersembunyi. Kamu bisa simulasikan bunga dan angsuran sebelum gadai.</li>",
    },
    {
      judul: "3. Transaksi Aman dan Terjamin",
      desc: "<li>Pegadaian Digital terdaftar dan diawasi oleh OJK, sehingga transaksimu aman dan terjamin.</li>",
    },
  ];
  return (
    <div className="container-benefits">
      <div className="wrapper-body">
        <div className="heading-benefits">
          <h6 className="tagline">#BanyakBisanyaMudahPakainya</h6>
          <h2 className="headline-benefits">
            <b>3 Alasan Kenapa Kamu Harus Pakai Pegadaian Digital</b>
          </h2>
        </div>

        <div className="row content-benefits">
          <div className="col-lg-5">
            <Carosel />
          </div>
          <div className="col-lg-7">
            {benefitData.map((benefit) => (
              <Card judul={benefit.judul} desc={benefit.desc} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
