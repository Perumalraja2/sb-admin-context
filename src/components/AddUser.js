import React, {useState,useEffect,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate,useParams } from 'react-router-dom';
import { usercontext } from '../context/UsercomponentContext';

function AddUser() {
  let Usercontext = useContext(usercontext)
  let params=useParams()
let[name,setName]=useState("")
let[email,setEmail]=useState("")
let[mob,setMobile]=useState("")
let[dob,setDob]=useState("")
let navigate=useNavigate()

let handlesumit = ()=>{
let newUsers={name,email,mob,dob}
  let newArray = [...Usercontext.users]
  if(params.id!==undefined){
    newArray.splice(params.id,1,newUsers)
  }else{
  newArray.push(newUsers)}
  Usercontext.setUsers(newArray)

navigate('/dashboard')
}


useEffect(()=>{
if (params.id!==undefined){

setName(Usercontext.users[params.id].name)
setEmail(Usercontext.users[params.id].email)
setMobile(Usercontext.users[params.id].mob)
setDob(Usercontext.users[params.id].dob)


}


},[params.id,Usercontext.users])

  return <>
 <div className='container-fluid'>
<Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="number" placeholder="Enter MobileNumber" value={mob} onChange={(e)=>setMobile(e.target.value)}/>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicdate">
        <Form.Label>Date of birth</Form.Label>
        <Form.Control type="date" placeholder="Date of birth" value={dob} onChange={(e)=>setDob(e.target.value)}/>
      </Form.Group>
      
    
      <Button variant="primary" type="submit" onClick={handlesumit}>
        Submit
      </Button>
    </Form>

    </div>
  
    </>
 
}

export default AddUser