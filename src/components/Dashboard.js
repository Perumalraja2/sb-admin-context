import React, { useContext } from 'react'
import Card from './Card'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { usercontext } from '../context/UsercomponentContext';
import { DashboardContext } from '../context/DashboardcomponentContext';

function Dashboard() {
  let navigate=useNavigate();
  let  dashboardcontext = useContext(DashboardContext)
  
  let Usercontext=useContext(usercontext)
  return <>
 <div id="content-wrapper" className="d-flex flex-column">


<div id="content">

    
    
    <div className="container-fluid">

        
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>

       
        <div className="row">
           {dashboardcontext.data.map((e,i)=>{ 
           return <Card key={i}
           data={e}
           
           />
           }
           )}
           
            

            
        </div>
<div className="container-fluid">
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mob</th>
          <th>Dob</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {
         Usercontext.users.map((e,i)=>{
          return <tr key={i}>
            <td>{i}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.mob}</td>
            <td>{e.dob}</td>
            <td>
            <Button variant="primary" onClick={()=>navigate(`/edit-user/${i}`)}>Edit</Button>
         &nbsp;
            <Button variant="danger" onClick={()=>{
              let newArray=[...Usercontext.users]
              newArray.splice(i,1)
              Usercontext.setUsers(newArray)
            }}>Delete</Button>
            </td>
       

          </tr>
         })

       }
       
        
      </tbody>
    </Table>

    </div>
    </div>
    

</div>




</div>
  </>
  
  
}

export default Dashboard