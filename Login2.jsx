import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login2 = () => {
  return (
    <div><Typography variant='h4'>Login</Typography>
    <TextField variant='standard'label='username'></TextField>
    <br /><br /><br />
    <TextField variant="outlined" label='enter your email'></TextField>
    <br />
    <input type="password" placeholder='enter your password' />
    <br />

    
    </div>
  )
}

export default Login2