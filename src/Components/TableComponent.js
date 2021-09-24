import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Table.css";
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
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};

const TableComponent = (props) => {
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "20px" };
      },
    },
    {
      dataField: "nama",
      text: "Nama",
      sort: true,
      headerStyle: () => {
        return { width: "250px" };
      },
    },
    {
      dataField: "alamat",
      text: "Alamat",
      sort: true,
      headerStyle: () => {
        return { width: "200px" };
      },
    },
    {
      dataField: "umur",
      text: "Office ID",
      sort: true,
      headerStyle: () => {
        return { width: "250px" };
      },
    },
    {
      dataField: "nohp",
      text: "Status",
      sort: true,
      headerStyle: () => {
        return { width: "150px" };
      },
    },
    {
      dataField: "link",
      text: "Action",
      headerStyle: () => {
        return { width: "150px" };
      },
      formatter: (rowContent, row) => {
        return (
          <div>
            <button type="button" className="btn btn-light">
              <FontAwesomeIcon icon={faCheck} />
            </button>

            <button type="button" className="btn btn-dark">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <Container>
      {props.getUsersList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getUsersList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <div className="float-right">
                <SearchBar {...props.searchProps} placeholder="Search..." />
              </div>
              <hr />

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorUsersList ? (
            <h4>{props.errorUsersList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
