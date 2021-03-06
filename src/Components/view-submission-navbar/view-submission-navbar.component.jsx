import React from 'react'
import {Link } from "react-router-dom";
import "./view-submission-navbar.styles.css"

export default function ViewSubmissionNavbar(props) {
    const classId=props.classId;
    const postId=props.postId;
    const newTo =  `/class/${classId}/classwork/${postId}`
    return (
        <>
            <nav  className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <a className="me1 navbar-brand" href="#" style={{marginRight : "400px",marginBottom : "10px",marginTop : "10px",borderRadius : "20px"}}><h3><pre>               </pre></h3></a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <Link to={newTo}>
                                <div className="nav-link active" style={{marginRight : "20px"}}aria-current="page" >Instructions</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/class/${classId}/classwork/${postId}/marks`}>
                                <div className="nav-link active" style={{marginRight : "20px"}}aria-current="page" >Marks</div>
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
