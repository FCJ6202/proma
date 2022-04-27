import './Stream.styles.css'
import React from 'react'
import {Component} from 'react'
import ClassInfoJson from '../../assets/classInfo.json'

class Stream extends Component
{
    constructor()
    {
        super();
        this.state=
        {
            classArray:[],
            CurrentClassInfo:{}
        };
    }
    componentDidMount()
    {
        // const classId=this.props.match.params.classId;
        console.log(this.props);
        const classId=1;
        console.log(classId)
        this.setState({classArray:Object.entries(ClassInfoJson.repositories)});
        for (const value of this.state.classArray) {
            if(value[1].id==classId)
            {
                this.setState({CurrentClassInfo:value})
                console.log(typeof(CurrentClassInfo))
                break;
            }
        }
    }

    render()
    {
        const {CurrentClassInfo}=this.state;
        return(
            <>  
                <div className='stream'>
                    <div className='class-header'>
                        <div className='class-title'>
                        {CurrentClassInfo.value[1].name}
                        </div>
                        <div className='class-description'>
                        {CurrentClassInfo.value[1].section}
                        </div>
                    </div>
                </div>
                
            </>
        )
    }
}

// export default Stream;



// {            "id": "1",
//     name: "",
//     creatorName: "",
//     section:"",
//     descriptionHeading: "",
//     description: "",
//     room: "",
//     ownerId: "",
//     creationTime:"",
//     updateTime:"",
//     enrollmentCode: "",
//     courseState: "",
//     alternateLink:"",
//     teacherGroupEmail: "",
//     courseGroupEmail: "",
//     courseImage:""
// }