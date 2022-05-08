import './class.styles.css'
import React from 'react'
// import {useState,useEffect} from 'react'
import ClassNavbar from '../../Components/class-navbar/class-navbar.component'
import {Outlet} from 'react-router-dom'
// import { Navigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const ClassView = () => {
    const params=useParams();
    
    return(
    <>  
        <ClassNavbar classId={params.classId}/>
        
        <Outlet/>

    </>
    )
}

export default ClassView;



    // const [RedirectBool,setRedirectBool]=useState(true);
    // useEffect(() => {
    //     setRedirectBool(false);
    // },[]);
        {/* {RedirectBool && (<Navigate to={`/class/${params.classId}/stream`} replace={true}/>)} */}
