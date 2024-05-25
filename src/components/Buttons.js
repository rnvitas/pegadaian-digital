import "../css/button.css";

function Buttons(props) {
  return (
    <a className="btnnya-primary" href="#">
      {props.btn_name}
    </a>
  );
}

export default Buttons;
