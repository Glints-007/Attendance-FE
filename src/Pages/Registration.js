import React, {useState} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userActions } from '../Actions';
import '../Styles/Login.css'

const Registration = (props) => {
    const [fullname, setFullname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [branchOffice, setBranchOffice] = useState();
    const [submitted, setSubmitted] = useState(false);
    

    const handleSubmit = (event) => {
        event.preventDefault();

        setSubmitted(true);
        if(password === confirmPassword) {
            console.log({message:'Successfully submitted', data:[{fullname:fullname, email:email, office:branchOffice}]})
        } else {
            console.log("Password doesn't match")
        }
    }

    return (
        <div className="section__login" style={{  backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background-login.jpg'})` }}>
            <div className="container">
                <h1 className="title-text text-center">Sign up</h1>
                <div className="form__wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="sm-text">Full Name</label>
                            <input className="form-input" name="fullname" value={fullname} onChange={(e)=>setFullname(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label className="sm-text">Email</label>
                            <input className="form-input" type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label className="sm-text">Password</label>
                            <input className="form-input" type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label className="sm-text">Confirm Password</label>
                            <input className="form-input" type="password" name="confirm-password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label className="sm-text">Branch Office</label>
                            <input className="form-input" name="barnch-office" value={branchOffice} onChange={(e)=>setBranchOffice(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn text-white">Sign up</button>
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