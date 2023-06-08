import React, { useState } from 'react'
export const DashboardContext = React.createContext()

function DashboardcomponentContext({children}) {
    let [data,setData] =useState([{
        title:"mango",
        value:"6000",
        color:"primary",
        font:"fa-calendar",
        isProgress:true
      },{
        title:"Apple",
        value:"7000",
        color:"success",
        font:"fa-dollar-sign",
        isProgress:true
      },
      {
        title:"orange",
        value:"40%",
        color:"info",
        font:"fa-clipboard-list",
        isProgress:false
      },
      {
        title:"banana",
        value:"9000",
        color:"warning",
        font:"fa-comments",
        isProgress:true
      }
    ])
  return<>
  < DashboardContext.Provider  value={{data,setData}}>
  {children}
  </ DashboardContext.Provider>
  
  </>
}

export default DashboardcomponentContext
