import { GET_USERS_ABSENT } from "../Actions/adminAction";

let initialState = {
    getUsersAbsent: false,
    errorUsersAbsent: false,
    title: "User Absent Dashboard", 
};

const absent = (state = initialState, action) => {
    switch(action.type){
        case GET_USERS_ABSENT:
            return {
                ...state,
                getUsersAbsent: action.payload.data,
                errorUsersAbsent: action.payload.errorMessage,
            };

        default:
            return state;
    }
};
  
export default absent;