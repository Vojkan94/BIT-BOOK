import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {
    const logout = () => {
        sessionStorage.removeItem('sessionId');
    }
    return (
        <header className="nav">
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="nav-logo navbar-brand" to="/">
                <img src="https://i.imgur.com/6DlUpLk.png" alt="logo" />
                </Link>
                {sessionStorage.getItem('sessionId')
                ?
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                : null}
                {sessionStorage.getItem('sessionId')
                    ? <div className="nav-ul collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <Link to="/feed" className="nav-link nav-link-header">
                            <i className="fa fa-rss"></i>
                            <span className="nav-icon">Feed</span>
                            </Link></li>
                            <li className="nav-item">
                            <Link to="/people" className="nav-link nav-link-header">
                            <i className="fa fa-users"></i>
                            <span className="nav-icon">People</span>
                            </Link></li>
                            <li className="nav-item">
                            <Link to="/myprofile" className="nav-link nav-link-header">
                            <i className="fa fa-user"></i>
                            <span className="nav-icon">Profile</span>
                            </Link></li>
                            <li className="nav-item" onClick={logout}>
                            <Link to="/" className="nav-link nav-link-header">
                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                            <span className="nav-icon">Logout</span>
                            </Link></li>
                        </ul>
                    </div>
                    : null}
            </nav>
            </div>
        </header>
    )
}
export default Header;
