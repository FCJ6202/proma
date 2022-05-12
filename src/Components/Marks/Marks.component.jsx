import "./Marks.styles.css"
import React from "react";
import { useEffect, useState,useRef } from 'react';

const Marks = () => {
    const StudentDetails = [

        {
            "id": "1",
            "name": "Jitu Rajak",
            "submitted": "true",
            "submission-link": "https://cseweb.ucsd.edu/~goguen/courses/130/midterm.pdf",
            "marks": "null"
        },

        {
            "id": "2",
            "name": "Ji Rajak",
            "submitted": "true",
            "submission-link": "https://cseweb.ucsd.edu/~goguen/courses/130/midterm.pdf",
            "marks": "25"
        },

        {
            "id": "3",
            "name": "Jitu Rak",
            "submitted": "true",
            "submission-link": "https://cseweb.ucsd.edu/~goguen/courses/130/midterm.pdf",
            "marks": "32"
        },

        {
            "id": "4",
            "name": "Jijak",
            "submitted": "false",
            "submission-link": "null",
            "marks": "null"
        },

        {
            "id": "5",
            "name": "Jitak",
            "submitted": "true",
            "submission-link": "https://cseweb.ucsd.edu/~goguen/courses/130/midterm.pdf",
            "marks": "67"
        },

        {
            "id": "6",
            "name": "Jitajak",
            "submitted": "true",
            "submission-link": "https://cseweb.ucsd.edu/~goguen/courses/130/midterm.pdf",
            "marks": "null"
        },

        {
            "id": "7",
            "name": "Jituk",
            "submitted": "false",
            "submission-link": "null",
            "marks": "null"
        },

    ]
    function isNumeric(str) {
        return !isNaN(str)
    }

    const [StudentDetailsArray, SetStudentDetailsArray] = useState(StudentDetails);
    const [Marks, setMarks] = useState("null");
    const [Handed, setHanded] = useState(0);
    const [Marked, setMarked] = useState(0);
    const [FormSubmitted, SetFormSubmitted] = useState(false);
    const HandleChange = (e) => {
        console.log(e);
        setMarks(e.target.value);
        SetFormSubmitted(false)
    }
    const HandleSubmit = (id, e) => {
        e.preventDefault();
        const details = StudentDetailsArray.slice(0);
        details.map((detail) => {
            if (detail.id === id) {
                detail.marks = Marks.slice(0);
            }
        })
        SetStudentDetailsArray(details);
        SetFormSubmitted(true);
        setMarks("null");
    }

    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
      }
    
    const prevArray=usePrevious(StudentDetailsArray)
    
    useEffect(() => {
                setMarked(Marked => Marked + 1);
    }, [StudentDetailsArray])
   
    useEffect(() => {
        StudentDetailsArray?.map((Student) => {
            let submittedv=(Student.submitted);
            let BoolSubmitted=(submittedv==="false")?false:true;
            if (BoolSubmitted ) {
                setHanded(Handed => Handed + 1);
            }
            if (Student.marks !== "null" ) {
                setMarked(Marked => Marked + 1);
            }

        })
    }, [])



    const getIfSubmitted= (str) =>
    {
                let submittedv=str;
                let BoolSubmitted=(submittedv==="false")?false:true;
                if (BoolSubmitted) {
                    return true;
                }
        
        return false;
    }
    const getIfMarked= (str) =>
    {
                let marksv=str;
                let BoolMarked=(marksv==="null")?false:true;
                if (BoolMarked) {
                    return true;
                }
        
        return false;
    }

    return (
        <div className="page-wrap">
            <div className="status-bar">
                <div className="item-wrap">
                    <div className="status-bar-item">
                        <div className="big-preview">{Handed}</div>
                        <div className="subtitle">Handed in</div>
                    </div>
                    <div className="status-bar-item">
                        <div className="big-preview">{StudentDetailsArray.length}</div>
                        <div className="subtitle">Assigned</div>
                    </div>
                    <div className="status-bar-item">
                        <div className="big-preview">{Marked}</div>
                        <div className="subtitle">Marked</div>
                    </div>
                </div>
            </div>
            <div>
                <hr className="line"></hr>
            </div>

            <div className="student-list">
                <div className="panel panel-primary" id="result_panel">
                    <div className="panel-heading"><h3 className="panel-title">Student List</h3>
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">

                            {
                                StudentDetailsArray?.map((student) => {
                                    return (
                                        <li className="list-group-item" key={student.id}>

                                            <div className="item">
                                                <div className="item-name-wrap">
                                                    <div className="item-name">{student.name}</div>
                                                </div>
                                                {
                                                    (getIfSubmitted(student.submitted))?
                                                    <a className="btn" href={`${student["submission-link"]}`} target="_blank" rel="noopener noreferrer"> View Submission</a>
                                                    :<>No Submission</>
                                                    
                                                }
                                                <div className="marks-wrap">
                                                {
                                                    (getIfMarked(student.marks))?
                                                    <>{student.marks}</>
                                                    :
                                                    <form onSubmit={(e) => HandleSubmit(student.id, e)}>
                                                    <input type="text" name="marks" placeholder="enter marks" onChange={HandleChange} id={`stu${student.id}`} />
                                                    <button type="submit">Return</button>
                                                    </form>

                                                }

                                                </div>

                                            </div>
                                        </li>
                                    )

                                })
                            }


                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Marks;