import React from 'react'

import MainLayout from '../MainLayout/MainLayout'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = () => {


    const z = localStorage.getItem("username")

    let auth = { "token": z !== null || undefined ? true : false}
  return (
   auth.token ? <MainLayout/> : <Navigate to="/login"/>
  )
}

export default PrivateRoutes
