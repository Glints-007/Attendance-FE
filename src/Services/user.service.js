import { authHeader } from '../Helpers';

export const userService = {
    login,
    logout,
    register,
    forgotPassword,
    resetPassword,
    getAll,
};

async function login(email, password) {
    const requestOptions = {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit,
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({ email, password })
    };

    return await fetch(process.env.REACT_APP_API_URL + "/login", requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            sessionStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage and session storage to log user out
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
}

async function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return await fetch(process.env.REACT_APP_API_URL + "/register", requestOptions).then(handleResponse);
}

async function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return await fetch(process.env.REACT_APP_API_URL + "/users/verified", requestOptions).then(handleResponse);
}

async function forgotPassword(email) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email})
    };

    return await fetch(process.env.REACT_APP_API_URL + "/forgot", requestOptions).then(handleResponse);
}


async function resetPassword(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return await fetch(process.env.REACT_APP_API_URL + "/reset", requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload("/");
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}