import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Table.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";
import swal from 'sweetalert';
import { deleteUser } from "../Actions/adminAction";
import { verifyUser } from "../Actions/adminAction";
import { rejectUser } from "../Actions/adminAction";

const { SearchBar } = Search;

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const handleClickdelete = (dispatch, uid) => {
  
  swal({
    title: "Apakah Anda yakin akan menghapus data ini ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(uid))
      swal("Data User Sukses dihapus", {
        icon: "success",
      });
    } else {
      swal("Data gagal dihapus");
    }
  });
}

const handleClickverify = (dispatch, uid) => {
  
  swal({
    title: "Apakah Anda yakin akan memverifikasi akun ini ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willVerify) => {
    if (willVerify) {
      dispatch(verifyUser(uid))
      swal("User berhasil di verifikasi", {
        icon: "success",
      });
    } else {
      swal("User gagal diverifikasi");
    }
  });
}

const handleClickreject = (dispatch, uid) => {
  
  swal({
    title: "Apakah Anda yakin akan mereject akun ini ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willReject) => {
    if (willReject) {
      dispatch(rejectUser(uid))
      swal("User berhasil di reject", {
        icon: "success",
      });
    } else {
      swal("User gagal direject");
    }
  });
}

const mapStateToProps = (state) => {
  return {
    getUsersList: state.admin.getUsersList,
    errorUsersList: state.admin.errorUsersList,
  };
};

const TableComponent = (props) => {
  const columns = [
    {
      dataField: "uid",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "100px" };
      },
    },
    {
      dataField: "name",
      text: "Nama",
      sort: true,
      headerStyle: () => {
        return { width: "100px" };
      },
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
      headerStyle: () => {
        return { width: "200px" };
      },
    },
    {
      dataField: "office_id",
      text: "Office ID",
      sort: true,
      headerStyle: () => {
        return { width: "100px" };
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
      dataField: "button",
      text: "Action",
      headerStyle: () => {
        return { width: "220px" };
      },
      formatter: (rowContent, row) => {
        return (
          <div>
            <button type="button" className="btn btn-light" onClick={() => handleClickverify(props.dispatch, row.uid)}>
              <FontAwesomeIcon icon={faCheck} />
            </button>

            <button type="button" className="btn btn-dark" onClick={() => handleClickreject(props.dispatch, row.uid)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <button type="button" className="btn btn-dark" onClick={() => handleClickdelete(props.dispatch, row.uid)}>
              <FontAwesomeIcon icon={faTrash} />
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