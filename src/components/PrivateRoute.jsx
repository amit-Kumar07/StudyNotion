import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({isLogedin, children}) => {
   
    if(isLogedin){
        return children
    }else{
        <Navigate  to="/login"/>
    }
}

export default PrivateRoute