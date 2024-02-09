import { Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewdata =()=> {
    var [users,setUsers] = useState([])
    var [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        console.log(res)
        setUsers(res.data)
        setLoading(false)
    })
    .catch(err=>console.log(err))
  },[])

// const loaddata = () => {
//         axios.get("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>{
//         console.log(res)
//         setUsers(res.data)
//     })
//     .catch(err=>console.log(err))
//}
  return (
    <div>
        {loading? <CircularProgress color='primary'/>:<TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><b>Name</b></TableCell>
                        <TableCell><b>username</b></TableCell>
                        <TableCell><b>Email</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((val,i)=>{
                        return(
                            <TableRow>
                                <TableCell>{val.name}</TableCell>
                                <TableCell>{val.username}</TableCell>
                                <TableCell>{val.email}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>}
       </div>
        
  )
  }

export default Viewdata