// import { Avatar, Menu } from '@mantine/core';
// import axios from 'axios';
// import React from 'react';
// import { json, useNavigate } from 'react-router-dom';

// const Usermanagement = () => {
// //     const navigate = useNavigate();

// //   const handleLogout = () => {
// //     axios.get('http://192.168.29.68:5000/hms/logout')
// //     console.log('Logged out');

// //     navigate('/')
    
// //   };
//   return (
//     <div>
//       {/* <Menu shadow="md" width={200}>
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
//         hsudjdj
//     </div>
//   )
// }

// export default Usermanagement
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Menu, Button, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import client from '../../API/api';
import { FaUserLarge } from 'react-icons/fa6';

const Usermanagement = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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
    <div style={{ display: 'flex', alignItems: 'start', flexDirection: 'column' }}>
      {user ? (
        <>
            {/* <Avatar color="orange" radius="xl" size={60}   style={{ marginRight: "10px", padding:"0px"}}>F</Avatar> */}
          {/* <Text size="lg" style={{ marginTop: '10px',marginRight: "10px" }}>{user.username}</Text> */}
          {/* <FaUserLarge size={35} color='gray' style={{paddingTop:"10%"}}/> */}
          <div style={{display:"flex",alignItems:"flex-start",flexDirection:"row",paddingTop:"20%"}}>
          <Avatar radius="xl" size={"md"} color='blue'/>
          <p size="lg" style={{marginLeft:"13%",marginTop:"13%",fontWeight:"450"}}>{user.username}</p>
          </div>
          <div style={{ position: "absolute", bottom: "15%", width: "100%" }}>
          <Button onClick={handleLogout} style={{ marginTop: '50px',marginRight: "20px" }}>Logout</Button>
          </div>
        </>
      ) : (
        <Text>Loading user data...</Text>
      )}
    </div>
  );
};

export default Usermanagement;
