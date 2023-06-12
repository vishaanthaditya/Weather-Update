import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./Weather.css";
import { Link } from 'react-router-dom';

export default function Weather () {
    const [users,setUsers]=useState([]);
     useEffect(()=>{
        loadUsers();
     },[]);
     
   const loadUsers=async()=>{
    const result=await axios.get("http://localhost:8080/getWeather")
    setUsers(result.data);
    }
     const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/deleteWeather/${id}`);
    loadUsers();
  };


  return (
    
    <div className='container'>
        <div><h2>Weather Report</h2></div>
    <div className='py-4'>
    <table className="table4" >
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">City</th>
      <th scope="col">Date</th>
      <th scope="col">Day</th>
      <th scope="col">Temperature(in celcius)</th>
      <th scope="col">Weather</th>
      <th Scope="col">Settings</th>

    </tr>
  </thead>
  <tbody>
   {
    users.map((user,index)=>(
        <tr>
    <td scope="row" key={user.id}>{index+1}</td>
      <td>{user.city}</td>
      <td>{user.date}</td>
      <td>{user.day}</td>
      <td>{user.temperature}</td>
      <td>{user.weather}</td>
      <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    
                    to={`/getweather/${user.id}`}
                  >    
                 <button>  Edit</button> 
                   </Link>
      <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
      </td>
    </tr>

    ))
   }
    
  </tbody>
</table>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px"}}>
        <div style={{marginRight:"20px"}} ><Link to="/update"><button>Add</button></Link></div>
        <div><Link to="/Home"><button>Back</button></Link></div></div>
        </div>
    
  )
}