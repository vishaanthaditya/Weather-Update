import { TextField } from "@mui/material";
import axios from "axios";
import "./Editadd.css";
import React, { useEffect, useState } from "react";
import {  Link, useNavigate, useParams } from "react-router-dom";

export default function EditDetails() {
  let navigate = useNavigate();
const {id} =useParams();
  const [user, setUser] = useState([]);
  const [user1, setUser1] = useState({
    id:"",
    city:"",
    date:"",
    day:"",
    temperature:"",
    weather:""
  });

  const {city,date,day,temperature,weather } = user1;

  const onInputChange = (e) => {
    setUser1({ ...user1, [e.target.name]: e.target.value });
  };

  useEffect(() =>{
    loadUser();
  },[]);

  const onSubmit = async (e) => {
    e.preventDefault();
    user1.id=user.id;
    await axios.put("http://localhost:8080/updateWeather", user1);
    navigate("/weatherlist");
  };

  const loadUser = async() => {
    const result=await axios.get(`http://localhost:8080/getweather/${id}`);
    setUser(result.data);
  }

  return (
        <div className="cover1">
          <form onSubmit={(e) => onSubmit(e)}>
          <h2 className="text" style={{textAlign:"center"}}>Update Weather</h2>
          <div className="mb-3"> <label htmlFor="id" className='form-label'>Id</label>
                    <TextField type={"text"}
                    className="form-control"
                    placeholder="Enter Id"
                    name="id"
                    value={id}
                    onChange={(e)=>onInputChange(e)} style={{marginLeft:"100px"}}
                    /></div>
                <div className="mb-3">
                    <label htmlFor="firstname" className='form-label'>City</label>
                    <TextField type={"text"}
                    className="form-control"
                    placeholder="Enter City Name"
                    name="city"
                    value={city}
                    onChange={(e)=>onInputChange(e)} style={{marginLeft:"88px"}}
                    />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className='form-label'>Date</label>
                    <TextField type={"text"}
                    className="form-control"
                    placeholder="Enter Date"
                    name="date"
                    value={date}
                    onChange={(e)=>onInputChange(e)} style={{marginLeft:"83px"}}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className='form-label'>Day</label>
                    <TextField type={"text"}
                    className="form-control"
                    placeholder="Enter Day"
                    name="day"
                    value={day}
                    onChange={(e)=>onInputChange(e)} style={{marginLeft:"90px"}}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className='form-label'>Temperature</label>
                    <TextField type={"text"}
                    className="form-control"
                    placeholder="Enter temperature"
                    name="temperature"
                    value={temperature}
                    onChange={(e)=>onInputChange(e)} style={{marginLeft:"29px"}}
                    />
                     </div>
                    <div className="mb-3">
                    <label htmlFor="movies" className='form-label'>Weather</label>
                    <TextField type={"text"}
                    className="form-control"
                    placeholder="Enter the weather"
                    name="weather"
                    value={weather}
                    onChange={(e)=>onInputChange(e)}style={{marginLeft:"58px"}}/>
                </div>
                <div style={{textAlign:"center",marginTop:"10px"}}>
                <button type="submit" className='btn btn-outline-primary'>Submit</button>
           <div style={{marginTop:'10px'}}>
                <Link className="btn btn-outline-danger mx-2" to="/weatherlist"><button>
              Cancel</button>
            </Link></div></div>
            </form>
           </div> 


    );
}