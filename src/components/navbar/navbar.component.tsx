import React, { useState } from "react";


const Navbar: React.FC = () => {
    const [isActive, setisActive] = useState(false);
    return (
        <div className="container">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <h3 className="is-uppercase has-text-weight-bold is-size-4">
                            VR
                            <span className="is-size-6 is-family-monospace has-text-weight-medium"> Varad Rocks</span>
                        </h3>
                    </a>
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
                    <div className="navbar-end">
                        <a className="navbar-item">Home</a>
                        <a className="navbar-item">About</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
