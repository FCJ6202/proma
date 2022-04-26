import React from 'react'

export default function Repo(props) {
    return (
        <>
            <div className="card text-center" style={{ width: "18rem" , height : "200px"}}>
                <div className="card-body" style={{borderRadius : "500px"}}>
                <i className="fa-solid fa-folder-tree fa-3x"></i>
                    <h5 className="card-title my-3">{props.RepoName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted mb-3">{props.CreaterName}</h6>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <a href="#" className="card-link mb-3">Open</a>
                    {/* <a href="#" className="card-link">Another link</a> */}
                </div>
            </div>
        </>
    )
}
