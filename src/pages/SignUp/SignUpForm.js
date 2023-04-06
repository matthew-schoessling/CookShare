import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import AuthSideContent from '../../components/auth/AuthSideContent';

//SignUpForm will be used for users to fill in login sheet
function SignUpForm({user, onChange, onSubmit}) {
    return (
        <div>
            <AuthSideContent />
            <p className="login-link">Already a member? <Link to="/login" style={{ textDecorationColor: 'blue', textDecorationLine: 'none', color: 'blue' }}>Log In</Link></p>
            <form onSubmit={onSubmit} className="signup-form">
                <h1 className="form-header">Sign Up for CookShare</h1>
                <label className="first-name-label">First Name</label>
                <input className="first-name-input" onChange={onChange} type="text" id="first-name-input" value={user.firstName} name="firstName" placeholder="first name" required></input>
                <label className="last-name-label">Last Name</label>
                <input className="last-name-input" onChange={onChange} type="text" id="last-name-input" value={user.lastName} name="lastName" placeholder="last name" required></input>
                <label className="username-label">Username</label>
                <input className="username-input" onChange={onChange} type="text" id="username-input" value={user.username} name="username" placeholder="username" required></input>
                <label className="email-label">Email</label>
                <input className="email-input" onChange={onChange} type="email" id="email-input" value={user.email} name="email" placeholder="email" required></input>
                <label className="password-label">Password</label>
                <input className="password-input" onChange={onChange} type="password" id="password-input" value={user.password} name="password" min="0" required></input>
                <button className="signup-button" onSubmit={onSubmit}>
                    <h3>Sign Up</h3>
                </button>
            </form>
        </div>
    );
}

export default SignUpForm;