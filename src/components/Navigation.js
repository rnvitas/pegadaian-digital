import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Buttons from "./Buttons";
import "../css/navigation.css";
import Logo from "../assets/logo-pegadaian.png"; // Assuming the image is in a subfolder named 'images'

function Navigation(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="container-navigation">
      <Container className="navbar-cont wrapper-body">
        <Navbar.Brand href="#home">
          <img src={Logo} width="50%"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Keuntungan</Nav.Link>
            <Nav.Link href="#pricing">Keamanan</Nav.Link>
            <Nav.Link href="#pricing">Testimoni</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <Buttons btn_name="Download" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
