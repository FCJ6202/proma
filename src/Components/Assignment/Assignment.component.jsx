import "./Assignment.styles.css"
import { useParams } from "react-router-dom";
import React from 'react';

const Assignment = ( ) =>
{
    const params= useParams();
    const postId=params.postId;
    console.log(postId);


    return(
      
        <div className="page-wrap">
                    <div className="assignment">
                        <div className="assignment-header">
                            <div className="assignment-title">C2 Review Test</div>

                            <div className="copy-link">

                            </div>
                      </div>
                        <div className="information-container">
                            <div className="creator-and-date">Dr. Anshu S Anand | Apr 22</div>
                            <div className="points-and-due">
                                <div className="points">10 points</div>
                                <div className="due">Due Apr 22, 11:45 AM</div>
                            </div>
                        </div>

                        <hr className="line"></hr>
                        <div className="assignment-text">Please find the attachment of the Test Paper.</div>
                        <div className="assignment-material"></div>
                        <hr className="line"></hr>

                    </div>

                    <div className="submission">
                            
                            <div className="submission-header">
                                <div className="submission-title">Your work</div>
                                <div className="submission-status">Turned in late</div>
                            </div>
                            <div className="submission-preview"></div>
                            <div className="button-wrapper"><button className="submit-button">Unsubmit</button></div>

                    </div>


            </div>
       
    )
}

export default Assignment;


                             