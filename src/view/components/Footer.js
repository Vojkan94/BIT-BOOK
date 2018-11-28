import React from "react";

const Footer = () => {
    return (
        <div className="card bg-dark fixed-bottom">
            <div className="card-body container text-light">
                {new Date().getFullYear()} © Copyright TIM^2
            </div>
        </div>
    );
}
export default Footer