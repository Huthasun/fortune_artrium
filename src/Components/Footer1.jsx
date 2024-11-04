// import React from 'react'
// import Regs from '../assets/Icon.jpg'
// import Share from '../assets/Vector.jpg'
// import Home from '../assets/icon1.jpg'
// import { Link, useNavigate } from 'react-router-dom';
// import { ActionIcon, Flex, Image } from '@mantine/core';
// import { RiHomeLine } from 'react-icons/ri';
// import { FiSearch } from 'react-icons/fi';
// import { IoPersonSharp } from 'react-icons/io5';

// const Footer1 = () => {
//   const navigate = useNavigate()
//   return (
//     <div  style={{height:'0px' ,padding:"40px", width:"100vw",position: "fixed",  left: 0, zIndex: 999 ,bottom:"0",backgroundColor:" white",borderTop:"#D3D3D3",paddingTop:"10px"}}>

      
//        <div style={{display:"flex",justifyContent:"space-between" , alignItems:"center", width:"308px",}}>
//         {/* <Avatar src={null} alt="no image here" color="indigo" /> */}
//         {/* <Link to="">
//         <Image src={Home} alt='housekeeping' style={{ height: '30px', width: 'auto' }} />
        
//         </Link> */}

//         <ActionIcon onClick={()=> navigate("bookings")} ><RiHomeLine size={"xl"} /></ActionIcon>


//         {/* <Link to="">
//         <Image src={Share} alt='departure' style={{ height: '30px', width: 'auto' }} />
//         </Link> */}
//          <ActionIcon onClick={()=> navigate("search")} ><FiSearch size={"xl"}/></ActionIcon>

//         {/* <Link to="">
//        <Image src={Regs} alt='register' style={{ height: '30px', width: 'auto', marginRight:"3px"}} />
//         </Link> */}
//         <ActionIcon onClick={()=> navigate("user")} ><IoPersonSharp size={"xl"}/></ActionIcon>
        
//         </div>
       

        

//      </div>
//   )
// }

// export default Footer1

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ActionIcon, Flex } from '@mantine/core';
// import { RiHomeLine } from 'react-icons/ri';
// // import { FiSearch } from 'react-icons/fi';
// import { IoMenu, IoPersonSharp } from 'react-icons/io5';
// import { useDisclosure } from '@mantine/hooks';
// import { Drawer, Button, Group, TextInput } from '@mantine/core';
// import Usermanagement from './USerManagement/Usermanagement';

// const Footer1 = () => {
//   const navigate = useNavigate();
//   const [opened, { open, close }] = useDisclosure(false);

//   return (
//     <>
//       <div
//         style={{
//           height: '60px',
//           width: '100vw',
//           position: 'fixed',
//           left: 0,
//           zIndex: 999,
//           bottom: 0,
//           backgroundColor: 'white',
//           borderTop: '1px solid var(--light-gray)',
//           paddingTop: '0px',
//           paddingBottom: '10px',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <Flex
//           style={{
//             width: '90%',
//             maxWidth: '400px',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}
//         >
//           <ActionIcon size="lg" onClick={() => navigate('bookings')}>
//             <RiHomeLine size="24" />
//           </ActionIcon>
//           {/* <ActionIcon size="lg" onClick={() => navigate('search')}> */}
//             {/* <FiSearch size="24" /> */}
//           {/* </ActionIcon> */}
//           <ActionIcon size="lg" onClick={() => navigate('guestregistration')}>
//             <IoPersonSharp size="24" />
//           </ActionIcon>
//           <ActionIcon size="lg" onClick={open}>
//             <IoMenu size="24" />
//           </ActionIcon>
//         </Flex>
//       </div>

//       <Drawer
//         opened={opened}
//         onClose={close}
//         title="User Details"
//         overlayProps={{ opacity: 0.5, blur: 4 }}
//         size={"50%"}
//       >
//         {/* Drawer content - example user details form */}
//         <form>
//           {/* <TextInput label="Name" placeholder="Your name" required />
//           <TextInput label="Email" placeholder="Your email" required /> */}
//           {/* Add more fields as needed */}
//           {/* <Group position="right" mt="md">
//             <Button onClick={close}>Close</Button>
//           </Group> */}
//           <Usermanagement/>
//         </form>
//       </Drawer>
//     </>
//   );
// };

// export default Footer1;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { ActionIcon, Flex, Drawer } from '@mantine/core';
// import { RiHomeLine } from 'react-icons/ri';
// import { IoMenu, IoPersonSharp } from 'react-icons/io5';
// import { useDisclosure } from '@mantine/hooks';
// import Usermanagement from './USerManagement/Usermanagement';

// const Footer1 = () => {
//   const navigate = useNavigate();
//   const [opened, { toggle, close }] = useDisclosure(false); // Use toggle from useDisclosure
//   const [activeIcon, setActiveIcon] = useState('home'); // Set the initial active icon to 'home'

//   const handleIconClick = (iconName, route) => {
//     if (iconName === 'menu') {
//       toggle(); // Toggle the drawer when 'menu' icon is clicked
//       setActiveIcon(activeIcon === 'menu' ? '' : 'menu'); // Toggle active state of 'menu' icon
//     } else {
//       setActiveIcon(iconName); // Set active icon for non-menu icons
//       navigate(route); // Navigate to the respective route
//       close(); // Close the drawer when navigating away from 'menu'
//     }
//   };

//   return (
//     <>
//       <div
//         style={{
//           height: '70px',
//           width: '100%',
//           position: 'fixed',
//           left: 0,
//           zIndex: 1000,
//           bottom: 0,
//           backgroundColor: 'white',
//           // borderTop: '1px solid  #D3D3D3',,
//           boxShadow: '0px 0px 35px rgba(0, 0, 0, 0.1)',
//           paddingTop: '0px',
//           paddingBottom: '0px',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <Flex
//           style={{
//             width: '90%',
//             maxWidth: '400px',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}
//         >
//           <ActionIcon
//             size="lg"
//             onClick={() => handleIconClick('home', 'bookings')}
//             style={{ color: activeIcon === 'home' ? 'red' : 'gray', }}
//           >
//             <RiHomeLine size="24" />
//           </ActionIcon>
//           <ActionIcon
//             size="lg"
//             onClick={() => handleIconClick('guest', 'guestregistration')}
//             style={{ color: activeIcon === 'guest' ? 'red' : 'gray', }}
//           >
//             <IoPersonSharp size="24" />
//           </ActionIcon>
//           <ActionIcon
//             size="lg"
//             onClick={() => handleIconClick('menu')}
//             style={{ color: activeIcon === 'menu' ? 'red' : 'gray', }}
//           >
//             <IoMenu size="24" />
//           </ActionIcon>
//         </Flex>
//       </div>

//       <Drawer
//         opened={opened}
//         onClose={close} // Ensure the drawer closes properly
//         title="User Details"
//         overlayProps={{ opacity: 0.5, blur: 4 }}
//         size="50%"
//       >
//         <Usermanagement />
//       </Drawer>
//     </>
//   );
// };

// export default Footer1;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActionIcon, Flex, Drawer } from '@mantine/core';
import { RiHomeLine } from 'react-icons/ri';
import { IoMenu, IoPersonSharp } from 'react-icons/io5';
import { useDisclosure } from '@mantine/hooks';
import Usermanagement from './USerManagement/Usermanagement';

const Footer1 = () => {
  const navigate = useNavigate();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [activeIcon, setActiveIcon] = useState('home');

  const handleIconClick = (iconName, route) => {
    if (iconName === 'menu') {
      toggle();
      setActiveIcon(activeIcon === 'menu' ? '' : 'menu');
    } else {
      setActiveIcon(iconName);
      navigate(route);
      close();
    }
  };

  return (
    <>
      {/* Main container optimized for short scroll */}
      <div style={styles.mainContainer}>
        <div style={styles.contentContainer}>
          {/* Page content goes here */}
          {/* <p>Your content goes here...</p> */}
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footerContainer}>
        <Flex style={styles.iconContainer}>
          <ActionIcon
            size="lg"
            onClick={() => handleIconClick('home', 'bookings')}
            style={{ color: activeIcon === 'home' ? 'red' : 'gray' }}
          >
            <RiHomeLine size="24" />
          </ActionIcon>
          <ActionIcon
            size="lg"
            onClick={() => handleIconClick('guest', 'guestregistration')}
            style={{ color: activeIcon === 'guest' ? 'red' : 'gray' }}
          >
            <IoPersonSharp size="24" />
          </ActionIcon>
          <ActionIcon
            size="lg"
            onClick={() => handleIconClick('menu')}
            style={{ color: activeIcon === 'menu' ? 'red' : 'gray' }}
          >
            <IoMenu size="24" />
          </ActionIcon>
        </Flex>
      </div>

      {/* Drawer with limited height */}
      <Drawer
        opened={opened}
        onClose={close}
        title="User Details"
        overlayProps={{ opacity: 0.5, blur: 4 }}
        size={opened ? '50%' : '30%'}
        styles={{
          drawer: {
            padding: '10px',
            height: 'calc(100vh - 150px)', // Drawer is shorter to reduce scroll length
            overflowY: 'auto',
            '@media (max-width: 768px)': {
              width: '75%',
            },
            '@media (max-width: 576px)': {
              width: '90%',
            },
          },
        }}
      >
        <Usermanagement />
      </Drawer>
    </>
  );
};

// Optimized styles to limit scroll
const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // height: 'calc(100vh - 70px)', // Take up the viewport height minus the footer
    overflowY: 'auto', // Allow scroll only when content overflows
  },
  contentContainer: {
    flex: 1,
    padding: '20px',
    overflowY: 'auto', // Scroll within the content area if needed
    maxHeight: '500px', // Limit height to reduce overall scroll
  },
  footerContainer: {
    height: '70px',
    width: '100%',
    position: 'fixed',
    left: 0,
    bottom: 0,
    backgroundColor: 'white',
    boxShadow: '0px 0px 35px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  iconContainer: {
    width: '90%',
    maxWidth: '400px',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      width: '80%',
    },
    '@media (max-width: 576px)': {
      width: '95%',
    },
  },
};

export default Footer1;
