import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Sidebar() {
    let navigate = useNavigate(); 
  return (
  
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

   
    <div className="sidebar-brand d-flex align-items-center justify-content-center" >
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </div>

 
    <hr className="sidebar-divider my-0"></hr>

   <Link to="/dashboard">
    <li className="nav-item active">
        <div className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></div>
    </li>
    </Link>

    <hr className="sidebar-divider"></hr>

  
    <div className="sidebar-heading">
        Interface
    </div>

    <Link to="/add-user">
    <li className="nav-item">
        <div className="nav-link collapsed"  data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
          <i className="fa-solid fa-user-plus"></i>
            <span>Adduser</span>
        </div>
        </li>
        </Link>
        <Link to="/Profile">
        <li className="nav-item">
        <div className="nav-link collapsed"  data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fa-solid fa-user"></i>
            <span>Profile</span>
        </div>
        </li></Link>
        
        <Link to="/Pending-request">
        <li className="nav-item">
        <div className="nav-link collapsed"  data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
           <i className="fa-solid fa-arrows-rotate"></i>
            <span>Pending Task</span>
        </div>
        </li>
        </Link>
      
        <li className="nav-item" onClick={()=>navigate('/Task')}>
        <div className="nav-link collapsed"  data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
           <i className="fa-sharp fa-solid fa-clipboard"></i>
            <span>Task</span>
        </div>
        </li>




        </ul>
  
  )
}

export default Sidebar