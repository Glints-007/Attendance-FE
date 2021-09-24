import React, {useState} from 'react';
import '../Styles/Dashboard.css'
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
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const DashNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
        <div className="container">
            <Navbar color="transparent" light expand="md">
                <NavbarBrand href="/" className="nav-center text-white">Dashboard</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto nav-right" navbar>
                        <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav>
                            <span className="font-color-white fs-3"><FontAwesomeIcon icon={faUserCircle} /></span>
                        </DropdownToggle>
                        <DropdownMenu right className="dropdown-menu-dark dropdown-menu-end">
                            <DropdownItem>
                            Log Out
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        </>
    );
}

export default DashNavbar;
