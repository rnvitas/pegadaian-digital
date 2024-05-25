import Accordion from "react-bootstrap/Accordion";

function Accordionquestion() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Apa itu Pegadaian Digital?</Accordion.Header>
        <Accordion.Body>
          Pegadaian ingin membantu mempermudah nasabah bertransaksi secara
          digital melalui aplikasi Pegadaian Digital. Layanan ini dapat diunduh
          lalu diakses secara online untuk berbagai transaksi Pegadaian.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Bagaimana Menjadi Akun Premium?</Accordion.Header>
        <Accordion.Body>
          Pegadaian ingin membantu mempermudah nasabah bertransaksi secara
          digital melalui aplikasi Pegadaian Digital. Layanan ini dapat diunduh
          lalu diakses secara online untuk berbagai transaksi Pegadaian.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          Bagaimana Melakukan Gadai di Aplikasi Pegadaian Digital?
        </Accordion.Header>
        <Accordion.Body>
          Pegadaian ingin membantu mempermudah nasabah bertransaksi secara
          digital melalui aplikasi Pegadaian Digital. Layanan ini dapat diunduh
          lalu diakses secara online untuk berbagai transaksi Pegadaian.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          Bagaimana Memiliki Tabungan Emas di Pegadaian Digital?
        </Accordion.Header>
        <Accordion.Body>
          Pegadaian ingin membantu mempermudah nasabah bertransaksi secara
          digital melalui aplikasi Pegadaian Digital. Layanan ini dapat diunduh
          lalu diakses secara online untuk berbagai transaksi Pegadaian.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordionquestion;
