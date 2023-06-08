import React, { useState } from 'react'
export const usercontext = React.createContext()

function UsercomponentContext({children}) {
    let [users,setUsers]=useState([{
        name:"peru",
        email:"peru@gmail.com",
        mob:"8965656",
        dob:"1998-02-01"
      },
      {
        name:"naruu",
        email:"naru@gmail.com",
        mob:"4545458",
        dob:"2000-10-12"
      },
      {
        name:"guru",
        email:"guru@gmail.com",
        mob:"95846213",
        dob:"2008-05-20"
      },
      {
        name:"Thiru",
        email:"Thiru@gmail.com",
        mob:"2589631",
        dob:"2004-05-21"
      }])

  return <>
  <usercontext.Provider value={{users,setUsers}}>

    {children}
  </usercontext.Provider>
  
  </>
}

export default UsercomponentContext
