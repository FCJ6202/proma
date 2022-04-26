import React from 'react'
import {Link } from "react-router-dom";
import "./Navbar.css"

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="me1 navbar-brand" href="#" style={{marginRight : "400px",marginBottom : "10px",marginTop : "10px",borderRadius : "20px"}}><h3>Proma</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" style={{marginRight : "20px"}}aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" style={{marginRight : "20px"}} href="#">About</a> */}
                                <div  className="nav-link div-link" style={{marginRight : "20px"}} onClick={(e) => {e.preventDefault(); window.location.replace('/#about');}}>About</div>

                            </li>
                            <li className="nav-item">
                                <div  className="nav-link div-link" onClick={(e) => {e.preventDefault(); window.location.replace('/#contact');}}>Contact</div>
                            </li>
                        </ul>
                        <form className="d-flex">
                        <Link to ="/signIn"> <button className="btn btn-outline-dark" type="link">Login/Signup</button></Link>
                           
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
