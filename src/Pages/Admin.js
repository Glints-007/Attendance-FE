import React, { Component } from 'react';
import JumbotronComponent  from '../Components/JumbotronComponent';
import { NavbarComponent } from '../Components';
import TableContainer from '../Containers/TableContainer';


class Admin extends Component {

  render() {
    return (
      <div>
        <NavbarComponent/>
        <JumbotronComponent />
        <TableContainer />
      </div>

    )
  }
}

export default Admin;
