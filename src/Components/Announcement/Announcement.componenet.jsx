import "./Announcement.styles.css"
import React from 'react'
import image from "../../images/profile_pic.png"
import { Link } from 'react-router-dom'

const Announcement =({id,...props}) => {
  console.log(props)
  //const classId = window.document.URL.slice(28,52);
  const newTo = (props.view==="student")?{ pathname: `/class/${props.RepoId}/stream/${id}/assignment`}:{ pathname: `/class/${props.RepoId}/classwork/${id}`};

    return (
     
       (props.Type==="announcement")?
      <div className="announcement">
          <div className="announcement__informationContainer">
            <div className="announcement__infoSection">
          
                  <div className="announcement__imageContainer">
                  
                    <img src={image} alt="Profile photo" />
                
                  </div>
                  <div className="announcement__nameAndDate">
                        <div className="announcement__name">{props.CreaterName}</div>
                        <div className="announcement__date">{props.CreationTime}</div>
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
                        <div className="announcement__name">{props.CreaterName} {props.title}</div>
                        <div className="announcement__date">{props.CreationTime}</div>
                  </div>
            </div>
        
          </div>
          
      </div>
      </Link>

    )
    
  }
export default Announcement;
  