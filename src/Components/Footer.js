import React from 'react'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="card bg-dark" style={{marginTop : "50px",height : "200px"}}>
                    {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                    <div className="card-body text-white text-center">
                        <h5 className="card-title">Footer title</h5>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, cum?</p>
                        <p className="card-text"><small className="text-muted">Muted Text</small></p>
                    </div>
                </div>
            </footer>
        </>
    )
}
