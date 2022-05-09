import './Stream.styles.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Announcement from '../Announcement/Announcement.componenet'
import Bare from './postIcon'
const Stream = () => {
  const params = useParams();
  const classId = params.classId;
  // console.log(classId)
  const ClassInfoArray =
    [
      {
        "id": "6278dd406312f3625f49d96e",
        "name": "OOP",
        "creatorName": "O.P.Vyas",
        "section": "A",
        "descriptionHeading": "Object Oriented Programming",
        "description": "Project",
        "room": "1",
        "ownerId": "1",
        "creationTime": "2020-01-01",
        "updateTime": "2020-01-01",
        "enrollmentCode": "ABCD",
        "courseState": "PROVISIONED",
        "alternateLink": "classroom.proma/qeoqone",
        "teacherGroupEmail": "string",
        "courseGroupEmail": "string",
        "courseImage": "1"
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
        "creationTime": "2020-01-01",
        "updateTime": "2020-01-01",
        "enrollmentCode": "ABCD",
        "courseState": "PROVISIONED",
        "alternateLink": "classroom.proma/qeoqone",
        "teacherGroupEmail": "string",
        "courseGroupEmail": "string",
        "courseImage": "2"
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
        "creationTime": "2020-01-01",
        "updateTime": "2020-01-01",
        "enrollmentCode": "ABCD",
        "courseState": "PROVISIONED",
        "alternateLink": "classroom.proma/qeoqone",
        "teacherGroupEmail": "string",
        "courseGroupEmail": "string",
        "courseImage": "3"
      },
      {
        "id": "4",
        "name": "Data Structure",
        "creatorName": "O.P.Vyas",
        "section": "A",
        "descriptionHeading": "Object Oriented Programming",
        "description": "Project",
        "room": "1",
        "ownerId": "1",
        "creationTime": "2020-01-01",
        "updateTime": "2020-01-01",
        "enrollmentCode": "ABCD",
        "courseState": "PROVISIONED",
        "alternateLink": "classroom.proma/qeoqone",
        "teacherGroupEmail": "string",
        "courseGroupEmail": "string",
        "courseImage": "3"
      },
      {
        "id": "5",
        "name": "PPL",
        "creatorName": "O.P.Vyas",
        "section": "A",
        "descriptionHeading": "Object Oriented Programming",
        "description": "Project",
        "room": "1",
        "ownerId": "1",
        "creationTime": "2020-01-01",
        "updateTime": "2020-01-01",
        "enrollmentCode": "ABCD",
        "courseState": "PROVISIONED",
        "alternateLink": "classroom.proma/qeoqone",
        "teacherGroupEmail": "string",
        "courseGroupEmail": "string",
        "courseImage": "3"
      }
    ]
  const StreamAnnouncementArray =
    [
      {
        "courseId": "1",
        "id": "1",
        "text": "Lorem ipsum, quis  consequat.",
        "creatorName": "Ababa",
        "creatorUserId": "string",
        "creationTime": "2020-01-01",
        "updateTime": "2020-01-01",
        "type": "announcement",
        "alternateLink": "classroom.proma/qeoqone",
      },
      {
        "courseId": "1",
        "id": "2",
        "text": "Lorem ipsum, quis  consequat.",
        "creatorName": "Ababa",
        "creatorUserId": "string",
        "creationTime": "2020-01-01",
        "updateTime": "2020-01-01",
        "type": "assignment",
        "alternateLink": "classroom.proma/qeoqone",
      },
      {
        "courseId": "3",
        "id": "3",
        "text": "Lorem ipsum, quis  consequat.",
        "creatorName": "Ababa",
        "creatorUserId": "string",
        "creationTime": "2020-01-01",
        "updateTime": "2020-01-01",
        "type": "announcement",
        "alternateLink": "classroom.proma/qeoqone",
      },
    ]
  // console.log(classId)

  const FetchData = async () => {
    const authToken = localStorage.getItem("token");
    const url = "http://localhost:4000/u/repo/fetchallrepos";
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': authToken,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      //body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    // return json
    json?.map((data) => {
      console.log(data)
      if (data._id === classId) {
        setCurrentClassInfo(data);
      }
    })

  }

  useEffect(async() => {
    const datav = await FetchData();
  }, [])
  
  // useEffect(()=>{

  // },[ClassInfo])
  const [CurrentClassInfo, setCurrentClassInfo] = useState({});
  const [CurrentClassPosts, updateCurrentClassPosts] = useState([]);
  const [ClassArray, SetClassArray] = useState(ClassInfoArray);
  const [ClassPosts, SetClassPosts] = useState(StreamAnnouncementArray);



  // useEffect(() => {
  //   const arr = []
  //   const getClassPosts = () => {
  //     ClassPosts.map((data) => {
  //       if (data.courseId === classId) {
  //         arr.push(data);
  //       }
  //     })
  //   }
  //   getClassPosts();
  //   updateCurrentClassPosts(arr);
  //   console.log(ClassPosts)
  //    console.log(CurrentClassPosts);
  // }, [ClassPosts]);

  const handleSubmit =event => {
    event.preventDefault();
    console.log(event)
    const posts=ClassPosts.slice();
    const post = {
      "courseId": `${classId}`,
      "id": `${ClassPosts.length+1}`,
      "text": `${event.target[0].value}`,
      "creatorName": "Ababa",             // from authorization
      "creatorUserId": "string",          
      "creationTime": "2020-01-01",       //capture time
      "updateTime": "null",
      "type": "announcement",
      "alternateLink": "classroom.proma/qeoqone",
    }
      posts.push(post)
      SetClassPosts(posts);
      const currPost=CurrentClassPosts.slice();
      currPost.push(post)
      updateCurrentClassPosts(currPost);
      // console.log(ClassPosts)
      // console.log(CurrentClassPosts)
      event.target.reset()
  }


  return (

    <>
      <div className='stream'>
        <div className='class-header'>
          <div className='class-title'>
            {CurrentClassInfo.repoName}
          </div>
          <div className='class-description'>
            {CurrentClassInfo.createrName}
          </div>
        </div>
        <div className="announcement">
          <form className='form-post' onSubmit={handleSubmit}>
            <textarea className='input' type="text" cols="50" row="10" placeholder="Announce something to your class"></textarea>
            <button className='post-button'><Bare></Bare></button>
          </form>
        </div>

        {

          (CurrentClassPosts)?.slice(0).reverse().map(({ id, ...otherProps }) => {
              return (
                  <Announcement key={id} id={id} {...otherProps} />
              )
            
          }
          )

        }


      </div>

    </>
  )
}

export default Stream;
