import Button from "react-bootstrap/Button";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import './NavBar.css';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from "../Images/langJo2-01.png";


function NavBar() {
  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <Image src={logo} alt="Langjo" height="40" weight="10" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-3 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="home text-white">
                Home
              </Nav.Link>
              <NavDropdown
                className="bg-light rounded-5 px-3 mx-3"
                title="Levels"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Beginner</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Listen</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Quiz</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" className="text-white">
                About Us
              </Nav.Link>
            </Nav>
            <Form>
              <InputGroup>
                <div className="search-input-wrapper">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    background-color="#D9D9D9"
                    className="custom-search-input rounded-5 "
                    aria-label="Search"
                  />
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>
              </InputGroup>
            </Form>
            <Button className="custom-button">Signup</Button>
            <Button className="custom-button">Login</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
