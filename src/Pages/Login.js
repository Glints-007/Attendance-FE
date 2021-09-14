import React from 'react'
import '../Styles/Login.css'

const Login = () => {
    return (
        <div className="section__login" style={{  backgroundImage: `url(${process.env.PUBLIC_URL + '/img/background-login.jpg'})` }}>
            <div className="container">
                <h1 className="title-text text-center">Login</h1>
                <div className="form__wrapper">
                    <form>
                        <div className="form-group">
                            <label className="sm-text">Username</label>
                            <input className="form-input"></input>
                        </div>
                        <div className="form-group">
                            <label className="sm-text">Password</label>
                            <input className="form-input"></input>
                            <span className="text-right sm-text w-100"><a href="/">Forgot Password?</a></span>
                        </div>
                        <div className="form-group">
                            <button className="btn text-white">Login</button>
                        </div>
                    </form>
                </div>
                <span className="p-relative text-center sm-text w-100">Don'have an account? <a href="/">Register here</a></span>
            </div>
        </div>
    )
}

export default Login
