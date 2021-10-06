import { faColumns } from "@fortawesome/free-solid-svg-icons";
import TableComponent from '../Components/TableComponent';
import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";

export const getUsersList = () => {

  let user = JSON.parse(localStorage.getItem('user'));
  let token = user && user.access_token ? user.access_token : '';
  const config = {
    headers: {
      "Content-type": "application/json",
      "Authorization": "Bearer " + token,
    },
  };

  return (dispatch) => {
    axios
      .get
      ("https://floating-journey-97236.herokuapp.com/api/v1/users", config)
      .then(function (response) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteUser = (uid) => {
  const config = {
    headers: {
      "Content-type": "application/json", 
      "Authorization": "Bearer 125|ALFUiv47Lm48lqRnzLHuPDjiNvo4qV6d47VbEiuf",
    },
  };

  return (dispatch) => {
    axios
      .delete(
         "https://floating-journey-97236.herokuapp.com/api/v1/users/"+uid, config)
      .then(function (response) {
        console.log(response);
        
      })
      .catch(function (error) {
        console.log(error);
        
      });
  };
};

export const verifyUser = (uid) => {
  const config = {
    headers: {
      "Content-type": "application/json", 
      "Accept" : "application/json",
      "Authorization": "Bearer 125|ALFUiv47Lm48lqRnzLHuPDjiNvo4qV6d47VbEiuf",
    },
  };

  return (dispatch) => {
    axios
      .put(
        `https://floating-journey-97236.herokuapp.com/api/v1/users/${uid}/verify`, null, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

export const rejectUser = (uid) => {
  const config = {
    headers: {
      "Content-type": "application/json",
      "Accept" : "application/json", 
      
      "Authorization": "Bearer 125|ALFUiv47Lm48lqRnzLHuPDjiNvo4qV6d47VbEiuf",
    },
  };

  return (dispatch) => {
    axios
      .put(
        `https://floating-journey-97236.herokuapp.com/api/v1/users/${uid}/reject`, null, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}