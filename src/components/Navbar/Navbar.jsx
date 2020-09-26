import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="cont-navbar">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">FAUZI <b>APRIANA</b></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars icon-menu fa-lg"></i>
                </button>
                <div className="container container-nav">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#1">BIO DATA</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#2">INTRODUCE</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#3">EXPERIENCE</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">EDUCATION</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">SKILLS</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">CONTACT</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar