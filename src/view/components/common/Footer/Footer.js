import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <footer className="mt-5">
            <div className="container">
                <span>{new Date().getFullYear()} © Copyright TIM<sup>2</sup></span>
            </div>
        </footer>
    );
}
export default Footer
