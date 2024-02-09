import { Typography,Button} from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
   //var fname = 'sheha'
    var [fname,setFname] = useState("SHEHA")
    const changeName =()=>{
        console.log("clicked")
        setFname("sheee")
    }
  return (
    <div style={{paddingTop:"80px"}}>
    <Typography variant="h4">Welcome  {fname} !</Typography>
    <Button variant ="contained" onClick={changeName}>change </Button>
    </div>
  )
}

export default StateBasics