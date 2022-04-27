import './Stream.styles.css'
import React from 'react'
import { useState,useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Announcement from '../Announcement/Announcement.componenet'
import Assignment from '../Assignment/Assignment.component'
const Stream = () => {
    const params=useParams();
    const classId=params.classId;
        const ClassInfoArray= 
        [
            {
                "id": "1",
                "name": "OOP",
                "creatorName": "O.P.Vyas",
                "section": "A",
                "descriptionHeading": "Object Oriented Programming",
                "description": "Project",
                "room": "1",
                "ownerId": "1",
                "creationTime":"2020-01-01",
                "updateTime":"2020-01-01",
                "enrollmentCode": "ABCD",
                "courseState": "PROVISIONED",
                "alternateLink": "classroom.proma/qeoqone",
                "teacherGroupEmail": "string",
                "courseGroupEmail": "string",
                "courseImage":"1"
              },
              {
                "id": "2",
                "name": "SE",
                "creatorName": "O.P.Vyas",
                "section": "A",
                "descriptionHeading": "Object Oriented Programming",
                "description": "Project",
                "room": "1",
                "ownerId": "1",
                "creationTime":"2020-01-01",
                "updateTime":"2020-01-01",
                "enrollmentCode": "ABCD",
                "courseState": "PROVISIONED",
                "alternateLink": "classroom.proma/qeoqone",
                "teacherGroupEmail": "string",
                "courseGroupEmail": "string",
                "courseImage":"2"
              },
              {
                "id": "3",
                "name": "DBMS",
                "creatorName": "O.P.Vyas",
                "section": "A",
                "descriptionHeading": "Object Oriented Programming",
                "description": "Project",
                "room": "1",
                "ownerId": "1",
                "creationTime":"2020-01-01",
                "updateTime":"2020-01-01",
                "enrollmentCode": "ABCD",
                "courseState": "PROVISIONED",
                "alternateLink": "classroom.proma/qeoqone",
                "teacherGroupEmail": "string",
                "courseGroupEmail": "string",
                "courseImage":"3"
              }
        ]
            const StreamAnnouncementArray= 
            [
                    {
                        "courseId": "1",
                        "id":"1",
                        "text": "Lorem ipsum, quis  consequat.",
                        "materials": ["link","link"],
                        "creatorName":"Ababa",
                        "creatorUserId": "string",
                        "creationTime":"2020-01-01",
                        "updateTime":"2020-01-01",
                        "type":"announcement",
                        "alternateLink": "classroom.proma/qeoqone",
                      },
                      {
                        "courseId": "1",
                        "id":"2",
                        "text": "Lorem ipsum, quis  consequat.",
                        "materials": ["link","link"],
                        "creatorName":"Ababa",
                        "creatorUserId": "string",
                        "creationTime":"2020-01-01",
                        "updateTime":"2020-01-01",
                        "type":"assignment",
                        "alternateLink": "classroom.proma/qeoqone",
                      },
                      {
                        "courseId": "3",
                        "id":"3",
                        "text": "Lorem ipsum, quis  consequat.",
                        "materials": ["link","link"],
                        "creatorName":"Ababa",
                        "creatorUserId": "string",
                        "creationTime":"2020-01-01",
                        "updateTime":"2020-01-01",
                        "type":"announcement",
                        "alternateLink": "classroom.proma/qeoqone",
                      },
                    ]
    // console.log(classId)
    const [CurrentClassInfo,setCurrentClassInfo]=useState({});
    const [CurrentClassPosts,updateCurrentClassPosts]=useState([]);
    const [ClassArray,SetClassArray]=useState(ClassInfoArray);
    const [ClassPosts,SetClassPosts]=useState(StreamAnnouncementArray);


    useEffect(() => {
        const getClassInfo = () =>
        {
            ClassArray.map( (data) => {
                if(data.id===classId)
                {
                    setCurrentClassInfo(data);
                }
            })
        }
         getClassInfo();
      },[]);
    
      useEffect(() => {
        const arr=[]
        const getClassPosts = () =>
        {
            ClassPosts.forEach( (data) => {
                if(data.courseId===classId)
                {
                    arr.push(data);
                }
            })
        }
         getClassPosts();
         updateCurrentClassPosts(arr);
      },[]);
      
    return(
    
    <>  
           {console.log(CurrentClassPosts)}

        <div className='stream'>
            <div className='class-header'>
                <div className='class-title'>
                 {CurrentClassInfo.name}
                </div>
                <div className='class-description'>
                {CurrentClassInfo.section}
                </div>
            </div>
                {
            
                    (CurrentClassPosts)?.map( ({id,...otherProps}) => 
                    {
                        return  <><Announcement key={id} {...otherProps}/></>
                    }  
                    )
                    
                }
            
            
        </div>
        
    </>
    )
}

export default Stream;

