import React, { useState } from "react";
import { connect } from 'react-redux';
import { userActions } from '../Actions';
import { Link } from 'react-router-dom';
import '../Styles/Dashboard.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


const NavbarComponent = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const { logout } = props; 

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
        <div className="container">
            <Navbar color="transparent" light expand="md">
                <NavbarBrand href="/" className="nav-center text-white">Dashboard Admin</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto nav-right" navbar>
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav>
                            <span className="font-color-white fs-3"><FontAwesomeIcon icon={faUserCircle} /></span>
                        </DropdownToggle>
                        <DropdownMenu right className="dropdown-menu-dark dropdown-menu-end">
                            <DropdownItem>
                                <Link onClick={logout} style={{ margin:'10px', color:'#fff' }}>Logout</Link>
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        </>
  );
};

function mapState(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return { user, users };
}

const actionCreators = {
  getUsers: userActions.getAll,
  logout: userActions.logout,
  deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(NavbarComponent);
export { connectedHomePage as NavbarComponent };
