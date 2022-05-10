import React from 'react'
//import CoverImage from '../images/rteg-min.jpg'
import CoverImage1 from '../../images/Student.png'
import CoverImage2 from '../../images/gray-abstract.jpg'
import Details from './Details'
import { Link } from 'react-router-dom'

export default function Card() {
    return (
        <>
            <div className="card bg-dark text-dark text-center" style={{marginBottom : "50px"}}>
                <img src={CoverImage2} className="card-img" alt="..." width={450} height={600}/>
                <div className="card-img-overlay">
                    <div className="card-body">
                        <h1 className="card-title" style={{marginTop : "200px"}}>Proma</h1>
                        <p className="card-text">A Project Management System</p>
                        {/* <a href="https://github.com/FCJ6202/proma" className="btn btn-primary">Git Repository</a> */}
                        {/* <Link to="/Home"><div className="btn btn-primary">Home</div></Link> */}
                    </div>
                </div>
            </div>
            <Details/>
        </>
    )
}