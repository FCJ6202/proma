import React from 'react'
import {Link } from "react-router-dom";
import "./class-navbar.styles.css"

export default function ClassNavbar(classInfo) {
    return (
        <>
            <nav  className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="me1 navbar-brand" href="#" style={{marginRight : "400px",marginBottom : "10px",marginTop : "10px",borderRadius : "20px"}}><h3>{classInfo.className}</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <Link to='/home'>
                                <div className="nav-link active" style={{marginRight : "20px"}}aria-current="page" >Home</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/class/${classInfo._id}/stream`}>
                                <div className="nav-link active" style={{marginRight : "20px"}}aria-current="page" >Stream</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/class/${classInfo._id}/people`}>
                                <div className="nav-link active" style={{marginRight : "20px"}}aria-current="page" >People</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to= {`/class/${classInfo._id}/classwork`}>
                                <div className="nav-link active" style={{marginRight : "20px"}}aria-current="page" >Classwork</div>
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                           
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
