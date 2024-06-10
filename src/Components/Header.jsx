// import React from 'react'

// import Fortune from '../assets/fj.jpg';
// import Icon from '../assets/Ellipse 7.jpg'
// import { TextInput, Select, Button,Image ,Avatar,Footer,Flex,Badge,Text,Card,Group,} from '@mantine/core';


// const Header = () => {
//   return (
    
//     <div style={{ backgroundColor: '#fff', width: "375px", height: "70px", top: "44px", display: "flex", justifyContent: "space-between" , boxShadow: '0px 0px 35px rgba(0, 0, 0, 0.1)',}}>
//         {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
//           <Image src={Fortune} alt='logo' style={{ height: '70px ', width: "14%", marginLeft: "10px", padding:"10px" }} />
//           <Avatar color="orange" radius="xl" size={60}   style={{ marginRight: "10px", padding:"10px"}}>F</Avatar>
//         {/* </div> */}
//       </div>
    
//   )
// }

// export default Header

import React from 'react';
import Fortune from '../assets/fj.jpg';
import Icon from '../assets/Ellipse 7.jpg';
import { TextInput, Select, Button, Image, Avatar, Footer, Flex, Badge, Text, Card, Group } from '@mantine/core';

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection:"column",
        // justifyContent: "flex-start",
        // alignItems: 'center', // Center elements vertically
        padding: '10px', // Add padding for better spacing
        boxShadow: '0px 0px 35px rgba(0, 0, 0, 0.1)',
        // width:"auto",
        zIndex:100
      }}
    >
      <Image
        src={Fortune}
        alt='logo'
        style={{
          // height: '50px', // Adjust image height for responsiveness
          // width: 'calc(17% - 10px)', // Use calc() for flexible width
          width:"55px"
        
          
        }}
      />
      {/* <Avatar color="orange" radius="xl" size={60} style={{ marginLeft: 'auto' }} /> Auto margin for right alignment */}
    </div>
  );
};

export default Header;