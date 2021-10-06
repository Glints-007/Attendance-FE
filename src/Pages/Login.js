import React, {useState} from 'react'
import { connect } from 'react-redux';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { alertActions, userActions } from '../Actions';
import { RenderAuthButton } from '../Components';
import '../Styles/Login.css'


const Login = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({});  

    const handleSubmitForm = (data, event) => {
        event.preventDefault();
        setSubmitted(true);

        if (email && password) {
            props.login(email, password);
        }
    }

    const handleInputEmailChanges = (event)=>{
        const inputValue = event.target.value;
        setEmail(inputValue)
    }
    
    const handleInputPasswordChanges = (event)=>{
        const inputValue = event.target.value;
        setPassword(inputValue)
    }

    return (
        <div className="section__login" style={{  backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background-login.jpg'})` }}>
            <div className="custContainer">
                <h1 className="title-text text-center">Login</h1>
                <div className="form__wrapper">
                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                        <div className="cust-form-group">
                            <label className="sm-text">Email</label>
                            <input className="form-input" {...register("email", { 
                                                                                        required: 'This field is required',  
                                                                                        pattern: {
                                                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                                            message: "Invalid email address"
                                                                                        }})} 
                                                                                    value={email} 
                                                                                    onChange={handleInputEmailChanges}></input>
                            {errors.email && <span className="sm-text alert-text">{errors.email.message}</span>}
                        </div>
                        <div className="cust-form-group">
                            <label className="sm-text">Password</label>
                            <input className="form-input" type="password" {...register("password", { required: "This field is required", minLength: {value:8, message:"Password must have at least 8 characters"} })} 
                                                            value={password} onChange={handleInputPasswordChanges}></input>
                            {errors.password && <span className="sm-text alert-text">{errors.password.message}</span>}
                            <span className="text-right sm-text w-100"><Link to="/forgot-password">Forgot Password?</Link></span>
                        </div>
                        <div className="cust-form-group">
                            <RenderAuthButton btnName="Login" submitted={submitted} />
                        </div>
                    </form>
                </div>
                <span className="p-relative text-center sm-text w-100">Don't have an account? <Link to="/register">Register here</Link></span>
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
    logout: userActions.logout,
    error: alertActions.error
};

const connectedLoginPage = connect(mapState, actionCreators)(Login);
export { connectedLoginPage as Login };