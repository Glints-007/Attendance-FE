import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Table.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "No",
    sort: true,
    headerStyle: () => {
      return { width: "20px" };
    },
  },
  {
    dataField: "name",
    text: "Full Name",
    sort: true,
    headerStyle: () => {
      return { width: "250px" };
    },
  },
  {
    dataField: "position",
    text: "Position",
    sort: true,
    headerStyle: () => {
      return { width: "200px" };
    },
  },
  {
    dataField: "office",
    text: "Office",
    sort: true,
    headerStyle: () => {
      return { width: "250px" };
    },
  },
  {
    dataField: "status",
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

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const TableComponent = (props) => {
  return (
    <Container>
      {/* <BootstrapTable 
              bootstrap4 
              keyField='id' 
              data={ props.users } 
              columns={ columns }  
              defaultSorted={ defaultSorted }  
            /> */}
      <ToolkitProvider
        keyField="uid"
        data={props.users}
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
    </Container>
  );
};

export default TableComponent;
