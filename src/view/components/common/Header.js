import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">BIT BOOK</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Feed</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">People</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#!">Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header