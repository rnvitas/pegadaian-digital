import "../css/question.css";
import Accordionquestion from "./Accordionquestion";
import Image from "../assets/img-question.png";

function Question() {
  return (
    <div className="container-question">
      <div className="wrapper-body">
        <div className="heading-question">
          <h2 className="title-question">Pertanyaan Yang Sering Diajukan</h2>
          <h6 className="tagline">Temukan Jawabanmu Disini!</h6>
        </div>

        <div className="row content-question">
          <div className="col-lg-7 ">
            <Accordionquestion />
          </div>

          <div className="col-lg-4 img-question">
            <img className="img-fluid" src={Image}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
