import React, {useState} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userActions } from '../Actions';
import { useForm } from "react-hook-form";
import RenderAuthButton from '../Components/RenderAuthButton';
import '../Styles/Login.css'
  

const Registration = (props) => {
    const [fullName, setFullname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [branchOffice, setBranchOffice] = useState();
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({});
    
    const handleSubmitForm = (data) => {
        setSubmitted(true);
    }

    return (
        <div className="section__login" style={{  backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background-login.jpg'})` }}>
            <div className="container">
                <h1 className="title-text text-center">Sign up</h1>
                <div className="form__wrapper">
                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                        <div className="form-group">
                            <label className="sm-text">Full Name</label>
                            <input className="form-input" {...register("fullName", { required: 'This field is required' })} value={fullName} onChange={(e)=>setFullname(e.target.value)}></input>
                            {errors.firstName && <span className="sm-text alert-text">{errors.fullName.message}</span>}
                        </div>
                        <div className="form-group">
                            <label className="sm-text">Email</label>
                            <input className="form-input" {...register("email", { 
                                                                                        required: 'This field is required',  
                                                                                        pattern: {
                                                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                                            message: "Invalid email address"
                                                                                        }})} 
                                                                                    value={email} 
                                                                                    onChange={(e)=>setEmail(e.target.value)}></input>
                            {errors.email && <span className="sm-text alert-text">{errors.email.message}</span>}
                        </div>
                        <div className="form-group">
                            <label className="sm-text">Password</label>
                            <input className="form-input" type="password" {...register("password", { required: "This field is required", minLength: {value:8, message:"Password must have at least 8 characters"} })} value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                            {errors.password && <span className="sm-text alert-text">{errors.password.message}</span>}
                        </div>
                        <div className="form-group">
                            <label className="sm-text">Confirm Password</label>
                            <input className="form-input" type="password" 
                                                    {...register("confirmPassword", { 
                                                        required: "This field is required",  
                                                        minLength: {value:8, message:"Password must have at least 8 characters"}, 
                                                        validate: value => value === password || "The passwords do not match" })} 
                                                    value={confirmPassword} 
                                                    onChange={(e)=>setConfirmPassword(e.target.value)}>
                                                
                            </input>
                            {errors.confirmPassword && <span className="sm-text alert-text">{errors.confirmPassword.message}</span>}
                        </div>
                        <div className="form-group">
                            <label className="sm-text">Branch Office</label>
                            <input className="form-input" {...register("branchOffice", { required: "This field is required" })} value={branchOffice} onChange={(e)=>setBranchOffice(e.target.value)}></input>
                            {errors.branchOffice && <span className="sm-text alert-text">{errors.branchOffice.message}</span>}
                        </div>
                        <div className="form-group">
                            <RenderAuthButton btnName="Sign up" submitted={submitted} />
                        </div>
                    </form>
                </div>
                <span className="p-relative text-center sm-text w-100">Already registered? <Link to="/login">Login here</Link></span>
            </div>
        </div>
    )   
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
};

const connectedLoginPage = connect(mapState, actionCreators)(Registration);
export { connectedLoginPage as Registration };