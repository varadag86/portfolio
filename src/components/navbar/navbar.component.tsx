import React, { useState } from "react";


const Navbar: React.FC = () => {
    const [isActive, setisActive] = useState(false);
    return (

        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a
                    onClick={() => {
                        setisActive(!isActive);
                    }}
                    role="button"
                    className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div
                id="navbarBasicExample"
                className={`navbar-menu ${isActive ? "is-active" : ""}`}
            >
                <div className="navbar-start">
                    <a className="navbar-item">Home</a>
                    <a className="navbar-item">About</a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;
