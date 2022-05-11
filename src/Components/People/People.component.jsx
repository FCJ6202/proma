import './People.styles.css'
import {FaUserPlus} from "react-icons/fa"
import image from "../../images/profile_pic.png"
import React,{useState,useRef,useEffect} from 'react'

    const Teachers=[
        {
            name:"OP Vyas",
            id:"1",
            email:"vyas@gmail.com"
        },
        {
            name:"Bagesh Kumar",
            id:"2",
            email:"bagesh@gmail.com"

        },
        {
            name:"Nand Yadav",
            id:"3",
            email:"nand@gmail.com"

        },
        {
            name:"Aditya Singh",
            id:"4",
            email:"aditya@gmail.com"

        }  
   
    ]
    const Students=[
        {
            name:"Aman Utkarsh",
            id:"1",
            email:"aman@gmail.com"
        },
        {
            name:"Jitu Rajak",
            id:"2",
            email:"jitu@gmail.com"
        }  
       ]

const People = () => 
{
    const close = useRef(null); 
    const [code, setcode] = useState("ewfjbuiewf"); //get code using db
    const [SearchName, setSearchName] = useState(""); //get code using db
    const [FoundName, setFoundName] = useState(false); //get code using db
    const [SearchClicked,setSearchClicked]=useState(false);
    const HandleSearchName = (e) => {
        setSearchName(e.target.value.toString());
    }
    const HandleSearch =  (e) => {
        console.log(e)
        Students.map((student)=>{
            if(student.email===SearchName)
            {
                 setFoundName(true)
                //  console.log(FoundName)
                    // setFoundName(prev => !prev);
            }
        })
        setSearchClicked(true)
    }
    useEffect(()=>
    {
        setFoundName(false)
        setSearchClicked(false)
    },[SearchName])

    const HandlePromotion = async() => { 
            //handle promotion code
        setSearchName("")
        setFoundName(false)
        close.current.click();
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
                Teachers?.map((Teacher)=>
                {
                    return (
                        <>
                            <div id={Teacher.id}>
                                <div className='item' >
                                    <div className="image">
                                        <img src={image} alt="Profile photo" />                            
                                    </div>

                                    <div className='name'>{Teacher.name}</div>        
                                </div>
                                <hr className='item-line'/>
                            </div>
                        </>
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
                Students?.map((Student)=>
                {
                    return (
                        <> 
                        <div  id={Student.id}>
                            <div className='item'>
                                    <div className="image">
                                        <img src={image} alt="Profile photo" />                            
                                    </div>

                                    <div className='name'>{Student.name}</div>        
                                </div>
                                <hr className='item-line'/>
                        </div>
                        </>
                    )
                })
            }

        </div>
    </>
)
}
export default People;
