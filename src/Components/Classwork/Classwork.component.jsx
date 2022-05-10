import './Classwork.styles.css'
import {FaPlus} from "react-icons/fa"
import React,{useState,useRef,useEffect} from 'react'
import DateTimePicker from 'react-datetime-picker'
import Announcement from '../Announcement/Announcement.componenet'

const Classwork = () => 
{
    const StreamAnnouncementArray =
    [
      {
        "courseId": "1",
        "id": "1",
        "text": "Lorem ipsum, quis  consequat.",
        "creatorName": "Me",
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
        "creatorName": "Me",
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
        "creatorName": "Me",
        "creatorUserId": "string",
        "creationTime": "2020-01-01",
        "updateTime": "2020-01-01",
        "type": "announcement",
        "alternateLink": "classroom.proma/qeoqone",
      },
    ]

    // const [courseId,setCourseId]=useState("1"); // collect from db
    const [Assignment, setAssignment] = useState({   // ye Individual repo hai jisme repo and creter ka naam jayega
        Title : "",
        CreatorName : "",
        Instructions:"",
        Points:"",
        Due:new Date(),
        Materials: [], 
    })
    const close = useRef(null);

    function isNumeric(str) {
        return !isNaN(str)       
    }
      
    const Handle = (e) => {
        console.log(e)
        if(e.target.id=="Points")
        {
            if(isNumeric(e.target.value.toString()))
            {
                setAssignment({...Assignment,[e.target.id] : e.target.value.toString()});
            }
            else
            {
                setAssignment({...Assignment,[e.target.id] : "100"});

            }
        }
        else
        {
            setAssignment({...Assignment,[e.target.id] : e.target.value.toString()});
        }
    }
    const HandleDue = (e) => {
        setAssignment({...Assignment,["Due"] : e});
    }

    const HandleSubmit = async() => { // this is for adding new repo by the user
        // await AddRepo(repo.RepoName,repo.CreatorName);
        setAssignment({
            Title : "",
            CreatorName : "",
            Instructions:"",
            Points:"",
            Due:"",
            Materials: [], 
            })
        close.current.click();
    }

    return (
        <div className='classwork'>
            {/* <!-- Button trigger modal --> */}
            <button className='create'  data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className='icon'><FaPlus/></div>
                    <div>Create</div>
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Assignment</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="exampleInputRepo" className="form-label">Title</label>
                                <input type="text" className="form-control" required value={Assignment.Title} onChange={Handle} id="Title" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputCreater" className="form-label">Instructions</label>
                                <textarea type="text" className="form-control" required value={Assignment.Instructions} onChange={Handle} id="Instructions" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputCreater" className="form-label">Points</label>
                                <input type="text" className="form-control" required value={Assignment.Points} onChange={Handle} id="Points" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputCreater" className="form-label">Material</label>
                                <input type="text" className="form-control" required value={Assignment.Materials} onChange={Handle} id="Materials" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputCreater" className="form-label">Due</label>
                                {/* <input type="text" className="form-control" required value={Assignment.Due} onChange={Handle} id="Due" /> */}
                              <div><DateTimePicker onChange={HandleDue} value={Assignment.Due} id="Due" /></div>
                                
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={close} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" onClick={HandleSubmit} >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
                <hr/>


                {

                    (StreamAnnouncementArray)?.slice(0).reverse().map(({ id, ...otherProps }) => {
                        return (
                         (otherProps.type=="assignment")?   <Announcement key={id} id={id} {...otherProps} />
                        :<></> 
                        )
                              
                    }
                    )

                }

        </div>
       
    )
}

export default Classwork;
