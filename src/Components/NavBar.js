import React from "react";
import "../Styles/NavBar.css"
import logo from "../Assets/logo_tomefy.png"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar navbar-expand-md">
            <div className="container-fluid">
                <a className="navbar-brand" href="./">
                    <img src={logo} alt="Logo" style={{ width: '100px' }} />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link to={'/'} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/tools'} className="nav-link">Tools</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/formations'} className="nav-link">Formations</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default NavBar