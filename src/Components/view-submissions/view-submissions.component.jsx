import "./view-submission.styles.css"
import React from "react"
import ViewSubmissionNavbar from "../view-submission-navbar/view-submission-navbar.component";
import { Outlet, useParams } from "react-router-dom";
const ViewSubmission = ( )=>{
    
    const params=useParams();
    const postId=params.postId;
    const classId=params.classId;

    return(
        <>
            <ViewSubmissionNavbar postId={postId} classId={classId} />
            <Outlet />
        </>

    )
}

export default ViewSubmission;