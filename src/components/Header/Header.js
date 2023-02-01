import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../img/vecko.jpg';



function Header() {
  return (
    <div className='header'>
      <Navbar bg="grey" expand="lg">
        <Container >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Hem</Nav.Link>
              <Nav.Link href="/info">Om</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="/login">Logga in</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Registrera
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Poäng  </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Logga ut
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Brand href="#home">
              <img
                src={logo}
                width="500"
                height="150"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Inloggad som: <a href="#login">Gäst</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;