import React from "react"
import "./sign-in.styles.css"
import {Link } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import { Navigate } from "react-router-dom";

class SignIn extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state={
            email:'',
            password:'',
            redirect:false
        }
    }

    HandleLogin = async (email, password) => {
        const url = "http://localhost:4000/u/auth/login";
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({ email, password }) // body data type must match "Content-Type" header
        });
        const json = await response.json();
        if(json.success){
            console.log(json);
        }else{
            alert("please enter valid credentials");
        }
        return json;
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log('login')
        //this.setState({email:'',password:''})
        
        try {
            //sign in code
            const msg = await this.HandleLogin(this.state.email, this.state.password);
            //this.Default();
            console.log(msg.success);
            if(msg.success){
                localStorage.setItem("token",msg.authToken);
                this.setState({redirect:true});
            }else{
                alert("please enter valid credentials");
            }
        }
        catch
        {
            console.log("error signing in");
        }
    
    }

    handleChange =event =>
    {  
        const {value,name} =event.target;
        this.setState({[name]:value})
    }


    render()
    {
        const {redirect} = this.state; 
        return(
           
           <div className="sign-in">
                {redirect && (<Navigate to="/Home" replace={true} />)}
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