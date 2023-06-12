import { TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Editadd.css";
import {  Link, useNavigate, useParams } from "react-router-dom";

export default function AddWeather() {
  let navigate = useNavigate();
const {id} =useParams();
  const [user1, setUser1] = useState({
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


  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/saveWeather", user1);
    navigate("/weatherlist");
  };


  return (
    <div className="cover1">
          <form onSubmit={(e) => onSubmit(e)}>
          <h2 className="text" style={{textAlign:"center"}}>Add Weather</h2>
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
                <button type="submit" className='btn btn-outline-primary'>Save</button>
           <div style={{marginTop:'10px'}}>
                <Link className="btn btn-outline-danger mx-2" to="/weatherlist"><button>
              Cancel</button>
            </Link></div></div>
            </form>
           </div> 


    );
}