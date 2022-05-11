import './People.styles.css'
import {FaUserPlus} from "react-icons/fa"
import image from "../../images/profile_pic.png"
import React,{useState,useRef,useEffect} from 'react'
import { check } from 'express-validator'

    // const Teachers=[
    //     {
    //         name:"OP Vyas",
    //         id:"1"
    //     },
    //     {
    //         name:"Bagesh Kumar",
    //         id:"2"

    //     },
    //     {
    //         name:"Nand Yadav",
    //         id:"3"

    //     },
    //     {
    //         name:"Aditya Singh",
    //         id:"4"

    //     }  
   
    // ]
    // const Students=[
    //     {
    //         name:"Aman Utkarsh",
    //         id:"1"
    //     },
    //     {
    //         name:"Jitu Rajak",
    //         id:"2"
    //     }  
    //    ]

const People = () => 
{
    const repoId = window.document.URL.slice(28,52);
    const close = useRef(null);
    const [PeopleData, setPeopleData] = useState({
        Teachers : [],
        Students : []
    })
    const [code, setcode] = useState(repoId); //get code using db
    const [SearchName, setSearchName] = useState(""); //get code using db
    const [FoundName, setFoundName] = useState(false); //get code using db
    const [SearchClicked,setSearchClicked]=useState(false);
    const HandleSearchName = (e) => {
        setSearchName(e.target.value.toString());
    }
    const HandleSearch =  (e) => {
        console.log(e)
        PeopleData.Students.map((student)=>{
            if(student.email===SearchName)
            {
                 setFoundName(true)
                //  console.log(FoundName)
                    // setFoundName(prev => !prev);
            }
        })
        setSearchClicked(true)
    }

    const RepoDataById = async (RepoId) => {
        const authToken = localStorage.getItem("token");
        //console.log("Add" + authToken);
        const url = `http://localhost:4000/u/repo/Repodata/${RepoId}`;
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
        return json;
    }

    const UserDetailsById = async (UserId) => {
        const authToken = localStorage.getItem("token");
        //console.log("Add" + authToken);
        const url = `http://localhost:4000/u/auth/userdata/${UserId}`;
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
        return json;
    }

    const FetchDataForPeople = async () => {

        const data = await RepoDataById(repoId);
        const admin = data.Admin;
        const member = data.Member;

        // console.log(admin);
        // console.log(member);
        var Teachers = [],Students = [];

        for(var i=0;i<admin.length;i++){
            const temp = await UserDetailsById(admin[i]);
            Teachers.push(temp);
        }
        //console.log(Teachers);
        //setTeachers(Teachers);

        for(var i=0;i<member.length;i++){
            const temp = await UserDetailsById(member[i]);
            Students.push(temp);
        }
        //console.log(Students);
        //setStudents(Students);

        return {Teachers,Students};
    }
    useEffect(async ()=>
    {
        const realdata = await FetchDataForPeople();
        setPeopleData(realdata);
        setFoundName(false)
        setSearchClicked(false)

    },[SearchName])

    const HandlePromotion = async() => { 
            //handle promotion code
        setSearchName("")
        setFoundName(false)
        close.current.click();
    }

    const check = (data) => {
        console.log(data);
    }


    return(
    
    <>
    {/* ..........................Teacher.......................................... */}

        <div className='people-page'>
            <div className='title-head'>
                <div className='title'>Teachers</div>
        
                <button className='invite' data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    <FaUserPlus className='icon'/>
                </button>
            </div>
            <hr/>
                        {/* <!-- Modal --> */}
                        <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Promote to Teacher</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleInputRepo" className="form-label">Search Email</label>
                                <input type="text" className="form-control" required value={SearchName} onChange={HandleSearchName} id="SearchName" />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={HandleSearch} >Search</button>
                            {
                                (SearchClicked)?
                                        (FoundName)?
                                        <div>Found Student, click to promote</div>
                                        :
                                        <div>Not found</div>

                                :
                                    <></>
                            }
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={close} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {FoundName &&  <button type="submit" className="btn btn-primary" onClick={HandlePromotion} >Promote</button>
}
                        </div>
                    </div>
                </div>
            </div>


            {
                PeopleData.Teachers?.map((Teacher)=>
                {
                    return (
                            <div key={Teacher._id}>
                                <div>
                                    <div className='item' >
                                        <div className="image">
                                            <img src={image} alt="Profile photo" />                            
                                        </div>

                                        <div className='name'>{Teacher.name}</div>        
                                    </div>
                                    <hr className='item-line'/>
                                </div>
                            </div>
                    )
                })
            }
        
{/* ..........................Student.......................................... */}
            <div className='title-head'>
                <div className='title'>Students</div>
                <button className='invite' data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <FaUserPlus className='icon'/>
                </button>
            </div>
            <hr/>
                        {/* <!-- Modal Invitation code --> */}
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Invitation Code</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                    <div>{code}</div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button"  className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {navigator.clipboard.writeText(code)}}>Copy</button>
                            <button type="button" ref={close} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>

            {
                PeopleData.Students?.map((Student)=>
                {
                    return ( 
                        <div key={Student._id}>
                            <div>
                                <div className='item'>
                                        <div className="image">
                                            <img src={image} alt="Profile photo" />                            
                                        </div>

                                        <div className='name'>{Student.name}</div>        
                                </div>
                                    <hr className='item-line'/>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    </>
)
}
export default People;
