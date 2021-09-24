import React, { useState } from "react";
import "../Styles/Navbar.css";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" >
          Dasboard Admin
        </a>
      </div>
      <a className="nav-link" href="#">
              Logout
      </a>
    </nav>
  );
};

export default NavbarComponent;
