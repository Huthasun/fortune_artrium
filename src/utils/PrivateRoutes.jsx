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
// import React, { useState, useEffect } from 'react';
// import { Outlet, Navigate, useLocation } from 'react-router-dom';     
// import MainLayout from '../MainLayout/MainLayout';

// const PrivateRoutes = () => {
//   const [role, setRole] = useState(null);
//   const location = useLocation();

//   // On component mount, check localStorage for user role and set it
//   useEffect(() => {
//     const userRole = localStorage.getItem('role');
//     const username = localStorage.getItem('username');

//     // If both username and role are found, set the role
//     if (username && userRole) {
//       setRole(userRole);
//     } else {
//       setRole(null); // Clear role if not found
//     }
//   }, []);

//   // Handle loading state until role is retrieved
//   if (role === null) {
//     return null; // Return nothing until role is determined
//   }

//   // Redirect to login if no role is found
//   if (!role) {
//     return <Navigate to="/login" state={{ from: location }} />;
//   }

//   // Admin: redirect to /app/pmy
//   if (role === 'admin' && location.pathname !== '/app/pmy') {
//     return <Navigate to="/app/pmy" />;
//   }

//   // User: redirect to /app/bookings
//   if (role === 'user' && location.pathname !== '/app/bookings') {
//     return <Navigate to="/app/bookings" />;
//   }

//   // If role matches the allowed path, render the outlet and MainLayout
//   return (
//     <MainLayout>
//       <Outlet />
//     </MainLayout>
//   );
// };

// export default PrivateRoutes;
