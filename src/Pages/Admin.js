import React, { Component } from 'react';
import JumbotronComponent  from '../Components/JumbotronComponent';
import NavbarComponent from '../Components/NavbarComponent';
import TableComponent from '../Components/TableComponent';

class Admin extends Component {
state = {
  title: "admin dashboard",
  users : [
    {
      id: 1,
      name: "Adi Bima",
      position: "Developer",
      office: "Depok, Jawa Barat",
      status: "Approved"
    },
    {
      id: 2,
      name: "Kirana Vannya",
      position: "Finance",
      office: "Depok, Jawa Barat",
      status: "Pending"
    },
    {
      id: 3,
      name: "Firhan Luqi",
      position: "Human Resource",
      office: "Depok, Jawa Barat",
      status: "Rejected"
    },
  ]
}

  render() {
    return (
      <div>
        <NavbarComponent title={this.state.title} />
        <JumbotronComponent />
        <TableComponent users={this.state.users} />
      </div>
    )
  }
}

export default Admin;
