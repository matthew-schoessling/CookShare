import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';
import AuthSideContent from '../../components/auth/AuthSideContent';

function LogIn({onChange, onSubmit}) {
    return (
        <div>
            <AuthSideContent />
            <p className="sign-up-link">Not a member? <Link to="/signup" style={{ textDecorationColor: 'blue', textDecorationLine: 'none', color: 'blue'}}>Sign up</Link></p>
            <form onSubmit={onSubmit} className="login-form">
                <h1 className="form-header">Login to CookShare</h1>
                <input className="login-username-input" onChange={onChange} type="text"></input>
                <label className="login-password-label">Password</label>
                <input className="login-password-input" onChange={onChange} type="password"></input>
                <label className="login-username-label">Username</label>
                <button className="login-button" onSubmit={onSubmit}>
                    <h3>Log In</h3>
                </button>
            </form>
        </div>
    );
}

export default LogIn;