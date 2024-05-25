import "../css/benefits.css";

function Card(props) {
  const DescrComponent = () => <p className="desc-benefits">{props.desc}</p>;

  return (
    <div className="card-benefits">
      <h4 className="title-benefits">{props.judul}</h4>
      <DescrComponent />
    </div>
  );
}

export default Card;
