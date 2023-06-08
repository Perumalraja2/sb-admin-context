
import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AddUser from './components/AddUser';
import PendingRequest from './components/PendingRequest';
import Profile from './components/Profile';
import Task from './components/Task';
import ProfileDetails from './components/ProfileDetails';
import ResetPassword from './components/ResetPassword';
import UsercomponentContext from './context/UsercomponentContext';
import DashboardcomponentContext from './context/DashboardcomponentContext';

import {BrowserRouter, Routes, Route,Navigate} from "react-router-dom";



function App() {
return <>
 <BrowserRouter>
<div id="wrapper">
  <Sidebar/>
  <Routes>
<Route path='/dashboard' element = {

<UsercomponentContext>
<DashboardcomponentContext>
  <Dashboard/>
  </DashboardcomponentContext>
</UsercomponentContext>
}/> 
<Route path='/add-user'  element = {
<UsercomponentContext>
  <AddUser/>
</UsercomponentContext>}/>
<Route path='/edit-user/:id'  element = {<UsercomponentContext>
  <AddUser/>
</UsercomponentContext>}/>
<Route path='/Profile'  element = {<Profile/>}>
<Route path ='details' element ={<ProfileDetails/>}/>
<Route path ='resetpass' element ={<ResetPassword/>}/>
</Route>
<Route path='/Pending-request'  element = {<PendingRequest/>}/>
<Route path='/Task'  element = {<Task/>}/>
<Route path='*' element = {<Navigate to ='/dashboard'/>}/> 




  </Routes>
</div>
</BrowserRouter>
   </>

}

export default App;
