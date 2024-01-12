import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CustomDropdown from '../atomi/CustomDropdown';
import CustomButtonIcon from '../atomi/CustomButtonIcon';

const CustomNavbar =() => {
  return (
    <Navbar className="bg-black">
      <Container fluid>
      <Navbar.Brand href="#home">
            <img
              src="../src/assets/Netflix-logo.wine.svg"
              width="100"
              height="40"
              className="d-inline-block align-top"
              alt="NETFLIX"
            />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-white' href="#home">Home</Nav.Link>
            <Nav.Link className='text-white' href="#link">TV Show</Nav.Link>
            <Nav.Link className='text-white' href="#home">Movies</Nav.Link>
            <Nav.Link className='text-white' href="#link">Recently Added</Nav.Link>
            <Nav.Link className='text-white' href="#home">My List</Nav.Link>

          </Nav>
          <CustomButtonIcon/>
          <CustomDropdown />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;