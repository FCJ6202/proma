import React from 'react'
//import CoverImage from '../images/rteg-min.jpg'
import CoverImage1 from '../../images/Student.png'
import Details from './Details'

export default function Card() {
    return (
        <>
            <div className="card bg-dark text-dark text-center" style={{marginBottom : "50px"}}>
                <img src={CoverImage1} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <div className="card-body">
                        <h1 className="card-title" style={{marginTop : "200px"}}>Special title treatment</h1>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <Details/>
        </>
    )
}