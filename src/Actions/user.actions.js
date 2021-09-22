import { userConstants } from '../Constants';
import { userService } from '../Services';
import { alertActions } from './';

export const userActions = {
    login,
    logout,
    register,
    forgotPassword,
    resetPassword,
    getAll,
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                user => { 
                    dispatch(success(user));
                    window.location.replace('/dashboard');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                    window.location.replace('/login');
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    window.location.replace('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll(){
    return dispatch => {
        dispatch(request());

        userService.getAll()
        .then(
            users => { dispatch(success(users)); },
            error => { dispatch(failure(error.toString())); }
        );

        function request(user) { return { type: userConstants.GETALL_REQUEST, user } }
        function success(user) { return { type: userConstants.GETALL_SUCCESS, user } }
        function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
    }
}

function forgotPassword(email){
    return dispatch => {
        dispatch(request(email));

        userService.forgotPassword(email)
        .then(
            user => { 
                dispatch(success(user)); 
                window.location.replace('/reset-password');
            },
            error => { dispatch(failure(error.toString())); }
        );

        function request(user) { return { type: userConstants.FORGOTPASS_REQUEST, user } }
        function success(user) { return { type: userConstants.FORGOTPASS_SUCCESS, user } }
        function failure(error) { return { type: userConstants.FORGOTPASS_FAILURE, error } }
    }
}

function resetPassword(data){
    return dispatch => {
        dispatch(request(data));

        userService.resetPassword(data)
        .then(
            user => { 
                dispatch(success(user)); 
                window.location.replace('/login'); 
            },
            error => { dispatch(failure(error.toString())); }
        );

        function request(user) { return { type: userConstants.RESETPASS_REQUEST, user } }
        function success(user) { return { type: userConstants.RESETPASS_SUCCESS, user } }
        function failure(error) { return { type: userConstants.RESETPASS_FAILURE, error } }
    }
}