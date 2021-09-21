import React, {useState} from 'react'
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { userActions } from '../Actions';
import '../Styles/Login.css'
import RenderAuthButton from '../Components/RenderAuthButton';

const ResetPassword = (props) => {
    const [email, setEmail] = useState();
    const [token, setToken] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({});
    
    const handleSubmitForm = () => {
        setSubmitted(true);
        if (password ===  confirmPassword) {
            const data = {
                    email:email, 
                    token:  token, 
                    password: password, 
                    confirm_password: confirmPassword
            };
            props.resetPassword(data);
        }
    }

    return (
        <div className="section__login" style={{  backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background-login.jpg'})` }}>
            <div className="custContainer">
                <h1 className="title-text text-center">Forgot Password</h1>
                <span className="text-center sm-text" style={{marginBottom: '20px'}}>Enter your email and we'll send you a link back to your account.</span>
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
                                                                                        onChange={(e)=>setEmail(e.target.value)}>

                            </input>
                            {errors.email && <span className="sm-text alert-text">{errors.email.message}</span>}
                        </div>
                        <div className="cust-form-group">
                            <label className="sm-text">Token</label>
                            <input className="form-input" {...register("token", { required: 'This field is required', })} 
                                                                                value={token} 
                                                                                onChange={(e)=>setToken(e.target.value)}>
                                                                            
                            </input>
                            {errors.token && <span className="sm-text alert-text">{errors.token.message}</span>}
                        </div>
                        <div className="cust-form-group">
                            <label className="sm-text">Email</label>
                            <input className="form-input" {...register("password", { required: "This field is required", 
                                                                                        minLength: {value:8, message:"Password must have at least 8 characters"} 
                                                                                    })} 
                                                                                    value={password} 
                                                                                    onChange={(e)=>setPassword(e.target.value)}>
                            </input>
                            {errors.password && <span className="sm-text alert-text">{errors.password.message}</span>}
                        </div>
                        <div className="cust-form-group">
                            <label className="sm-text">Email</label>
                            <input className="form-input" {...register("confirmPassword", { required: "This field is required",  
                                                                                                minLength: {value:8, message:"Password must have at least 8 characters"}, 
                                                                                                validate: value => value === password || "The passwords do not match" })
                                                                                            } 
                                                            value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}>

                            </input>
                            {errors.confirmPassword && <span className="sm-text alert-text">{errors.confirmPassword.message}</span>}
                        </div>
                        <div className="cust-form-group">
                            <RenderAuthButton btnName="Reset Password" submitted={submitted}/>
                        </div>
                    </form>
                </div>
                <span className="p-relative text-center sm-text w-100"><Link to="/Login">Back to previous page</Link></span>
            </div>
        </div>
    )   
}

function mapState(state) {
    const { sending } = state.resetpass;
    return { sending };
}

const actionCreators = {
    resetPassword: userActions.resetPassword
};

const connectedLoginPage = connect(mapState, actionCreators)(ResetPassword);
export { connectedLoginPage as ResetPassword };