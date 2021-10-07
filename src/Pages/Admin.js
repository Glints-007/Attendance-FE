import React, { Component } from 'react';
import { JumbotronComponent }  from '../Components/JumbotronComponent';
import { NavbarComponent } from '../Components';
import TableContainer from '../Containers/TableContainer';
import TableAbsentContainer from '../Containers/TableAbsentContainer';


class Admin extends Component {

  render() {
    return (
      <div className="dashboard">
          <NavbarComponent/>
          <JumbotronComponent /> 
          <TableContainer />
          <TableAbsentContainer />
      </div>

    )
  }
}

export default Admin;
