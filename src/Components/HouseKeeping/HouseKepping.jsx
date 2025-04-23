// // import React from 'react'
// import React, { useState } from 'react';

// import { TextInput, Select, Button,Image ,Avatar,Footer,Flex,Badge,Text,Card,Group} from '@mantine/core';
// import Fortune from '../../assets/fj.jpg'


// const HouseKepping = () => {
//   const [selectedName, setSelectedName] = useState('');
//   const [selectedRoom, setSelectedRoom] = useState('');

//   // Dummy data for dropdown options
//   const names = ['John', 'Alice', 'Bob'];
//   const rooms = ['Room 101', 'Room 102', 'Room 103'];

//   // Function to handle form submission
//   const handleSubmit = () => {
//     // Your logic for handling form submission goes here
//     console.log(`Name: ${selectedName}, Room: ${selectedRoom}`);
//   };
//   return (
//     <div>
//     <div style={{ backgroundColor: 'white', width:"375px", height:"48px",top:"44px",textAlign: 'center' }}>
//         <div style={{display:"flex",justifyContent:"space-between"}}>
//         <Image src={Fortune} alt='logo' style={{ height:'100px',width:"17%",marginLeft:"10px"}} />
//         {/* <Image src={Icon} alt='logo' style={{ height:'10px',width:"17%",marginLeft:"10px",top:"10px"}} /> */}
//         <Avatar color="orange" radius="xl" size={47} style={{marginRight:"10px"}}>H</Avatar>  
//         </div>

//     </div>
//     <div style={{ maxWidth: 350, margin: '0 auto', padding: "30px", paddingTop: "10px" ,alignItems:"center"}}>
//       <h1 style={{display:"flex",justifyContent:"center"}}>HouseKepping</h1>
//       </div>
//       <div style={{ display: 'flex', justifyContent: 'space-evenly',padding:"0px" }}>
//           <Card shadow="sm" style={{ flex: '1', marginRight: '20px' ,display:"flex",justifyContent:"center"}}>
//             <Card.Section>
//               {/* <h2>Mantine in a Flowing Field</h2> */}
//               {/* <p>Working (5)</p> */}
//               <h2 style={{display:"flex",justifyContent:"center"}}>
//                 5
//               </h2>
//               <h4>Working</h4>
//             </Card.Section>
//           </Card>
//           <Card shadow="sm" style={{ flex: '1', marginRight: '20px' }}>
//             <Card.Section>
//               {/* <h2>Mantine in a Stagnant Field</h2> */}
//               {/* <p>Not Working (6)</p> */}
//               <h2 style={{display:"flex",justifyContent:"center"}}>
//                 6
//               </h2>
//               <h4>Not Working</h4>
//             </Card.Section>
//           </Card>
//           <Card shadow="sm" style={{ flex: '1' }}>
//             <Card.Section>
//               {/* <h2>Mantine in a High Voltage Field</h2> */}
//               {/* <p>Hc (11)</p> */}
//               <h2 style={{display:"flex",justifyContent:"center"}}>11</h2>
//               <h4> Total Hc</h4>
//             </Card.Section>
//           </Card>
        
//         </div>
//         <div style={{padding:"30px"}}>
//           <Select
//           data={names.map(name => ({ value: name, label: name }))}
//           placeholder="Select name"
//           label="Name"
//           value={selectedName}
//           onChange={value => setSelectedName(value)}
//           style={{ marginBottom: '10px' }}
//         />
//          <Select
//           data={rooms.map(room => ({ value: room, label: room }))}
//           placeholder="Select room"
//           label="Room"
//           value={selectedRoom}
//           onChange={value => setSelectedRoom(value)}
//           style={{ marginBottom: '20px' }}
//         />
        
//         {/* Submit button */}
//         {/* <Button onClick={handleSubmit} style={{backgroundColor:"red"}}>Submit</Button> */}
//         <Button onClick={handleSubmit} style={{ backgroundColor: "red", width: "50%", marginTop: "0px", fontSize: "16px",display:"flex," }}>Submit</Button>

//           </div>
//           <div>
      
//       <Footer height={60} p="md">
//       <Avatar src={null} alt="no image here" color="indigo" />

//       </Footer>

//     </div>
//     </div>
//   )
// }

// export default HouseKepping
import React from 'react';
import { Modal, Button, Text, Card } from '@mantine/core';
import client from '../../API/api';
import { useNavigate } from 'react-router-dom';


const Housekeeping = ({ selectedRoom, onClose ,refreshRoomStatus}) => {
  const navigate = useNavigate();

  const handleDoneClick = async () => {
    try {
      console.log('HouseKeeping hotelId:', selectedRoom.hotelId); // Debug log
      await client.put('/api/room-status/update-status', { roomNo: selectedRoom.roomNo, status: 'vacant' ,hotelId: selectedRoom.hotelId,});
      refreshRoomStatus(); 
      onClose();
      navigate('/app/tabs'); // Navigate to the bookings page
    } catch (error) {
      console.error('Error updating room status:', error);
      // Optionally show an error message
    }
  };

  return (
    <Modal
  opened={!!selectedRoom}
  onClose={onClose}
  centered
  size={380}
  withCloseButton={false}
  overlayProps={{
    blur: 4,
    opacity: 0.6,
    color: '#1a1b1e'
  }}
  styles={{
    content: {
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 12px 32px rgba(0,0,0,0.12)'
    }
  }}
>
  <div style={{
    background: '#ffffff',
    padding: '0'
  }}>
    {/* Header */}
    <div style={{
      background: 'linear-gradient(90deg, #0d9488 0%, #14b8a6 100%)',
      padding: '24px',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.25)',
        width: '44px',
        height: '44px',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(4px)'
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white">
          <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
          <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
        </svg>
      </div>
      <div>
        <Text fz="xl" fw={700} style={{ letterSpacing: '0.5px' }}>Room {selectedRoom?.roomNo}</Text>
        <Text fz="sm" style={{ opacity: 0.9, fontWeight: 500 }}>Ready for Cleaning</Text>
      </div>
    </div>

    {/* Content */}
    <div style={{ padding: '24px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px',
        marginBottom: '24px',
        padding: '20px',
        background: '#f0fdfa',
        borderRadius: '12px',
        border: '1px solid #ccfbf1'
      }}>
        <div style={{
          background: '#14b8a6',
          width: '24px',
          height: '24px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          color: 'white'
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
        <Text fz="sm" style={{ color: '#0f766e', lineHeight: '1.5' }}>
          Housekeeping team notified. Please confirm when cleaning is complete to make the room available for guests.
        </Text>
      </div>

      {/* Action Buttons */}
      <div style={{
        display: 'flex',
        gap: '12px',
        marginTop: '16px'
      }}>
        <Button
          fullWidth
          variant="outline"
          color="gray"
          onClick={onClose}
          style={{
            border: '1px solid #e2e8f0',
            fontWeight: 500,
            color: '#64748b',
            borderRadius: '8px',
            height: '44px'
          }}
        >
          Remind Later
        </Button>
        <Button
          fullWidth
          variant="filled"
          color="teal"
          onClick={handleDoneClick}
          style={{
            fontWeight: 500,
            borderRadius: '8px',
            height: '44px',
            background: '#0d9488',
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            ':hover': {
              background: '#0f766e',
              transform: 'translateY(-1px)'
            }
          }}
        >
          Confirm Cleaned
        </Button>
      </div>
    </div>
  </div>
</Modal>  );
};

export default Housekeeping;
