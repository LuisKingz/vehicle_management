import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
export const Navigation = () => {

  const navigate = useNavigate();
  const handleEditPassword = () => {
    // Lógica para redirigir a la página de edición de contraseña
    console.log('Edit Password clicked');
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión
    console.log('Logout clicked');
    navigate('/');
  };
  return (
    <>
      {/* Sidebar */}
      <Navbar bg="light" expand="lg" style={{ width: '100%' }}>
        <Navbar.Brand href="#">Vehicle Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#vehicles">Vehicles</Nav.Link>
            <Nav.Link href="#reports">Reports</Nav.Link>
          </Nav>

          {/* User Icon and Dropdown in Collapsed Navbar */}
          <Nav className="ml-auto">
            <NavDropdown title={<FontAwesomeIcon icon={faUser} />} id="basic-nav-dropdown" align={'end'}>
              <NavDropdown.Item onClick={handleEditPassword}>Edit Password</NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
