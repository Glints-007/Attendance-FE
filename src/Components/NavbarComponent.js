import React, { useState } from "react";
import "../Styles/Navbar.css";
import { connect } from 'react-redux';
import { userActions } from '../Actions';
import { Link } from 'react-router-dom';

const NavbarComponent = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const { logout } = props; 

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-set navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" >
          Dasboard Admin
        </a>
      </div>
      <Link onClick={logout} style={{ margin:'10px', color:'#fff' }}>Logout</Link>
    </nav>
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
