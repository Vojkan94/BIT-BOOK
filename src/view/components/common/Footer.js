import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark footer">
            <div className="container pt-3 pb-3">
                <span class="text-muted">{new Date().getFullYear()} © Copyright TIM^2</span>
            </div>
        </footer>
    );
}
export default Footer