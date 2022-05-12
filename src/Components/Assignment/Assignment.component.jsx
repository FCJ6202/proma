import "./Assignment.styles.css"
import { Link, useParams } from "react-router-dom";
import {useEffect,useState} from 'react';
import React from 'react';
import axios from 'axios';

const Assignment = ( ) =>
{
    const [IsTeacher,setIsTeacher]=useState((window.document.URL.includes("stream"))?false:true);
    const repoId = window.document.URL.slice(28,52);
    const assignId = (IsTeacher == true)?window.document.URL.slice(63,87):window.document.URL.slice(60,84);
    console.log(assignId + " <-addignid")


    var [AssignmentArray,SetAssignmentArray]=useState([]);
    var [CurrentAssignment,setCurrentAssignment]=useState({});

    const FetchAssignData = async () => {
        const authToken = localStorage.getItem("token");
        //console.log("Add" + authToken);
        const url = `http://localhost:4000/u/assign/fetchdata/${repoId}`;
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token': authToken,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          //body: JSON.stringify({ Type, text}) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        AssignmentArray = json;
        SetAssignmentArray(AssignmentArray);
    }

    const ForCurrentAssignment = async () => {
        await FetchAssignData();
        AssignmentArray.map((data)=> {
            if(data._id == assignId){
                CurrentAssignment = data;
            }
        })

        setCurrentAssignment(CurrentAssignment);
    }

    console.log("isteacher in this file");
    //const [IsTeacher,setIsTeacher]=useState(true); // update using useeffect and 
    const DetermineBool = async () => {
        const authToken = localStorage.getItem("token");
        //console.log("Add" + authToken);
        const url = `http://localhost:4000/u/auth/${repoId}/usercheck`;
        const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'auth-token': authToken,
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          //body: JSON.stringify({ repoName, createrName}) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        console.log(json)
        setIsTeacher(json);
    }
    useEffect( async ()=>{
        await DetermineBool(); 
    },[IsTeacher])

    const params= useParams();
    const postId=params.postId;
    console.log(postId);
    console.log("iquehf")
    console.log(postId)
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
      
    const AssignmentArrayData= 
    [
              {
                "courseId": "1",
                "id":"1",
                "text": "Please find the attachment of the Test Paper.",
                "materials": [{"name":"testpaper","link":" https://cseweb.ucsd.edu/~goguen/courses/130/midterm.pdf"},{"name":"log sheet","link":" https://wikieducator.org/images/4/41/Logrithm_Table.pdf"}], 
                "creatorName":"Dr Anshu",
                "creatorUserId": "string",
                "creationTime":"2020-01-01",
                "updateTime":"2020-01-01",
                "title":"C2 Review Test",
                "points":"10",
                "dueDate":"2020-04-22",
                "dueTime":"252",//fraction of day  https://stackoverflow.com/questions/538739/best-way-to-store-time-hhmm-in-a-database
                "alternateLink": "classroom.proma/qeoqone",
                "isSubmitted":"false",
                "submitDate":"NULL",
                "submitTime":"NULL",
              },
              {
                "courseId": "1",
                "id":"2",
                "text": "Please find the attachment of the Test Paper.",
                "materials": [{"name":"testpaper","link":" https://cseweb.ucsd.edu/~goguen/courses/130/midterm.pdf"},{"name":"log sheet","link":" https://wikieducator.org/images/4/41/Logrithm_Table.pdf"}], 
                "creatorName":"Dr Anshu",
                "creatorUserId": "string",
                "creationTime":"2020-01-01",
                "updateTime":"2020-01-01",
                "title":"C2 Review Test",
                "points":"10",
                "dueDate":"2020-04-22",
                "dueTime":"252",//fraction of day  https://stackoverflow.com/questions/538739/best-way-to-store-time-hhmm-in-a-database
                "alternateLink": "classroom.proma/qeoqone",
                "isSubmitted":"true",
                "submitDate":"2020-04-22",
                "submitTime":"251",
              },

            ]
            const [CurrentTime,setTime]=useState({});
            const [AssignmentStatus,SetAssignmentStatus]=useState("");
            const [selectedFile, setSelectedFile] = React.useState(null);

            const handleSubmit =async (event) => {
                console.log("enter handle submit");
                event.preventDefault()
                const formData = new FormData();
                formData.append("selectedFile", selectedFile);
                try {
                  const response = await axios({
                    method: "post",
                    url: "/api/upload/file",
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" },
                  });
                
                //capture time and update Assign Array data with it, update status                     
                  let curr=CurrentAssignment;
                  curr.isSubmitted="true";
                  let d = new Date();
                  let datestring =`${d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate()}`;
                  curr.submitDate=datestring;
                  let timestring=`${d.getHours*60+d.getMinutes}`;
                  curr.submitTime=timestring;
                  setCurrentAssignment(curr);
                  console.log(curr)
                  console.log(CurrentAssignment)
                } 
                
                catch(error) {
                  console.log(error)
                  console.log("qiewuhdw")
                }


              }
            
              const handleFileSelect = (event) => {
                  console.log("in handle submmit")
                setSelectedFile(event.target.files[0])
              }
            
            // useEffect(()=>{
            //     console.log(AssignmentArrayData)
            //     console.log("pwjepf")
            //     SetAssignmentArray(AssignmentArrayData)
            //     console.log(AssignmentArray)
            // },[]);


            useEffect(async () => {
                //console.log("fires use effect")
                //console.log(AssignmentArray)
                await ForCurrentAssignment();
                console.log(CurrentAssignment)
              },[]);


              useEffect(() => {
                  console.log("daate")
                let curr=new Date();
                setTime(curr);
          },[]);


      useEffect(()=>{
            console.log("ujhyvty")
            let submitted=(CurrentAssignment.isSubmitted);
            console.log(CurrentAssignment)
            console.log(submitted)
            let BoolSubmitted=(submitted==="false")?false:true;
            const isLate = ()=>
            {
                if(CurrentTime.getFullYear()>parseInt(CurrentAssignment.dueDate.substring(0,4))) return true;
                if(CurrentTime.getMonth()+1>parseInt(CurrentAssignment.dueDate.substring(5,7))) return true;
                if(CurrentTime.getDate()>parseInt(CurrentAssignment.dueDate.substring(8,10))) return true;
                if(CurrentTime.getHours()>(parseInt(CurrentAssignment.dueTime)/60)) return true;
                if(CurrentTime.getMinutes()>(parseInt(CurrentAssignment.dueTime)%60)) return true;
            return false;
        }
            const SubmittedLate = ()=>
            {
                if(parseInt(CurrentAssignment.submitDate.substring(0,4))>parseInt(CurrentAssignment.dueDate.substring(0,4))) return true;
                if(parseInt(CurrentAssignment.submitDate.substring(5,7))>parseInt(CurrentAssignment.dueDate.substring(5,7))) return true;
                if(parseInt(CurrentAssignment.submitDate.substring(8,10))>parseInt(CurrentAssignment.dueDate.substring(8,10))) return true;
                if((parseInt(CurrentAssignment.submitTime)/60)>(parseInt(CurrentAssignment.dueTime)/60)) return true;
                if((parseInt(CurrentAssignment.submitTime)%60)>(parseInt(CurrentAssignment.dueTime)%60)) return true;
              return false;
          }
    
    
            let status="";
            if(BoolSubmitted)
            {
                if(SubmittedLate)
                {
                    status="turned in late"
                }
                else
                {
                    status="turned in"
                }
            }
            else
            {
                if(isLate)
                {
                    status="missing"
                }
                else
                {
                    status="turn in"
                }
            }
            SetAssignmentStatus(status);
    },[CurrentAssignment])

    return(
      
        <div className="page-wrap">
            <div className="assignment">
                <div className="assignment-header">
                    <div className="assignment-title">{CurrentAssignment.title}</div>

                    <div className="copy-link">

                    </div>
                </div>
                <div className="information-container">
                    <div className="creator-and-date">{`${CurrentAssignment.CreaterName} | ${CurrentAssignment.UpdationTime}`}</div>
                    <div className="points-and-due">
                        <div className="points">{`${CurrentAssignment.points} points`}</div>
                        <div className="due">{`Due ${CurrentAssignment.dueDate} ${parseInt(CurrentAssignment.dueTime / 60)}:${CurrentAssignment.dueTime % 60} hours`}</div>
                    </div>
                </div>

                <hr className="line"></hr>
                <div className="assignment-text">{CurrentAssignment.text}</div>
                <div className="assignment-material">
                    {/* <a href={`${CurrentAssignment.materials[0].link}`} target = "_blank" rel = "noopener noreferrer"> {`${CurrentAssignment.materials[0].name}`}</a> */}
                    {/* {CurrentAssignment.materials?.map((material) => {return (<><a href={`${material.link}`} target = "_blank" 
rel = "noopener noreferrer"> {`${material.name}`}</a><br></br></>)})} */}
                </div>

            <hr className="line"></hr>



        </div>

     
        {
                (IsTeacher)?
                <></>
                :
                <div className="submission">

                <div className="submission-header">
                    <div className="submission-title">Your work</div>
                    <div className="submission-status">{`${AssignmentStatus}`}</div>

                </div>
                <form onSubmit={handleSubmit}>
                    {/* <div className="submission-preview"></div> */}
                    <div className="button-wrapper"><input type="file" onChange={handleFileSelect}/></div>
                    {/* <input type="submit" value="Upload File" /> */}
                <div className="button-wrapper"><button className="submit-button" type="submit" value="Upload File">Submit</button></div>

                </form>


            </div>


        }
        
      

            </div>
       
    )
}

export default Assignment;


                                     // const fetchAssignArray=()=>
            // {
            //     return AssignmentArrayData;
            // }
    
            // // const fetchAssignArray=()=>
            // // {
            // //     return AssignmentArrayData;
            // // }

            // useEffect(()=>{
            //     console.log(AssignmentArrayData)
            //     console.log("pwjepf")
            //     SetAssignmentArray(AssignmentArrayData)
            //     // const getAssignmentArray=async()=>{
            //     //     try {
            //     //         const arr=await fetchAssignArray();

            //     //     } catch (error) {
            //     //         console.log(error)
            //     //     }
            //     //     console.log("tikaa")
            //     //     console.log(arr)

            //     //     SetAssignmentArray(arr);
            //     // };
            //     // getAssignmentArray();
            //     // console.log("hable")
            //     // console.log(AssignmentArray)
            //     // // console.log(AssignmentArray)
            //     // const searchIndex=AssignmentArray.findIndex((data)=>data.id===postId);
            //     // console.log("tabla")
            //     // console.log(searchIndex)
            //     // setCurrentAssignment(AssignmentArray[searchIndex]);
            //     //         console.log("habla")
            //     //         console.log(CurrentAssignment)

            //     // console.log(AssignmentArray.map)
            // },[]);

            // useEffect(() => {
            //     console.log("fires use effect")
            //         AssignmentArray.map( (data) => {
            //             console.log(`${data.id} helo`)
            //             if(data.id===postId)
            //             {
            //                 setCurrentAssignment(data);
            //                 console.log("habla")
            //                 console.log(data)
            //             }
            //         })
            //     // const searchIndex=AssignmentArray.findIndex((data)=>data.id===postId);
            //     // console.log("tabla")
            //     // console.log(searchIndex)
            //     // setCurrentAssignment(AssignmentArray[searchIndex]);
            //     //         console.log("habla")
            //     //         console.log(CurrentAssignment)


            //   },[postId,AssignmentArray]);

            // {
            //     "courseId": "1",
            //     "id":"1",
            //     "text": "Please find the attachment of the Test Paper.",
            //     "materials": [{"name":"testpaper","link":" https://cseweb.ucsd.edu/~goguen/courses/130/midterm.pdf"},{"name":"log sheet","link":" https://wikieducator.org/images/4/41/Logrithm_Table.pdf"}], 
            //     "creatorName":"Dr Anshu",
            //     "creatorUserId": "string",
            //     "creationTime":"2020-01-01",
            //     "updateTime":"2020-01-01",
            //     "title":"C2 Review Test",
            //     "points":"10",
            //     "dueDate":"2020-04-22",
            //     "dueTime":"252",//fraction of day  https://stackoverflow.com/questions/538739/best-way-to-store-time-hhmm-in-a-database
            //     "alternateLink": "classroom.proma/qeoqone",
            //     "isSubmitted":"false",
            //     "submitDate":"NULL",
            //     "submitTime":"NULL",
            //   },