import React from "react"
import "./sign-in.styles.css"
import {Link } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
class SignIn extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit =event => {
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange =event =>
    {  
        const {value,name} =event.target;
        this.setState({[name]:value})
    }


    render()
    {
        
        return(
           
           <div className="sign-in">
               
               <div className="sign-in-and-sign-up">SIGN IN</div>
               <h2>I already have an account</h2>
               <div class="detail">
               <span >Sign in with your email and password</span>
               </div> 
                
                <form onSubmit={this.handleSubmit}>
                   
                   <label for="email" className="label">Email</label>
                    <input 
                    
                        onChange={this.handleChange}                     
                        name="email"
                        value={this.state.email} 
                        label='EMAIL'
                        required
                    
                    />
                    <>
                         <br/>
                    </>
                    <label for="password" className="label">Password</label>
                    <input 
                    
                        onChange={this.handleChange}                     
                        name='password'
                        type='password'
                        label='PASSWORD'
                        value={this.state.password}
                        required
                
                   />

                    <CustomButton type='submit' >Submit Form</CustomButton>
                    <Link to="/signUp"><CustomButton >Sign Up</CustomButton></Link>
                   

                </form>
            
            </div>
        )
    }

}

export default SignIn;