import "../css/benefits.css";

function Card(props) {
  return (
    <div className="card-benefits">
      <h4 className="title-benefits">{props.judul}</h4>
      <p className="desc-benefits">{props.desc}</p>
    </div>
  );
}

export default Card;
