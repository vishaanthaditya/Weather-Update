import React ,{useState}from 'react'
import axios from "axios";
import"./SignUp.css";
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  let navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",mobilenumber: ""
      });
    
      const { email,password, username,mobilenumber } = user;
    
      const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/signup", user);
        navigate("/");
      };

  return (
    <div>

            <form onSubmit={(e) => onSubmit(e)}>
        <div className="cover">
            <h1 >SIGN UP</h1>
            <TextField fullwidth label="Email" placeholder="Enter your email address" name="email"
            value={email}
                onChange={(e) => onInputChange(e)}
            style={{width:"300px"}}/>
            <TextField fullwidth label="Mobile Number" placeholder="Enter your mobilenumber" name="mobilenumber"
            value={mobilenumber}
                onChange={(e) => onInputChange(e)}style={{width:"300px"}}/>
            <TextField fullwidth label="UserName" placeholder="Enter your username" name="username" value={username}
                onChange={(e) => onInputChange(e)}
            style={{width:"300px"}}/>
            <TextField fullwidth label="Password" placeholder="Enter your password" name="password"
            value={password}
            onChange={(e) => onInputChange(e)}
            style={{width:"300px"}}/>
            <div className="login">
            <button type="submit" className="login-btn" style={{backgroundColor:"black",color:"white",paddingTop:"12px",fontSize:"large"}}>SIGN UP</button>
            </div>
            <dr/>
            <dr/>
    </div>
            </form>
            
    </div>
  )
}