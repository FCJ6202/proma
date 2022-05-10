import React from 'react'
import FirstImage from '../../../images/2.jpeg'

export default function First() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-6">
                        <img src={FirstImage} className="card-img" height="450px" width="400px" alt="..." />
                    </div>
                    <div className="col col-lg-6">
                        <div className="card" style={{width: "30rem",marginRight : "10px",marginTop : "100px"}}>
                            <div className="card-body" id='about'>
                                <h5 className="card-title">About</h5>
                                <h6 className="card-subtitle mb-2 text-muted">A Group Project for Software Engineering (Jan-Jun) 2022</h6>
                                <span>Proma is a project management software allowing interaction and project submissions</span><br/><br/>
                                <p className="card-text">
                                    <pre>
                                  GROUP MEMBERS:<br/><br/>
                                            AMAN UTKARSH 		        	IIB2020027<br/>
                                            JITU RAJAK 		        	 	IIT2020218<br/>
                                            MISRA GAUTAM RAJEEV     IIB2020039<br/>
                                            MOHIT PANWAR 			        IIB2020043<br/>
                                            PRANAV SAHU				         IIT2020251<br/>
                                    </pre>
                                </p>
                                <a href="https://github.com/FCJ6202/proma" className="card-link">Github Repository</a>
                                {/* <a href="/" className="card-link">Another link</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
