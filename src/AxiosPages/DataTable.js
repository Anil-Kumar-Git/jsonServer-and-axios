import { Link } from 'react-router-dom'
import React from 'react'
import { Table,Button } from 'react-bootstrap'
import DataForm from './DataForm'

export default function DataTable({ user, deletehandle,edithandle }) {
    
    const table =
     user.map((item, id) => {
    
        return (<tr key={id}>
            <td>{id+1}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.role}</td>
            <td>{item.company}</td>
            <td>{item.state}</td>
            <td>{item.city}</td>
            <td colSpan={2}>
                <Button variant='warning' onClick={() => deletehandle(item.id)}>Delete</Button>{' '}
                <Button variant='info' onClick={(e) => edithandle(e,item)}>Edit</Button>
            </td>
        </tr>
        )
    })

    return (
        
            <div className="container">
                <div className="row">
                    <h1> Redux Crud User App </h1>
                </div>
                          <Link to="/get">
                            <Button className="button-primary">Add user</Button>
                          </Link>
             <div className="row mt-2">
                <Table striped bordered hover>
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>role</th>
                            <th>company</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table}
                    </tbody>
                </Table>
                </div>
            </div >
            )

}
