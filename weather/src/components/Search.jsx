import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./Search.css";
export default function Search() {
  const [users, setUsers] = useState([]);
  const {id}=useParams();

  useEffect(() => {
    loadUsers();
  });
  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8080/getweather/${id}`);
    setUsers(result.data);
  };
  return (
    <div className="container3">
        <div>Search</div>
      <table className="table2 ">
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Date</th>
            <th scope="col">Day</th>
            <th scope="col">Temperature</th>
            <th scope="col">Weather</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>{users.city}</td>
              <td>{users.date}</td>
              <td>{users.day}</td>
              <td>{users.temperature}</td>
              <td>{users.weather}</td>

            </tr>
        </tbody>
      </table>
      <div><Link to="/Home"><button> back</button></Link></div>
    </div>
  )
}