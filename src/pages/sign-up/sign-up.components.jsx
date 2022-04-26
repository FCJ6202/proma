import React from "react";
import CustomButton from "../../Components/custom-button/custom-button.component";
import "./sign-up.styles.css"
import { Navigate } from "react-router-dom";

class SignUp extends React.Component
{
 constructor() 
 {
     super();
     this.state = {
         displayname:'',
         email:'',
         password:'',
         confirmPassword:'',
         redirect:false
     }
 }   


handleSubmit = async event => {
    event.preventDefault();
    const {displayname,email,password,confirmPassword,redirect}=this.state;
    if(password !== confirmPassword)
    {
        alert("password don't match");
        return;
    }
    try {
        //sign up code
        this.setState({redirect:true});
    }
    catch
    {
        console.log("error signing up");
    }
}

handleChange =event =>
{  
    const {value,name} =event.target;
    this.setState({[name]:value})
}

render()
{
    const {displayname,email,password,confirmPassword,redirect} = this.state;
    return(
        <div className="signup">
            {redirect && (<Navigate to="/signIn" replace={true} />)}

            <div className="sign-in-and-sign-up">SIGN UP</div>
            <h2 className="title">I do not have an account</h2>
            <div class="detail">
            <span>Sign up with your email and password</span>
            </div> 

            <form className="sign-up-form" onSubmit={this.handleSubmit}>
         
            <label for="displayname" className="label">Display Name</label>
                    <input 
                    type='text'
                    name='displayname'
                    value={displayname}
                    onChange={this.handleChange} 
                    label="Display Name"
                    required 
                    />

                    <>
                         <br/>
                    </>

            <label for="email" className="label">Email</label>
                    <input 
                    
                        onChange={this.handleChange}                     
                        name="email"
                        value={email} 
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
                        value={password}
                        required
                
                   />
                    <>
                         <br/>
                    </>
                    <label for="confirmPassword" className="label">Confirm Password</label>
                    <input 
                    
                        onChange={this.handleChange}                     
                        name='confirmPassword'
                        type='password'
                        label='Confirm Password'
                        value={confirmPassword}
                        required
                
                   />
                <div className="buttons">
                <CustomButton type='submit'>SIGN UP</CustomButton>
                </div>
            </form>
    
        </div>
    )
}
}
export default SignUp;