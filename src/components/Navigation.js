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
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Gestión Vehicular</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <div className="d-flex ">
              <div className="btn-group">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <FontAwesomeIcon icon={faUser} />
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item" onClick={handleEditPassword}>Cambiar contraseña</a></li>
                  <li><a className="dropdown-item" onClick={handleLogout} >Ceerar sesión</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
