import { Select, TextField, Typography } from '@mui/material'
import React from 'react'

const Registrations = () => {
  return (
    <div>
        <Typography variant='h2' type='underlined'>Registration Form</Typography>
        <br />
        <Typography variant='h5'>please enter your details</Typography>
        <br /><br /><br />
        <TextField variant='outlined' label='name'></TextField>
        <br />
        <TextField variant='standard' label='age'></TextField>
        <br />
        <TextField variant='filled' label='phone no'></TextField>
        <br /><br />
        <TextField variant='outlined' type='date'></TextField>
        <br /><br />
    </div>
  )
}

export default Registrations