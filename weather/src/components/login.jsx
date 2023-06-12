import React, { Component,useState } from 'react'
import axios from "axios";
import { TextField} from '@mui/material';
import "./Login.css" ;
import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email:"",
    password:""
  });
  const { email,password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const r=await axios.post("http://localhost:8080/login", user);
    console.log(r.data);
    if(r.data==="Login success")
    {
      navigate("/Home");
    }
  };
  return (
    <div><form onSubmit={(e) => onSubmit(e)}>
    <div className="cover">
        <h1>Login</h1>
        <TextField fullwidth label="Email" placeholder="Enter your email address" name="email"
        value={email}
            onChange={(e) => onInputChange(e)}
        style={{width:"300px"}}/>
        <TextField fullwidth label="Password" placeholder="Enter your password" name="password"
        value={password}
        onChange={(e) => onInputChange(e)}
        style={{width:"300px"}}/>
        <div className="login">
        <button type="submit" className="login-btn" style={{backgroundColor:"black",color:"white",paddingTop:"12px",fontSize:"large"}}>Login</button>
        </div >
        <p>or</p>
        <div>
          <p>Don't have account?<Link to="/usersignup"><span>Sign up</span></Link></p>
        </div>
        <dr/>
        <dr/>
      </div>
        </form>
        </div>
  )
}
