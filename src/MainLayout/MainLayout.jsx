// import React from 'react'
// import { useState } from 'react';
// // import Fortune from'./assets/pp.png'
// import Fortune from '../assets/pp.png'
// import { Outlet, Route } from 'react-router-dom'
// import { BrowserRouter as Router, Routes,} from "react-router-dom";
// import HouseKepping from '../Components/HouseKeeping/HouseKepping';
// import Header from '../Components/Header';
// import {
//     AppShell,
//     Navbar,
   
//     Footer,
//     Aside,
//     Text,
//     MediaQuery,
//     Burger,
//     useMantineTheme,
//     Image,
//     Group,
//   } from '@mantine/core';
// import Register from '../Components/Register';
// import '../../src/Styling.css'
// import Departure from '../Components/Departure';
// import Footer1 from '../Components/Footer1';
// import SubmitDetails from '../Components/UpdateBookings/SubmitDetails';

// const MainLayout = () => {

//     const theme = useMantineTheme();
//     const [opened, setOpened] = useState(false);

//   return (
//     <div> 
//       <AppShell
//        header={
//         <Header/>

//        }
      
      
//        footer={
//         <Footer1/>
//        }
    
//       >
//         <Outlet/>
//     </AppShell>
//     </div>
//   )
// }

// export default MainLayout

// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import { AppShell, useMantineTheme } from '@mantine/core';
// import Header from '../Components/Header';
// import Footer1 from '../Components/Footer1';
// import '../Styling.css'; // Ensure you have the correct path to your CSS file

// const MainLayout = () => {
//   const theme = useMantineTheme();
//   const [opened, setOpened] = useState(false);

//   return (
//     <AppShell
//       padding="md"
//       header={<Header />}
//       footer={<Footer1 />}
//       styles={(theme) => ({
//         main: {
//           padding: 0,
//           paddingTop: '70px', // Height of the fixed header
//           paddingBottom: '50px', // Height of the footer
//           overflowY: 'auto',
//         },
//       })}
//     >
//       <Outlet />
//     </AppShell>
//   );
// };

// export default MainLayout;

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell, useMantineTheme } from '@mantine/core';
import Header from '../Components/Header';
import {Footer1} from '../Components/Footer1';
import '../Styling.css'; // Ensure you have the correct path to your CSS file

const MainLayout = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      padding="md"
      header={<Header />}
      footer={<Footer1 />}
      styles={(theme) => ({
        main: {
          padding: 0,
          paddingTop: '70px', // Height of the fixed header
          paddingBottom: '50px', // Height of the footer
          overflowY: 'auto',
        },
      })}
    >
      <Outlet />
    </AppShell>
  );
};

export default MainLayout;
