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
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/" className="card-link">Card link</a>
                                <a href="/" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
