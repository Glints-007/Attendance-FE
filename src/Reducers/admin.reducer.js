import { GET_USERS_LIST } from "../Actions/adminAction";

let initialState = {
    getUsersList: false,
    errorUsersList: false,
    title: "Admin Dashboard", 
};

const admin = (state = initialState, action) => {
    switch(action.type){
        case GET_USERS_LIST:
            return {
                ...state,
                getUsersList: action.payload.data,
                errorUsersList: action.payload.errorMessage,
            };

        default:
            return state;
    }
};
  
export default admin;