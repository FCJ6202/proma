import React from 'react'
import {Link } from "react-router-dom";
import {useState,useEffect} from 'react'
import "./class-navbar.styles.css"

export default function ClassNavbar(props) {
    const classId=props.classId;
    var [ClassName, setClassName] = useState("")
    const RepoDataById = async (RepoId) => {
        const authToken = localStorage.getItem("token");
        //console.log("Add" + authToken);
        const url = `http://localhost:4000/u/repo/Repodata/${RepoId}`;
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token': authToken,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          //body: JSON.stringify({ repoName, createrName}) // body data type must match "Content-Type" header
        });
        const json = await response.json();

        return json.repoName;
    }

    useEffect( async () => {
        ClassName = await RepoDataById(classId)
        setClassName(ClassName)
    }, [])
    
    return (
        <>
            <nav  className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="me1 navbar-brand" href="#" style={{marginRight : "400px",marginBottom : "10px",marginTop : "10px",borderRadius : "20px"}}><h3>{ClassName}</h3></a>
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
                                <Link to={`/class/${classId}`}>
                                <div className="nav-link active" style={{marginRight : "20px"}}aria-current="page" >Stream</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/class/${classId}/people`}>
                                <div className="nav-link active" style={{marginRight : "20px"}}aria-current="page" >People</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to= {`/class/${classId}/classwork`}>
                                <div className="nav-link active" style={{marginRight : "20px"}}aria-current="page" >Classwork</div>
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                        {
                          (localStorage.getItem("token")!=="null")?
                          <Link to ="/signIn" onClick={()=>{localStorage.setItem("token",null)}}> <button className="btn btn-outline-dark" type="link">LogOut</button></Link>
                          :
                          <Link to ="/signIn"> <button className="btn btn-outline-dark" type="link">Login/Signup</button></Link>

                        }
                           
                        </form>

                    </div>
                </div>
            </nav>
        </>
    )
}
