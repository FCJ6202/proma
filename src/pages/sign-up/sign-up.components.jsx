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
 HandleSignup = async (UserData) => {
    const name = UserData.displayname;
    const email = UserData.email;
    const password = UserData.password;
    const url = "http://localhost:4000/u/auth/create";
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({name, email, password }) // body data type must match "Content-Type" header
    });
    const json = await response.json();
    if(json.success){
        console.log(json);
    }else{
        alert("please enter valid credentials");
    }
    return json;
}

Default = () => {
    this.setState({
        displayname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
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

        const UserData = this.state;
        const msg = await this.HandleSignup(UserData);
        console.log(msg.success);
        this.Default();
        if (msg.success) {
            localStorage.setItem("token", msg.token);
            this.setState({redirect:true});
        }else{
            alert("please enter valid credentials");
        }
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