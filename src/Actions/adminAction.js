import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_ABSENT = "GET_USER_ABSENT";

let user = JSON.parse(localStorage.getItem('user'));
let token = user && user.content['access_token'] ? user.content['access_token'] : '';

export const getUsersList = () => {

  const config = {
    headers: {
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + token,
    },
  };

  return (dispatch) => {
    axios
      .get
      (`${process.env.REACT_APP_API_URL}/users`, config)
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

export const getUsersAbsent = () => {

  const config = {
    headers: {
      "Content-type": "application/json",
      "Authorization": 'Bearer ' + token,
    },
  };

  return (dispatch) => {
    axios
      .get
      (`${process.env.REACT_APP_API_URL}/user-absent`, config)
      .then(function (response) {
        dispatch({
          type: GET_USERS_ABSENT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_ABSENT,
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
      "Authorization": 'Bearer ' + token,
    },
  };

  return (dispatch) => {
    axios
      .delete(
        `${process.env.REACT_APP_API_URL}/users/${uid}`, config)
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
      "Authorization": 'Bearer ' + token,
    },
  };

  return (dispatch) => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/users/${uid}/verify`, null, config)
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
      "Authorization": 'Bearer ' + token,
    },
  };

  return (dispatch) => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/users/${uid}/reject`, null, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}
