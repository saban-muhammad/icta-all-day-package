import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Appbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>First app</Typography>
                <Button variant='contained' color='success'><Link to ={'/'} style={{textDecoration:'none'}}>viewData</Link></Button>&nbsp;
                <Button variant='contained' color='error'><Link to ={'/add'} style={{textDecoration:'none'}}>Add Data</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Appbar