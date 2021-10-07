import React, { Component } from "react";
import TableAbsentComponent from "../Components/TableAbsentComponent";
import { connect } from "react-redux";
import { getUsersAbsent } from '../Actions/adminAction'

class TableAbsentContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getUsersAbsent());
    }

    render() {

        return (
            <div>
                <TableAbsentComponent />
            </div>
        );
    }
}

export default connect()(TableAbsentContainer);


