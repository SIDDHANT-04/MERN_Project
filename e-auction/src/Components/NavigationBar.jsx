import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

export function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="home">Car-Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Link to="/addcar" className="nav-link">
              Add Car
            </Link>
            <Link to="/carlist" className="nav-link">
              Car List
            </Link>
            <Link to="/headlines" className="nav-link">
              Headlines
            </Link>
            <Link to="/aboutus" className="nav-link">
              About Us
            </Link>
          </Nav>
          <Nav>

            <Link to="/login">
              <Button variant="danger" className="me-2">
                Log out
              </Button></Link>
              {/* <Link to="/signup">
              <Button variant="danger" className="me-2">
                Sign Up 
              </Button></Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
