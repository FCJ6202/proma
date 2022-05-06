import "./Announcement.styles.css"
import React from 'react'
import image from "../../images/profile_pic.png"
import { Link } from 'react-router-dom'

const Announcement =({id,...props}) => {
  console.log(props.type)
  const newTo = { 
    pathname: `/class/${props.courseId}/stream/${id}/assignment`, 
  };

    return (
     
       (props.type==="assignment")?
      <div className="announcement">
          <div className="announcement__informationContainer">
            <div className="announcement__infoSection">
          
                  <div className="announcement__imageContainer">
                  
                    <img src={image} alt="Profile photo" />
                
                  </div>
                  <div className="announcement__nameAndDate">
                        <div className="announcement__name">{props.creatorName}</div>
                        <div className="announcement__date">{props.creationTime}</div>
                  </div>
            </div>
        
          </div>
          
          <div className="announcement__content">{props.text}</div>
      </div>
      : <Link to={newTo}> 
      <div className="announcement">
          <div className="announcement__informationContainer">
            <div className="announcement__infoSection">
          
                  <div className="announcement__imageContainer">
                  
                    <img src={image} alt="Profile photo" />
                
                  </div>
                  <div className="announcement__nameAndDate">
                        <div className="announcement__name">{props.creatorName} created an assignment</div>
                        <div className="announcement__date">{props.creationTime}</div>
                  </div>
            </div>
        
          </div>
          
      </div>
      </Link>

    )
    
  }
export default Announcement;
  