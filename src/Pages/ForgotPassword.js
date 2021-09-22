import React, {useState} from 'react'
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { userActions } from '../Actions';
import '../Styles/Login.css'
import RenderAuthButton from '../Components/RenderAuthButton';

const ForgotPassword = (props) => {
    const [email, setEmail] = useState();
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({});
    
    const handleSubmitForm = () => {
        setSubmitted(true);
        props.forgotPassword(email);
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
                            <RenderAuthButton btnName="Send Email Notification" submitted={submitted}/>
                        </div>
                    </form>
                </div>
                <span className="p-relative text-center sm-text w-100"><Link to="/Login">Back to Login</Link></span>
            </div>
        </div>
    )   
}

function mapState(state) {
    const { sending } = state.forgotpass;
    return { sending };
}

const actionCreators = {
    forgotPassword: userActions.forgotPassword
};

const connectedLoginPage = connect(mapState, actionCreators)(ForgotPassword);
export { connectedLoginPage as ForgotPassword };