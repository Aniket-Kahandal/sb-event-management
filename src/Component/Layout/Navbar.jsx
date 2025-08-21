import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useLocation } from 'react-router-dom'; // we'll use useLocation for URL based active
import LoginModal from '../Common/Login';

const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);

  // useLocation hook gives current URL path
  const location = useLocation();

  // Helper function to check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2 position-sticky" style={{ top: 0, zIndex: 1000 }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">

          {/* Left: Logo + Brand */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <span className="text-danger fw-bold">Apna</span>
            <img src="/logo.png" alt="Logo" height="35" className="mx-2" />
            <span className="text-warning fw-bold">Event</span>
          </Link>

          {/* Toggler for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Center: Menu Items */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive('/') ? 'text-warning fw-bold' : 'text-white'}`}
                  to="/"
                >
                  Home
                </Link>
              </li>
             <li className="nav-item dropdown">
  <Link
    className={`nav-link dropdown-toggle ${
      location.pathname.startsWith('/event') || location.pathname.startsWith('/corporate')
        ? 'text-warning fw-bold'
        : 'text-white'
    }`}
    to="#"
    role="button"
    data-bs-toggle="dropdown"
  >
    Our Events
  </Link>
  <ul className="dropdown-menu">
    <li>
      <Link className={`dropdown-item ${isActive('/event/wedding') ? 'active' : ''}`} to="/event/wedding">
        Wedding
      </Link>
    </li>
    <li>
      <Link className={`dropdown-item ${isActive('/event//engagement') ? 'active' : ''}`} to="/event//engagement">
        Engagement
      </Link>
    </li>
     <li>
      <Link className={`dropdown-item ${isActive('/event//birthday') ? 'active' : ''}`} to="/event//birthday">
        Birthday
      </Link>
    </li>
     <li>
      <Link className={`dropdown-item ${isActive('/event//retirement') ? 'active' : ''}`} to="/event//retirement">
        Retirement
      </Link>
    </li>
  </ul>
</li>

<li className="nav-item dropdown">
  <Link
    className={`nav-link dropdown-toggle ${
      location.pathname.startsWith('/mandap')
        ? 'text-warning fw-bold'
        : 'text-white'
    }`}
    to="#"
    role="button"
    data-bs-toggle="dropdown"
  >
    Mandap
  </Link>
  <ul className="dropdown-menu" style={{ width: 'max-content' }}>
    <li>
      <span className="dropdown-item-text text-muted">Make Memorable Wedding Event</span>
    </li>
    <li>
      <Link className={`dropdown-item ${isActive('/mandap/stage-decoration') ? 'active' : ''}`} to="/mandap/stage-decoration">
        Stage Decoration
      </Link>
    </li>
    <li>
      <Link className={`dropdown-item ${isActive('/mandap/mehandi') ? 'active' : ''}`} to="/mandap/mehandi">
        Mandap
      </Link>
    </li>
     <li>
      <Link className={`dropdown-item ${isActive('/mandap/entry-gate') ? 'active' : ''}`} to="/mandap/entry-gate">
        Entry Gate
      </Link>
    </li>
     <li>
      <Link className={`dropdown-item ${isActive('/mandap/material') ? 'active' : ''}`} to="/mandap/material">
        Material
      </Link>
    </li>
  </ul>
</li>
<li className="nav-item dropdown">
  <Link
    className={`nav-link dropdown-toggle ${
      location.pathname.startsWith('/food')
        ? 'text-warning fw-bold'
        : 'text-white'
    }`}
    to="#"
    role="button"
    data-bs-toggle="dropdown"
  >
    Food
  </Link>
  <ul className="dropdown-menu" style={{ width: 'max-content' }}>
    <li>
      <span className="dropdown-item-text text-muted">Select Delicious Food </span>
    </li>
    <li>
      <Link className={`dropdown-item ${isActive('/food/veg') ? 'active' : ''}`} to="/food/veg">
       Veg
      </Link>
    </li>
    <li>
      <Link className={`dropdown-item ${isActive('/food/non-veg') ? 'active' : ''}`} to="/food/non-veg">
        Non-Veg
      </Link>
    </li>
   
  </ul>
</li>

<li className="nav-item dropdown">
  <Link
    className={`nav-link dropdown-toggle ${
      location.pathname.startsWith('/sound')
        ? 'text-warning fw-bold'
        : 'text-white'
    }`}
    to="#"
    role="button"
    data-bs-toggle="dropdown"
  >
    Sound
  </Link>
  <ul className="dropdown-menu" style={{ width: 'max-content' }}>
    <li>
      <span className="dropdown-item-text text-muted">Select Delicious Food </span>
    </li>
    <li>
      <Link className={`dropdown-item ${isActive('/sound/system') ? 'active' : ''}`} to="/sound/sangeet">
       Sound System
      </Link>
    </li>
    <li>
      <Link className={`dropdown-item ${isActive('/sound/light') ? 'active' : ''}`} to="/sound/light">
        Light
      </Link>
    </li>
     <li>
      <Link className={`dropdown-item ${isActive('/sound/trust') ? 'active' : ''}`} to="/sound/trust">
        Trust
      </Link>
    </li>
  </ul>
</li>

              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive('/contact') ? 'text-warning fw-bold' : 'text-white'}`}
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link text-white"
                  onClick={() => setOpenLogin(true)}
                >
                  Login/Logout
                </button>
              </li>
            </ul>
          </div>

          {/* Right: Download App */}
          {/* <div className="d-none d-lg-block">
            <Link to="/download" className="btn btn-outline-danger rounded-pill px-4">
              Download App <i className="bi bi-download ms-2"></i>
            </Link>
          </div> */}
        </div>
      </nav>
      {openLogin && (
        <LoginModal show={openLogin} handleClose={() => setOpenLogin(false)} />
      )}
    </>
  );
};

export default Navbar;
