import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';
import AuthSideContent from '../../components/auth/AuthSideContent';

//LogInForm will be used for users to fill in login sheet
function LogInForm({user, onChange, onSubmit}) {
    return (
        <div>
            <AuthSideContent />
            <p className="sign-up-link">Not a member? <Link to="/signup" style={{ textDecorationColor: 'blue', textDecorationLine: 'none', color: 'blue'}}>Sign up</Link></p>
            <form onSubmit={onSubmit} className="login-form">
                <h1 className="form-header">Login to CookShare</h1>
                <input className="login-email-input" onChange={onChange} type="email" id="login-email-input" value={user.email} name="email" placeholder="email" required></input>
                <label className="login-email-label">Email</label>
                <input className="login-password-input" onChange={onChange} type="password" id="login-password-input" value={user.password} name="password" min="0" required></input>
                <label className="login-password-label">Password</label>
                <button className="login-button" onSubmit={onSubmit}>
                    <h3>Log In</h3>
                </button>
            </form>
        </div>
    );
}

export default LogInForm;