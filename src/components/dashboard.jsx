import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import MiniDrawer from './miniDrawer';



function Dashboard() {

  const [user, setUser] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();


  useEffect( () => {

    if (location.state && location.state.user) {
      navigate("/")
    } else {
       navigate("/login")
     } 
  }, []);



  return (
    <>
      <Typography textAlign="center"> 
        <MiniDrawer />
      </Typography>
    </>
  )
}

export default Dashboard