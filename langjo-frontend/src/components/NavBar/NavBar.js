import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './NavBar.css';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">LangJo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/" className="home">
              Home
            </Nav.Link>
            <NavDropdown title="Levels" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/beginnerlevel">
                Beginner
              </NavDropdown.Item>
              <NavDropdown.Item href="/beginnerlevel">
                Wacth & Listen{" "}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Quiz</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">About Us</Nav.Link>
          </Nav>
          <Form>
            <InputGroup>
              <div className="search-input-wrapper">
                <FormControl
                  type="search"
                  placeholder="Search"
                  background-color="#D9D9D9"
                  className="custom-search-input"
                  aria-label="Search"
                />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
              </div>
            </InputGroup>
          </Form>

          <Nav className="p-2">
            {window.location.href.endsWith("/signup") ? (
              <Nav.Link href="/login" className="btn sign_up-btn w-100">
                Login
              </Nav.Link>
            ) : (
              <Nav.Link href="/signup" className="btn sign_up-btn w-100">
                Register
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
