import "../css/benefits.css";
import Card from "./Card";
import Carosel from "./Carosel";

function Benefits() {
  const benefitData = [
    {
      judul: "1. Gadai Cepat, Mudah dan Aman",
      desc: (
        <div>
          <li>
            {" "}
            Gadai barang berharga Anda <b>tanpa antri</b> di kantor Pegadaian.
          </li>
          <li>
            Dapatkan <b>dana cair</b> langsung ke rekeningmu.
          </li>
          <li>
            Mager keluar rumah? mau disamperin atau barang dianterin cukup
            gunakan fitur <b>Gadai dari Rumah.</b>
          </li>
        </div>
      ),
    },
    {
      judul: "2. Bayar Angsuran Tepat Waktu",
      desc: (
        <div>
          <li>
            <b>Pengingat Jatuh Tempo:</b> Dapatkan notifikasi otomatis sebelum
            tagihanmu jatuh tempo!
          </li>
          <li>
            <b>Kartu Angsuran:</b> Cek sisa angsuran dan tanggal jatuh tempo
            dengan mudah.
          </li>
        </div>
      ),
    },
    {
      judul: "3. Lebih Dari Gadai",
      desc: (
        <div>
          <li>
            <b>Tabungan</b> dan <b>Cicilan Emas:</b> Simpan dan miliki emas
            impianmu dengan mudah, aman, dan fleksibel.
          </li>
          <li>
            Bayar <b>tagihan bulanan,</b> isi saldo
            <b>e-wallet,</b> dan beli <b>pulsa</b> dengan mudah dan praktis
            dalam satu aplikasi!
          </li>
          <li>
            <b>Dan masih banyak lagi!</b>
          </li>
        </div>
      ),
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
