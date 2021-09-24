import React, { Component } from 'react';
import JumbotronComponent  from '../Components/JumbotronComponent';
import NavbarComponent from '../Components/NavbarComponent';
import TableContainer from '../Containers/TableContainer';

class Admin extends Component {
// state = {
//   title: "admin dashboard",
//   getUsers : false, 
// }

  render() {
    return (
      <div>
        {/* <NavbarComponent title={this.state.title} />
        <JumbotronComponent />
        <TableComponent users={this.state.users} /> */}
        <NavbarComponent/>
        <JumbotronComponent />
        <TableContainer />
      </div>
    )
  }
}

export default Admin;
