import React from 'react'
import "./Home.css"
import { Box } from '@mui/material'

import { Link } from "react-router-dom"
export default function () {
  return (
    <div className='Main'><nav className="navbar ">
    <div className="navbarcomp1" >
     <div className="one"><Link to="/"> <p>Login</p></Link></div> 
     <div className="two">  <Link to="/weatherlist"> <p>Check weather</p></Link></div> 
    </div>
  </nav>
  <br/>
  <div className="header"><h2>Climate predictor</h2></div>
  <div className='Box'> <Box component="img"
      sx={{
        width: 300,
        height: "300",
        backgroundColor: 'primary.dark'
      }}src="../shun.jpg" 
    />
    <Box component="img"
      sx={{
        width: 300,
        height:300,
        backgroundColor: 'primary.dark'
      }}src="../clowd.jpg" 
    /> 
    <Box component="img"
      sx={{
        width: 300,
        height:300,
        backgroundColor: 'primary.dark'
      }}src="../thunder.jpg" 
    /> </div>
    <div className='loandet'>
      <p style={{padding:"30px",color:"white",fontWeight: "300", fontSize:"xx-large",paddingTop:"70px",textAlign:"center"}}>Get latest updates on today's weather</p>
      <div className='Box'> <Box component="img"
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',borderRadius:'50%'
      }}src="../icon.jpg" 
    /></div>
      
      </div>
  </div>
  )
}