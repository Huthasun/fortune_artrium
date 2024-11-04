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
      await client.put('/api/room-status/update-status', { roomNo: selectedRoom.roomNo, status: 'vacant' });
      refreshRoomStatus(); 
      onClose();
      navigate('/app/bookings'); // Navigate to the bookings page
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
      size={350}
      xOffset={-10}
          
    >
       <Card
        shadow="sm"
        style={{
          maxWidth: '100%',
          margin: 'auto',
          padding: '10px',
          display: 'grid',
          borderRadius: '8px',
        }}
      >
      <Text fz="lg">Room {selectedRoom?.roomNo} requires housekeeping.</Text>
      <Button
        style={{ backgroundColor: 'red'}}
        onClick={handleDoneClick}
        
      >
        Done
      </Button>
      </Card>
    </Modal>
  );
};

export default Housekeeping;
