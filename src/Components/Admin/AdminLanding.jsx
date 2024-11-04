// import { useState } from 'react';
// import {
//   AppShell,
//   Navbar,
//   Header,
//   Footer,
//   Text,
//   MediaQuery,
//   Burger,
//   useMantineTheme,
//   Container,
//   Drawer, // Import Container to center the content
// } from '@mantine/core';
// import { Image } from '@mantine/core';
// import Fortune from '../../assets/fj.jpg';
// import Primaryguestdbtable from '../Admin/Primaryguestdbtable';
// import BookingDetailsTable from '../Admin/BookingGuestsdbtable';

// export default function AdminLanding() {
//   const theme = useMantineTheme();
//   const [opened, setOpened] = useState(false);
//   const [activeComponent, setActiveComponent] = useState('Bookings');

//   // Function to handle component switch
//   const handleComponentSwitch = (component) => {
//     setActiveComponent(component);
//   };

//   // Render the active component
//   const renderActiveComponent = () => {
//     switch (activeComponent) {
//       case 'Bookings':
//         return <BookingDetailsTable />;
//       case 'Primary':
//         return <Primaryguestdbtable />;
//       default:
//         return <BookingDetailsTable />;
//     }
//   };

//   return (
//     <AppShell
//       styles={{
//         main: {
//           background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
//         },
//       }}
//       // navbarOffsetBreakpoint="sm"
//       // asideOffsetBreakpoint="sm"
//       // navbar={
//         // <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ base: 150, sm: 200, lg: 300 }}>
//         //   <Text
//         //     onClick={() => handleComponentSwitch('Bookings')}
//         //     style={{
//         //       cursor: 'pointer',
//         //       marginBottom: '10px',
//         //       padding: '10px',
//         //       borderRadius: '5px',
//         //       backgroundColor: activeComponent === 'Bookings' ? theme.colors.blue[6] : 'transparent',
//         //       color: activeComponent === 'Bookings' ? '#fff' : theme.colors.gray[7],
//         //       transition: 'background-color 0.2s ease, color 0.2s ease',
//         //     }}
//         //     onMouseEnter={(e) => {
//         //       if (activeComponent !== 'Bookings') {
//         //         e.currentTarget.style.backgroundColor = theme.colors.gray[2];
//         //         e.currentTarget.style.color = '#000';
//         //       }
//         //     }}
//         //     onMouseLeave={(e) => {
//         //       if (activeComponent !== 'Bookings') {
//         //         e.currentTarget.style.backgroundColor = 'transparent';
//         //         e.currentTarget.style.color = theme.colors.gray[7];
//         //       }
//         //     }}
//         //   >
//         //     Bookings
//         //   </Text>
//         //   <Text
//         //     onClick={() => handleComponentSwitch('Primary')}
//         //     style={{
//         //       cursor: 'pointer',
//         //       padding: '10px',
//         //       borderRadius: '5px',
//         //       backgroundColor: activeComponent === 'Primary' ? theme.colors.blue[6] : 'transparent',
//         //       color: activeComponent === 'Primary' ? '#fff' : theme.colors.gray[7],
//         //       transition: 'background-color 0.2s ease, color 0.2s ease',
//         //     }}
//         //     onMouseEnter={(e) => {
//         //       if (activeComponent !== 'Primary') {
//         //         e.currentTarget.style.backgroundColor = theme.colors.gray[2];
//         //         e.currentTarget.style.color = '#000';
//         //       }
//         //     }}
//         //     onMouseLeave={(e) => {
//         //       if (activeComponent !== 'Primary') {
//         //         e.currentTarget.style.backgroundColor = 'transparent';
//         //         e.currentTarget.style.color = theme.colors.gray[7];
//         //       }
//         //     }}
//         //   >
//         //     Primary
//         //   </Text>
//         // </Navbar>
//       // }
//       footer={
//         <Footer height={{ base: 70 }} p="md">
//           Application footer
//         </Footer>
//       }
//       header={
//         <Header height={{ base: 50, md: 70 }} p="md">
//          <Drawer
//         opened={opened}
//         onClose={close}
//         title="User Details"
//         overlayProps={{ opacity: 0.5, blur: 4 }}
//         size={opened ? '50%' : '30%'}
//         styles={{
//           drawer: {
//             padding: '10px',
//             height: 'calc(100vh - 150px)', // Drawer is shorter to reduce scroll length
//             overflowY: 'auto',
//             '@media (max-width: 768px)': {
//               width: '75%',
//             },
//             '@media (max-width: 576px)': {
//               width: '90%',
//             },
//           },
//         }}
//       >
//         {/* <Usermanagement /> */}
//       </Drawer>
    
//         </Header>
//       }
//     >
//       <Container>
//         {renderActiveComponent()} {/* Render the active component here */}
//       </Container>
//     </AppShell>
//   );
// }

import React, { useState, useEffect } from 'react';
import { AppShell, Header, Footer, Burger, useMantineTheme, Drawer, Group, Text, Button, Image } from '@mantine/core';
import { Outlet, useNavigate } from 'react-router-dom'; // Import Outlet for nested routes
import { useMediaQuery } from '@mantine/hooks';
import Fortune from '../../assets/fj.jpg';
import client from '../../API/api';

export default function AdminLanding() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();

  const isMobile = useMediaQuery('(max-width: 425px)');
  const isLaptop = useMediaQuery('(min-width: 1024px) and (max-width: 1366px)');

  const [user, setUser] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    // Fetch username from local storage
    const username = localStorage.getItem('username');
    if (username) {
      // Set user state if username is available
      setUser({ username: username, avatarUrl: 'default_avatar_url' }); // Replace 'default_avatar_url' with actual avatar URL
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleLogout = () => {
    client.get('logout')
      .then(() => {
        console.log('Logged out');
        localStorage.clear();
        navigate('/login');
      })
      .catch(error => {
        console.error('There was an error logging out!', error);
      });
  };



  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          overflowY: isMobile ? 'hidden' : 'auto', 
        },
      }}
      footer={
        <Footer height={60} p="md">
          {/* Application footer */}
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
            <Group style={{ flexGrow: 1 }}>
              <Burger opened={opened} onClick={() => setOpened(true)} size="sm" color={theme.colors.gray[6]} />
              <Text style={{ flexGrow: 1,}}>Admin Dashboard</Text>
            </Group>
            <Image maw={60} mx="auto" radius="md" src={Fortune} alt="Random image" />
          </div>
        </Header>
      }
    >
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title={
          <div style={{
            textAlign: 'center', 
            boxShadow: '0px 4px 2px -2px gray', 
            borderBottom: '1px solid lightgray',
            paddingBottom: '10px',
            fontSize: '20px', // Adjust font size if needed
            fontWeight: 'bold' // Make it bold if necessary
          }}>
            Admin
          </div>
        }
        padding="xl"
       size={isMobile ? '50%' : isLaptop ? '25%' : '18%'}       
      >
       <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
    <div 
      style={{
        cursor: 'pointer', 
        padding: '10px', 
        // backgroundColor: window.location.pathname === '/app/adminlanding' ? '#007BFF' : 'transparent',
        color: window.location.pathname === '/app/adminlanding' ? 'red' : 'black',
        borderRadius: '4px',
        transition: 'color 0.3s ease',
      }}
      onClick={() => { navigate('/app/adminlanding'); setOpened(false); }}
      onMouseOver={(e) => e.currentTarget.style.color = 'red'}
      onMouseOut={(e) => e.currentTarget.style.color = window.location.pathname === '/app/adminlanding' ? 'red' : 'black'}
    >
      Dashboard
    </div>

    <div 
      style={{
        cursor: 'pointer', 
        padding: '10px', 
        // backgroundColor: window.location.pathname === '/app/adminlanding/pmy' ? '#007BFF' : 'transparent',
        color: window.location.pathname === '/app/adminlanding/pmy' ? 'red' : 'black',
        borderRadius: '4px',
        transition: 'color 0.3s ease',
      }}
      onClick={() => { navigate('/app/adminlanding/pmy'); setOpened(false); }}
      onMouseOver={(e) => e.currentTarget.style.color = 'red'}
      onMouseOut={(e) => e.currentTarget.style.color = window.location.pathname === '/app/adminlanding' ? 'red' : 'black'}
    >
      Primary
    </div>

    <div 
      style={{
        cursor: 'pointer', 
        padding: '10px', 
        // backgroundColor: window.location.pathname === '/app/adminlanding/btd' ? '#007BFF' : 'transparent',
        color: window.location.pathname === '/app/adminlanding/btd' ? 'red' : 'black',
        borderRadius: '4px',
        transition: 'color 0.3s ease'
      }}
      onClick={() => { navigate('/app/adminlanding/btd'); setOpened(false); }}
      onMouseOver={(e) => e.currentTarget.style.color = 'red'}
      onMouseOut={(e) => e.currentTarget.style.color = window.location.pathname === '/app/adminlanding' ? 'red' : 'black'}
    >
      Bookings
    </div>
    <div style={{ position: "absolute", bottom: "15%", width: "100%" }}>
      <Button onClick = {handleLogout} style={{ marginTop: '50px',marginRight: "20px" }}>Logout</Button>
    </div>
  </div>
      </Drawer>
      {/* <div style={{
        height: '100%',
        overflowY: 'auto', // Make only this content scrollable on mobile
        padding: '20px', 
      }}> */}

      {/* This Outlet renders the matched child route */}
      <Outlet />
    </AppShell>
  );
}
