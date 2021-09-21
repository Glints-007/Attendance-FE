import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from "reactstrap";
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
    
    // <header>
    //   <nav>
    //     <ul class="nav__links">
    //       <li><a>Dashboard Admin</a></li>
    //     </ul>
    //   </nav>
    //   <a href="#" onClick="return confirm ('Are you sure?')">
    //     Logout
    //   </a>
    // </header>

    // <nav>
    //   <ul>
    //     <h5>Dashboard Admin </h5>
    //     <li>
    //     <a href="#" onClick="return confirm ('Are you sure?')">
    //         Logout
    //       </a>
    //     </li>
    //   </ul>

    //   <ul>
    //     <li>
    //       <h6>Welcome,</h6>
    //     </li>
    //     <h6>Welcome,</h6>
    //   </ul>
    //   <ul>

    //   </ul>
    // </nav>
  );
};

export default NavbarComponent;
