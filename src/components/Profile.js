import React from 'react'
import { Link ,Outlet } from 'react-router-dom'
function Profile() {
  return <>
    <div>
    <h1>Profile</h1>
    <Link to ='details'>
<li >Profile Details</li></Link>
<Link to ='resetpass'><li>Reset password</li></Link>
<Outlet/></div>
 
</>
}

export default Profile