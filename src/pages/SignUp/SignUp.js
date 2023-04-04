import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import AuthSideContent from '../../components/auth/AuthSideContent';

function SignUp({onSubmit}) {
    return (
        <div>
            <AuthSideContent />
            <p className="login-link">Already a member? <Link to="/login" style={{ textDecorationColor: 'blue', textDecorationLine: 'none', color: 'blue' }}>Log In</Link></p>
            <form onSubmit={onSubmit} className="signup-form">
                <h1 className="form-header">Sign Up for CookShare</h1>
                <label className="first-name-label">First Name</label>
                <input className="first-name-input" type="text"></input>
                <label className="last-name-label">Last Name</label>
                <input className="last-name-input" type="text"></input>
                <label className="username-label">Username</label>
                <input className="username-input" type="text"></input>
                <label className="email-label">Email</label>
                <input className="email-input" type="email"></input>
                <label className="password-label">Password</label>
                <input className="password-input" type="password"></input>
                <button className="signup-button" onSubmit={onSubmit}>
                    <h3>Sign Up</h3>
                </button>
            </form>
        </div>
    );
}

export default SignUp;