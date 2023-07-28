import Button from "react-bootstrap/Button";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import './NavBar.css';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from "../Images/langJo.png";


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <Image src={logo} alt="Langjo" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="home">Home</Nav.Link>
            <NavDropdown title="Levels" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Beginner</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Listen
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Quiz
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#"> 
              About Us
            </Nav.Link>
          </Nav>
          <Form> 
            <InputGroup>
            <div className="search-input-wrapper">
              <FormControl
                type="search"
                placeholder="Search"
                background-color= "#D9D9D9"
                className="custom-search-input"
                aria-label="Search"
              />
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
          </InputGroup>
          </Form>
            <Button className="custom-button">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
