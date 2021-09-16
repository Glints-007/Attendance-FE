import React, {useState} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userActions } from '../Actions';
import '../Styles/Login.css'

const Login = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [submitted, setSubmitted] = useState(false);
    
     // reset login status
     props.logout();

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitted(true);
        if (email && password) {
            console.log({email, password});
            props.login(email, password);
        }
    }

    return (
        <div className="section__login" style={{  backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background-login.jpg'})` }}>
            <div className="container">
                <h1 className="title-text text-center">Login</h1>
                <div className="form__wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="sm-text">Email</label>
                            <input className="form-input" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <label className="sm-text">Password</label>
                            <input className="form-input" type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                            <span className="text-right sm-text w-100"><Link to="/forgot-password">Forgot Password?</Link></span>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn text-white">Login</button>
                        </div>
                    </form>
                </div>
                <span className="p-relative text-center sm-text w-100">Don'have an account? <Link to="/register">Register here</Link></span>
            </div>
        </div>
    )   
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(Login);
export { connectedLoginPage as Login };