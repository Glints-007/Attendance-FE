import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";

export const getUsersList = () => {
  return (dispatch) => {
    axios
    // .get("https://floating-journey-97236.herokuapp.com/api/v1/users/40667955-67d4-413d-b6f6-003c0ee8bcb5")
     .get("https://my-json-server.typicode.com/afifbasya/reactjs-redux/users")
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