import React, { Component } from "react";
import TableComponent from "../Components/TableComponent";
import { connect } from "react-redux";
import { getUsersList } from '../Actions/adminAction'

class TableContainer extends Component {
    componentDidMount() {
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

export default connect()(TableContainer);