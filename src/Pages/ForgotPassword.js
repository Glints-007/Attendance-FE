import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Login.css'

const ForgotPassword = (props) => {
    const [email, setEmail] = useState();
    const [submitted, setSubmitted] = useState(false);
    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
    }

    return (
        <div className="section__login" style={{  backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background-login.jpg'})` }}>
            <div className="container">
                <h1 className="title-text text-center">Forgot Password</h1>
                <span className="text-center sm-text" style={{marginBottom: '20px'}}>Enter your email and we'll send you a link back to your account.</span>
                <div className="form__wrapper">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="sm-text">Email</label>
                            <input className="form-input" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn text-white">Send Email Notification</button>
                        </div>
                    </form>
                </div>
                <span className="p-relative text-center sm-text w-100"><Link to="/Login">Back to previous page</Link></span>
            </div>
        </div>
    )   
}

export default ForgotPassword