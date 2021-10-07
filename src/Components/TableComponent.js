import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
// import "../Styles/Table.css";
import '../Styles/Dashboard.css';
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
      dataField: "status",
      text: "Status",
      sort: true,
      headerStyle: () => {
        return { textAlign :"center",
         };
      },
    },
    {
      dataField: "button",
      text: "Action",
      headerStyle: () => {
        return { textAlign :"center",
         };
      },
      formatter: (rowContent, row) => {
        return (
          <div className="adminaction text-center">
            <button type="button" className="custBtn mx-3" onClick={() => handleClickverify(props.dispatch, row.uid)}>
              <FontAwesomeIcon icon={faCheck} />
            </button>

            <button type="button" className="custBtn mx-3" onClick={() => handleClickreject(props.dispatch, row.uid)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <button type="button" className="custBtn mx-3" onClick={() => handleClickdelete(props.dispatch, row.uid)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="tablecard">
      <div className="container">
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
                <h4 className="fs-4 text-margin fw-bold">User Approval</h4>
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
            {props.errorUsersList ? (
              <h4>{props.errorUsersList}</h4>
            ) : (
              <Spinner color="dark" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(TableComponent);