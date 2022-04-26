import './class.styles.css'
import React from 'react'
import ClassNavbar from '../../Components/class-navbar/class-navbar.component'
import {Outlet} from 'react-router-dom'

const ClassView = (classDetails) => {
    return(
    <>  
        <ClassNavbar/> 
        <Outlet/>
    </>
    )
}

export default ClassView;
