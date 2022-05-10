import './People.styles.css'
import {FaUserPlus} from "react-icons/fa"
import image from "../../images/profile_pic.png"
    const Professors=[
        {
            name:"OP Vyas"
        },
        {
            name:"Bagesh Kumar"
        }
    ]
    const Assistants=[
     {
         name:"Nand Yadav"
     },
     {
         name:"Aditya Singh"
     }  
    ]
    const Students=[
        {
            name:"Aman Utkarsh"
        },
        {
            name:"Jitu Rajak"
        }  
       ]
const People = () => (

    <>
        <div className='people-page'>
            <div className='title-head'>
                <div className='title'>Professors</div>
        
                <button className='invite'>
                    <FaUserPlus className='icon'/>
                </button>
            </div>
            <hr/>
            {
                Professors?.map((Professor)=>
                {
                    return (
                        <>
                            <div className='item'>
                                <div className="image">
                                    <img src={image} alt="Profile photo" />                            
                                </div>

                                <div className='name'>{Professor.name}</div>        
                            </div>
                            <hr className='item-line'/>
                        </>
                    )
                })
            }
            <div className='title-head'>
                <div className='title'>Assistants</div>
                <button className='invite'>
                    <FaUserPlus className='icon'/>
                </button>
            </div>
            <hr/>
            {
                Assistants?.map((Professor)=>
                {
                    return (
                        <>
                            <div className='item'>
                                <div className="image">
                                    <img src={image} alt="Profile photo" />                            
                                </div>

                                <div className='name'>{Professor.name}</div>        
                            </div>
                            <hr className='item-line'/>
                        </>
                    )
                })
            }

            <div className='title-head'>
                <div className='title'>Students</div>
                <button className='invite'>
                    <FaUserPlus className='icon'/>
                </button>
            </div>
            <hr/>
            {
                Students?.map((Professor)=>
                {
                    return (
                        <>
                            <div className='item'>
                                <div className="image">
                                    <img src={image} alt="Profile photo" />                            
                                </div>

                                <div className='name'>{Professor.name}</div>        
                            </div>
                            <hr className='item-line'/>
                        </>
                    )
                })
            }

        </div>
    </>
)

export default People;
