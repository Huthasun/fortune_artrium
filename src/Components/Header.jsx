import React from 'react'

import Fortune from '../assets/fj.jpg';
import Icon from '../assets/Ellipse 7.jpg'
import { TextInput, Select, Button,Image ,Avatar,Footer,Flex,Badge,Text,Card,Group,} from '@mantine/core';


const Header = () => {
  return (
    
    // <div style={{ backgroundColor: '#fff', width: "375px", height: "70px", top: "44px", display: "flex", justifyContent: "space-between" , boxShadow: '0px 0px 35px rgba(0, 0, 0, 0.1)',}}>
    //     {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
    //       <Image src={Fortune} alt='logo' style={{ height: '70px ', width: "14%", marginLeft: "10px", padding:"10px" }} />
    //       {/* <Avatar color="orange" radius="xl" size={60}   style={{ marginRight: "10px", padding:"10px"}}>F</Avatar> */}
    //     {/* </div> */}
    //   </div>
  <div
     style={{
        backgroundColor: '#fff',
        width: '100%',
        height: '70px',
        position: 'fixed',
        top: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0px 0px 35px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
      }}
    >
      <Image src={Fortune} alt="logo" style={{ height: 'auto', width: '15%', marginLeft: '10px' }} />

  </div>
    
  )
}

export default Header
// import React from 'react';
// import Fortune from '../assets/fj.jpg';
// import { Image, Avatar, Menu } from '@mantine/core';
// import axios from 'axios';
// import { json, useNavigate } from 'react-router-dom';
// import Footer1 from './Footer1';



// const Header = () => {
//   // const navigate = useNavigate();

//   // const handleLogout = () => {
//   //   axios.get('http://192.168.29.68:5000/hms/logout')
//   //   console.log('Logged out');

//   //   navigate('/')
    
//   // };

//   return (
//     <>
//     <div>
//       <div
//         style={{
//           backgroundColor: '#fff',
//           display: 'flex',
//           justifyContent: "space-between",
//           padding: '10px',
//           boxShadow: '0px 0px 35px rgba(0, 0, 0, 0.1)',
//           zIndex: 100,
//           position: 'fixed', // Make the header fixed
//           top: 0, // Position it at the top
//           left: 0, // Align it to the left
//           right: 0 // Align it to the right
        
//         }}
//       >
//         <Image
//           src={Fortune}
//           alt='logo'
//           style={{
//             width: "55px"
//           }}
//         />
//         {/* <Menu shadow="md" width={200}>
//           <Menu.Target>
//             <Avatar color="orange" radius="xl" size={45} style={{ cursor: 'pointer', marginLeft: 'auto' }} />
//           </Menu.Target>
//           <Menu.Dropdown
//            sx={{
//             dropdown:{position: 'absolute',
//             left: '290px',
//             top: '71px',
//             width: '11.5rem'}
//           }}
//           >
//           <Menu.Item onClick={handleLogout} >Logout</Menu.Item>
//           </Menu.Dropdown>
//         </Menu> */}
//       </div>
      
//     </div>
    
//    </>
//   );
// };

// export default Header;
