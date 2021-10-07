import React, { Component } from 'react';
import JumbotronComponent  from '../Components/JumbotronComponent';
import { NavbarComponent } from '../Components';
import { Container } from 'reactstrap';
import TableContainer from '../Containers/TableContainer';


class Admin extends Component {

  render() {
    return (
      <div className="dashboard">
          <NavbarComponent/>
          <JumbotronComponent /> 
          <TableContainer />
      </div>

    )
  }
}

export default Admin;
