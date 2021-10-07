import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "reactstrap";
import '../Styles/Dashboard.css';
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";

const { SearchBar } = Search;

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getUsersAbsent: state.absent.getUsersAbsent,
    errorUsersAbsent: state.absent.errorUsersAbsent,
  };
};

const TableAbsentComponent = (props) => {
  const columns = [
    {
      dataField: "uid",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "100px", textAlign :"center",
         };
      },
    },
    {
      dataField: "name",
      text: "Nama",
      sort: true,
      headerStyle: () => {
        return { textAlign :"center",
         };
      },
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
      headerStyle: () => {
        return { textAlign :"center",
         };
      },
    },
    {
      dataField: "office_id",
      text: "Office ID",
      sort: true,
      headerStyle: () => {
        return { textAlign :"center",
         };
      },
    },
    {
      dataField: "absent",
      text: "Absent",
      sort: true,
      headerStyle: () => {
        return { textAlign :"center",
         };
      },
    },
    {
      dataField: "status",
      text: "Status",
      sort: true,
      headerStyle: () => {
        return { textAlign :"center",
         };
      },
    },
  ];

  return (
    <div className="tablecard">
      <div className="container">
        {props.getUsersAbsent ? (
          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={props.getUsersAbsent}
            columns={columns}
            defaultSorted={defaultSorted}
            search
          >
            {(props) => (
              <div>
                <h4 className="fs-4 text-margin fw-bold">User Absent</h4>
                <div className="float-end searchbar">
                  <SearchBar {...props.searchProps} placeholder="Search..." />
                </div>

                <BootstrapTable
                  {...props.baseProps}
                  pagination={paginationFactory()}
                />
              </div>
            )}
          </ToolkitProvider>
        ) : (
          <div className="text-center">
            {props.errorUsersAbsent ? (
              <h4>{props.errorUsersAbsent}</h4>
            ) : (
              <Spinner color="dark" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(TableAbsentComponent);
