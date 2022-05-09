import React from 'react'

export default function Footer() {
    return (
        <>
            <footer id="contact">
                <div className="card bg-dark" style={{marginTop : "50px",height : "200px"}}>
                    {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                    <div className="card-body text-white text-center">
                        <h5 className="card-title">Contact</h5>
                        <p className="card-text">Contact us for comments using profiles at github repo</p>
                        <p className="card-text"><small className="text-muted">Crafted with ❤️</small></p>
                    </div>
                </div>
            </footer>
        </>
    )
}
