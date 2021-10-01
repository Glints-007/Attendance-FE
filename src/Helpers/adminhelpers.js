import React, { Component } from "react";
import TableComponent from "../Components/TableComponent";
import { connect } from "react-redux";
import { getUsersList } from "../Services/admin.service";

class adminhelpers extends Component {
    componentDidMount(){
        this.props.dispatch(getUsersList());
    }

    render() {
        
        return (
        <div>
            <TableComponent />
        </div>
        );
    }
}

export default connect()(adminhelpers);