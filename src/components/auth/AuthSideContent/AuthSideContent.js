import React from 'react';
import './AuthSideContent.css';

function AuthSideContent() {
    return (
        <div className="side-info">
            <div className="logo-header">
                <div className="logo-icon"></div>
                <h3 className="logo-title">CookShare</h3>
            </div>
            <h1 className="side-text">Discover the world's top<br />Chefs & Bakers.</h1>
            <div className="illustration"></div>
            <h3 className="illustration-credit">Art by Creazilla</h3>
        </div>
    );
}

export default AuthSideContent;