// // import React, { useState } from 'react';
// // import { TextInput, Button } from '@mantine/core';

// // const Departure = () => {

// //     const [formData, setFormData] = useState({
// //         departureDate: '',
// //         departureTime: '',
// //       });
    
// //       const handleInputChange = (field, value) => {
// //         setFormData({ ...formData, [field]: value });
// //       };
    
// //       const handleSubmit = () => {
// //         // Handle form submission, e.g., sending data to backend
// //         console.log(formData);
// //       };
// //   return (
    
// //        <div style={{ maxWidth: 400, margin: '0 auto' }}>
// //       <TextInput
// //         label="Departure Date"
// //         placeholder="YYYY-MM-DD"
// //         pattern="\d{4}-\d{2}-\d{2}"
// //         value={formData.departureDate}
// //         onChange={(event) => handleInputChange('departureDate', event.target.value)}
// //         required
// //       />
// //       <TextInput
// //         label="Departure Time"
// //         placeholder="HH:MM"
// //         pattern="\d{2}:\d{2}"
// //         value={formData.departureTime}
// //         onChange={(event) => handleInputChange('departureTime', event.target.value)}
// //         required
// //       />
// //       <Button onClick={handleSubmit}style={{marginTop:'11px'}}>Submit</Button>
// //     </div>
    
// //   )
// // }

// // export default Departure

// import { Center } from '@mantine/core'
// // import React from 'react'
// import React, { useState } from 'react';
// import { TextInput, Select, Button,Image ,Avatar,Footer,Flex,Badge,Text,Card,Group,SimpleGrid} from '@mantine/core';
// import '../../src/Styling.css';
// import Fortune from '../assets/fj.jpg';
// import Icon from '../assets/Ellipse 7.jpg'
// import Header from './Header';


// const Departure = () => {
//   const handleSubmit = () => {
//     // Handle form submission logic here
//     console.log('Form submitted');
//   };
//   const [selectedButton, setSelectedButton] = useState(null);
//   return (
//     <div>
//       {/* <div style={{ backgroundColor: 'white', width:"375px", height:"48px",top:"44px",textAlign: 'center' }}>
//         <div style={{display:"flex",justifyContent:"space-between"}}>
//         <Image src={Fortune} alt='logo' style={{ height:'100px',width:"17%",marginLeft:"10px"}} />
//         <Avatar color="orange" radius="xl" size={47} style={{marginRight:"10px"}}>D</Avatar>  
//         </div>

//       </div> */}
//       <Header/>
//       <div style={{ maxWidth: 350, margin: '0 auto' ,alignItems:"center",padding:"0px",paddingTop:"0px"}}>
//       <h1 style={{display:"flex",justifyContent:"center",}}>Availability</h1>
//       </div>
//        <SimpleGrid cols={3} style={{display:'grid',placeItems:"center",paddingLeft:'20px',paddingRight:"20px"}}>
//       <div>
//       <Button style={{backgroundColor:"#FE0000",width:"100px",height:"40px",  border: selectedButton === 101 ? '2px solid #00000040' : 'none',}}
//        onClick={() => setSelectedButton(101)}
//       >
//         101
//         </Button>
//        <Text fz="sm" style={{display:"grid",placeItems:"center"}}>Filled</Text>
//       </div>
//       <div>
//       <Button style={{backgroundColor:"#E1C16E",width:"100px",height:"40px", border: selectedButton === 102 ? '2px solid #00000040' : 'none'}} onClick={() => setSelectedButton(104)}>104</Button>
//        <Text fz="sm" style={{display:"grid",placeItems:"center"}}>Cleaning</Text>
//       </div>
//       <div>
//       <Button style={{backgroundColor:"#03C03C",width:"100px",height:"40px",border: selectedButton === 103 ? '2px solid #00000040' : 'none'}} onClick={() => setSelectedButton(108)}>108</Button>
//        <Text fz="sm" style={{display:"grid",placeItems:"center"}}>Vacant</Text>
//       </div>
//       <div>
//       <Button style={{backgroundColor:"#03C03C",width:"100px",height:"40px",border: selectedButton === 104 ? '2px solid #00000040' : 'none'}} onClick={() => setSelectedButton(105)}>105</Button>
//        <Text fz="sm" style={{display:"grid",placeItems:"center"}}>Vacant</Text>
//       </div>
//       <div>
//       <Button style={{backgroundColor:"#03C03C",width:"100px",height:"40px",border: selectedButton === 105 ? '2px solid #00000040' : 'none'}} onClick={() => setSelectedButton(103)}>103</Button>
//        <Text fz="sm" style={{display:"grid",placeItems:"center"}}>Vacant</Text>
//       </div>
//       <div>
//       <Button style={{backgroundColor:"#03C03C",width:"100px",height:"40px",border: selectedButton === 106 ? '2px solid #00000040' : 'none'}}  onClick={() => setSelectedButton(111)}>111</Button>
//        <Text fz="sm" style={{display:"grid",placeItems:"center"}}>Vacant</Text>
//       </div>
//       <div>
//       <Button style={{backgroundColor:"#FE0000",width:"100px",height:"40px",border: selectedButton === 107 ? '2px solid #00000040' : 'none'}}  onClick={() => setSelectedButton(115)}>115</Button>
//        <Text fz="sm" style={{display:"grid",placeItems:"center"}}>Filled</Text>
//       </div>
//       <div>
//       <Button style={{backgroundColor:"#FE0000",width:"100px",height:"40px",border: selectedButton === 108 ? '2px solid #00000040' : 'none'}} onClick={() => setSelectedButton(118)}>118</Button>
//        <Text fz="sm" style={{display:"grid",placeItems:"center"}}>Filled</Text>
//       </div>
//       <div>
//       <Button style={{backgroundColor:"#E1C16E",width:"100px",height:"40px",border: selectedButton === 109 ? '2px solid #00000040' : 'none'}} onClick={() => setSelectedButton(121)}>121</Button>
//        <Text fz="sm" style={{display:"grid",placeItems:"center"}}>Cleaning</Text>
//       </div>
//     </SimpleGrid>
//       <div>
//       {/* <Card style={{ maxWidth: 400, margin: 'auto' }}>
//       <div style={{ padding: 50}}>
//         <Text size="md"  style={{ marginTop: 10 }} weight={700}>Room.no: 08</Text>
//         <Text size="md" style={{ marginTop: 10 }} weight={700}>C.name: nani</Text>
//         <Text size="md" style={{ marginTop: 10 }} weight={700}>Dept.date: 12/06/2002</Text>
//         <Text size="md" style={{ marginTop: 10 }} weight={700}>Dept.time: 1:30:16 PM</Text>
//         <Button 
//           style={{ marginTop: 20 ,backgroundColor:"red"}} 
//           onClick={handleSubmit} 
//           fullWidth 
//           variant="filled" 
//           // backgroundColor="red"
//         >
//           Depart
//         </Button>
//       </div>
//     </Card> */}
//       </div>
//       <div>
      
//       {/* <Footer height={60} p="md">
//       <Avatar src={null} alt="no image here" color="indigo" />

//       </Footer> */}

//     </div>
//     </div>
//   )
// }

// export default Departure


// import React, { useState } from 'react';
// import { SimpleGrid, Button, Text, Card } from '@mantine/core';
// import Register from './Register';
// import PendigCard from './Cards/PendigCard';
// import Header from './Header';
// // import { Link } from 'react-router-dom'

// const Departure = () => {
//   const [selectedButton, setSelectedButton] = useState(null);
//   const [showPendingCard, setShowPendingCard] = useState(false);
//   const [showRegisterPage, setShowRegisterPage] = useState(false); // New state for the register page component

//   const handleSubmit = () => {
//     // Handle form submission logic here
//     console.log('Form submitted');
//   };

//   const handleButtonClick = (buttonId) => {
//     setSelectedButton(buttonId);
//     if (buttonId === 101 || buttonId === 115 || buttonId === 118) {
//       setShowPendingCard(true); // Show the pending card only for specific button IDs
//       // setShowRegisterPage(false); // Hide register page if "Filled" button is clicked
//     } else if (buttonId === 108 || buttonId === 105 || buttonId === 103 || buttonId === 111) {
//       setShowPendingCard(false); // Hide the pending card for other button IDs
//       // setShowRegisterPage(true); // Show register page if "Vacant" button is clicked
//     } else {
//       setShowPendingCard(false);
//       // setShowRegisterPage(false);
//     }
//   };

//   return (
//     <div>
//       <Header/>
     
//       <div style={{ maxWidth: 350, margin: '0 auto', alignItems: "center", padding: "0px", paddingTop: "0px" }}>
//         <h1 style={{ display: "flex", justifyContent: "center", }}>Availability</h1>
//       </div>
     
//       <SimpleGrid cols={3} style={{ display: 'grid', placeItems: "center", paddingLeft: '20px', paddingRight: "20px" }}>
//         {/* Render buttons */}
//         {[101, 104, 108, 105, 103, 111, 115, 118, 121].map((buttonId) => (
//           <div key={buttonId}>
            
//               <Button
//               style={{ backgroundColor: getButtonColor(buttonId), width: "100px", height: "40px", border: selectedButton === buttonId ? '2px solid #00000040' : 'none' }}
//               onClick={() => handleButtonClick(buttonId)}
//             >
//               {buttonId}
//             </Button>
           
            
//             <Text fz="sm" style={{ display: "grid", placeItems: "center" }}>{getButtonText(buttonId)}</Text>
//           </div>
//         ))}
//       </SimpleGrid>
//       <div style={{padding:"20px"}}>
//       {showPendingCard && (
//        <PendigCard/>
//       )}
//       </div>
      
      
     

     
//     </div>
//   );
// };


// const getButtonText = (buttonId) => {
//   switch (buttonId) {
//     case 101:
//     case 115:
//     case 118:
//       return 'Filled';
//     case 104:
//     case 121:
//       return 'Cleaning';
//     default:
//       return 'Vacant';
//   }
// };

// const getButtonColor = (buttonId) => {
//   switch (buttonId) {
//     case 101:
//     case 115:
//     case 118:
//       return '#FE0000';
//     case 104:
//     case 121:
//       return '#E1C16E';
//     default:
//       return '#03C03C';
//   }
// };

// export default Departure;


// 

// import React, { useState } from 'react';
// import { SimpleGrid, Button, Text, Card } from '@mantine/core';
// import Header from './Header';
// import bookingData from './databooking';

// const Departure = () => {
//   const [selectedButton, setSelectedButton] = useState(null);
//   const [showPendingCard, setShowPendingCard] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null); // State to track selected room

//   const handleButtonClick = (roomNo) => {
//     setSelectedButton(roomNo);
//     setShowPendingCard(false); // Hide pending card initially
//     setSelectedRoom(null); // Reset selected room when button clicked

//     // Find the room which matches the room number
//     const room = Object.values(bookingData).find((room) => room.roomNo === roomNo);

//     // Check if the room exists and is pending
//     if (room && room.status === 'pending') {
//       setSelectedRoom(room); // Set selected room if it's pending
//       setShowPendingCard(true); // Show pending card for selected room
//     }
//   };

//   return (
//     <div>
//       <Header/>
//       <div style={{ maxWidth: 350, margin: '0 auto', alignItems: "center", padding: "0px", paddingTop: "0px" }}>
//         <h1 style={{ display: "flex", justifyContent: "center", }}>Availability</h1>
//       </div>
//       <SimpleGrid cols={3} style={{ display: 'grid', placeItems: "center", paddingLeft: '20px', paddingRight: "20px" }}>
//         {[101, 102, 103, 104, 105, 106, 107, 108, 109].map((roomNo) => (
//           <div key={roomNo}>
//             <Button
//               style={{ backgroundColor: getButtonColor(roomNo), width: "100px", height: "40px", border: selectedButton === roomNo ? '2px solid #00000040' : 'none' }}
//               onClick={() => handleButtonClick(roomNo)}
//             >
//               {roomNo}
//             </Button>
//             <Text fz="sm" style={{ display: "grid", placeItems: "center" }}>{getButtonText(roomNo)}</Text>
//           </div>
//         ))}
//       </SimpleGrid>
//       <div style={{padding:"20px"}}>
//         {showPendingCard && selectedRoom && (
//           // <Card>
//           //   <h2>Room {selectedRoom.roomNo}</h2>
//           //   <p>Status: {selectedRoom.status}</p>
//           //   <p>Name: {selectedRoom.name}</p>
//           //   <p>Departure Date: {selectedRoom.deptDate}</p>
//           //   <p>Total Amount: {selectedRoom.totalAmount}</p>
//           //   <p>Pending Amount: {selectedRoom.pendingAmount}</p>
//           // </Card>
//           <Card
//           shadow="sm"
//              style={{ border: '3px solid #FE000099', maxWidth: 400, margin: 'auto', padding: 10 ,display:"grid",borderRadius:"8px"}}
          
//           >
//             <div style={{width:"346px",top:"35px",border:"1px solid white",display:"flex",justifyContent:"space-between",paddingTop:"0px",margin:"0px"}}>
//                   <p style={{marginTop:"0px"}}>Room.{selectedRoom.roomNo}</p>
//                    <p style={{marginTop:"0px",marginRight:"32px"}}>{selectedRoom.status}</p>
//           </div>
//              <SimpleGrid cols={2}>
//               <div  style={{display:"flex",justifyContent:"space-between",flexDirection:"column",marginLeft:"10px",height:"120px"}}>
      
              
//             <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//               Name 
//              </Text>
            
//             <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//                Dept Date
//             </Text>
            
//             <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//               Total Amount
//             </Text>
            
//             <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//               Pending Amount
//             </Text>
           
            
//             </div>
//             <div  style={{display:"flex",justifyContent:"flex-end",flexDirection:"column",marginLeft:"52px",top:"0"}}>
//             <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//                {selectedRoom}
//             </Text>
//             <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//                {selectedRoom.deptDate}
//             </Text>
//             <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//                 {selectedRoom.totalAmount}
//             </Text>
//              <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//              {selectedRoom.pendingAmount}
//             </Text>
      
      
//             </div>
//             </SimpleGrid>
//             <Button style={{width:"94px",height:"28px",backgroundColor:"#FE0000",marginTop:'0px'}}>Modify</Button> 
      
            
//           </Card>
//         )}
//       </div>
//     </div>
//   );
// };

// const getButtonText = (roomNo) => {
//   // Implement based on your requirement
// };

// const getButtonColor = (roomNo) => {
//   // Implement based on your requirement
//   const room = Object.values(bookingData).find((room) => room.roomNo === roomNo);

//   // Check if the room exists and its status
//   if (room) {
//     switch (room.status) {
//       case 'pending':
//         return '#FE0000'; // Red for pending (Filled)
//       case 'completed':
//         return '#03C03C'; // Green for completed (Vacant)
//       default:
//         return '#E1C16E'; // Yellow for housekeeping
//     }
//   }
//   return '#E1C16E'; // Yellow for housekeeping
// };

// export default Departure;


// import React, { useState } from 'react';
// import { SimpleGrid, Button, Text, Card } from '@mantine/core';
// import Header from './Header';
// import bookingData from './databooking';
// import PendigCard from './Cards/PendigCard';
// import { useNavigate } from 'react-router-dom';

// const Departure = () => {
//   const [selectedButton, setSelectedButton] = useState(null);
//   const [showPendingCard, setShowPendingCard] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null); // State to track selected room
//   const navigate = useNavigate();

//   const handleButtonClick = (roomNo) => {
//     setSelectedButton(roomNo);
//     setShowPendingCard(false); // Hide pending card initially
//     setSelectedRoom(null); // Reset selected room when button clicked

//     // Find the room which matches the room number
//     const room = Object.values(bookingData).find((room) => room.roomNo === roomNo);

//     // Check if the room exists and is pending
//     if (room && room.status === 'pending') {
//       setSelectedRoom(room); // Set selected room if it's pending
//       setShowPendingCard(true); // Show pending card for selected room
//     }
//   };

//   const getButtonText = (roomNo) => {
//     const room = Object.values(bookingData).find((room) => room.roomNo === roomNo);
//     if (room) {
//       switch (room.status) {
//         case 'pending':
//           return 'Occupied';
//         case 'completed':
//           return 'Vacant';
//         default:
//           return 'Housekeeping';
//       }
//     }
//     return 'Housekeeping';
//   };

//   const getButtonColor = (roomNo) => {
//     const room = Object.values(bookingData).find((room) => room.roomNo === roomNo);
//     if (room) {
//       switch (room.status) {
//         case 'pending':
//           return '#FE0000'; // Red for pending (Filled)
//         case 'completed':
//           return '#03C03C'; // Green for completed (Vacant)
//         default:
//           return '#E1C16E'; // Yellow for housekeeping
//       }
//     }
//     return '#E1C16E'; // Yellow for housekeeping
//   };
//   const handleRegisterClick = () => {
//     // Navigate to your register page using navigate
//     navigate('/register');
//   };

//   return (
//     <div>
//       <Header />
//       <div style={{ maxWidth: 350, margin: '0 auto', alignItems: "center", padding: "0px", paddingTop: "0px" }}>
//         <h1 style={{ display: "flex", justifyContent: "center", }}>Availability</h1>
//       </div>
//       {/* <SimpleGrid cols={3} style={{ display: 'grid', placeItems: "center", paddingLeft: '20px', paddingRight: "20px" }}>
//         {[bookingData].map((roomNo) => (
//           <div key={roomNo}>
//             <Button
//               style={{ backgroundColor: getButtonColor(roomNo), width: "100px", height: "40px", border: selectedButton === roomNo ? '2px solid #00000040' : 'none' }}
//               onClick={() => handleButtonClick(roomNo)}
//             >
              
//               <Text fz="sm" style={{ display: "grid", placeItems: "center", alignItems: "center", justifyContent: "center", margin: 0 }}>{roomNo}</Text>
              
//             </Button>
//             {getButtonText(roomNo)}
//           </div>
//         ))}
//       </SimpleGrid> */}
//       <SimpleGrid cols={3} style={{ display: 'grid', placeItems: "center", paddingLeft: '20px', paddingRight: "20px" }}>
//   {bookingData.map((room) => (
//     <div key={room.roomNo}>
//       <Button
//         style={{ backgroundColor: getButtonColor(room.roomNo), width: "100px", height: "40px", border: selectedButton === room.roomNo ? '2px solid #00000040' : 'none' }}
//         onClick={() => handleButtonClick(room.roomNo)}
//       >
//         <Text fz="sm" style={{ display: "grid", placeItems: "center", alignItems: "center", justifyContent: "center", margin: 0 }}>{room.roomNo}</Text>
//       </Button>
//       {getButtonText(room.roomNo)}
//     </div>
//   ))}
// </SimpleGrid>
//  {/* <SimpleGrid cols={3} style={{ display: 'grid', placeItems: "center", paddingLeft: '20px', paddingRight: "20px" }}>
//         {bookingData.map((room) => (
//           <div key={room.roomNo}>
//             <Button
//               style={{ backgroundColor: getButtonColor(room.roomNo), width: "100px", height: "40px", border: selectedButton === room.roomNo ? '2px solid #00000040' : 'none' }}
//               onClick={() => {
//                 handleButtonClick(room.No); // Typo fixed (room.No to room.roomNo)

//                 // Trigger register click only for green buttons (completed status)
//                 if (room.status === 'completed') {
//                   handleRegisterClick();
//                 }
//               }}
//             >
//               <Text fz="sm" style={{ display: "grid", placeItems: "center", alignItems: "center", justifyContent: "center", margin: 0 }}>{room.roomNo}</Text>
//             </Button>
//             {getButtonText(room.roomNo)}
//           </div>
//         ))}
//       </SimpleGrid> */}








//       <div style={{ padding: "20px" }}>
//         {showPendingCard && selectedRoom && (
//           // <Card style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
//           //   <h2 style={{ color: "blue", fontSize: "24px", marginBottom: "10px" }}>Room {selectedRoom.roomNo}</h2>
//           //   <p style={{ color: "green", fontSize: "16px", marginBottom: "5px" }}>Status: {selectedRoom.status}</p>
//           //   <p style={{ color: "red", fontSize: "16px", marginBottom: "5px" }}>Name: {selectedRoom.name}</p>
//           //   <p style={{ color: "purple", fontSize: "16px", marginBottom: "5px" }}>Departure Date: {selectedRoom.deptDate}</p>
//           //   <p style={{ color: "orange", fontSize: "16px", marginBottom: "5px" }}>Total Amount: {selectedRoom.totalAmount}</p>
//           //   <p style={{ color: "black", fontSize: "16px", marginBottom: "5px" }}>Pending Amount: {selectedRoom.pendingAmount}</p>
//           // </Card>
//          <div>
//             <PendigCard selectedRoom={selectedRoom} />

//          </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Departure;
 

// import React, { useState } from 'react';
// import { SimpleGrid, Button, Text } from '@mantine/core';
// import Header from './Header';
// import bookingData from './databooking';
// // import PendingCard from './Cards/PendingCard'; // Corrected import name
// import PendigCard from './Cards/PendigCard';
// import { useNavigate } from 'react-router-dom';

// const Departure = () => {
//   const [selectedButton, setSelectedButton] = useState(null);
//   const [showPendingCard, setShowPendingCard] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const navigate = useNavigate();

//   const handleButtonClick = (roomNo) => {
//     setSelectedButton(roomNo);
//     setShowPendingCard(false);
//     setSelectedRoom(null);

//     const room = Object.values(bookingData).find((room) => room.roomNo === roomNo);

//     if (room) {
//       setSelectedRoom(room);

//       if (room.status === 'completed') {
//         handleRegisterClick(); // Navigate to register page for "Vacant" rooms
//       } else if (room.status === 'pending') {
//         setShowPendingCard(true);
//       }
//     }
//   };

//   const getButtonText = (roomNo) => {
//     const room = Object.values(bookingData).find((room) => room.roomNo === roomNo);
//     if (room) {
//       switch (room.status) {
//         case 'pending':
//           return 'Occupied';
//         case 'completed':
//           return 'Vacant';
//         default:
//           return 'Housekeeping';
//       }
//     }
//     return 'Housekeeping';
//   };

//   const getButtonColor = (roomNo) => {
//     const room = Object.values(bookingData).find((room) => room.roomNo === roomNo);
//     if (room) {
//       switch (room.status) {
//         case 'pending':
//           return '#FE0000';
//         case 'completed':
//           return '#03C03C';
//         default:
//           return '#E1C16E';
//       }
//     }
//     return '#E1C16E';
//   };

//   const handleRegisterClick = () => {
//     navigate('/register');
//   };
  

//   return (
//     <div>
//       <Header />
//       <div style={{ maxWidth: 350, margin: '0 auto', alignItems: "center", padding: "0px", paddingTop: "0px" }}>
//         <h1 style={{ display: "flex", justifyContent: "center", }}>Availability</h1>
//       </div>
//       <SimpleGrid cols={3} style={{ display: 'grid', placeItems: "center", paddingLeft: '20px', paddingRight: "20px" }}>
//         {Object.values(bookingData).map((room) => (
//           <div key={room.roomNo}>
//             {/* <Button
//               style={{ backgroundColor: getButtonColor(room.roomNo), width: "100px", height: "40px", border: selectedButton === room.roomNo ? '2px solid #00000040' : 'none' }}
//               onClick={() => handleButtonClick(room.roomNo)}
//             >
//              <div>
//                <Text fz="sm" style={{ display: "grid", placeItems: "center", alignItems: "center", justifyContent: "center", margin: 0 }}>{room.roomNo}</Text>
//              </div>
//             </Button>
//             {getButtonText(room.roomNo)} */}
//              <Button
//               style={{
//                 backgroundColor: getButtonColor(room.roomNo),
//                 width: '100px',
//                 height: '40px',
//                 border: selectedButton === room.roomNo ? '2px solid #00000040' : 'none',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//               onClick={() => handleButtonClick(room.roomNo)}
//             >
//               <Text fz="sm" style={{ margin: 0 }}>{room.roomNo}</Text>
//             </Button>
//             <div style={{ textAlign: 'center', marginTop: '5px' }}>{getButtonText(room.roomNo)}</div>
//           </div>
//         ))}
//       </SimpleGrid>

//       <div style={{ padding: "20px" }}>
//         {showPendingCard && selectedRoom && (
//           <div>
//             <PendigCard selectedRoom={selectedRoom} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Departure;
// import React, { useState } from 'react';
// import { SimpleGrid, Button, Text, Modal } from '@mantine/core';
// import Header from './Header';
// import bookingData from './databooking';
// import PendigCard from './Cards/PendigCard';
// import { useNavigate } from 'react-router-dom';

// const Departure = () => {
//   const [selectedButton, setSelectedButton] = useState(null);
//   const [showPendingModal, setShowPendingModal] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const navigate = useNavigate();

//   const handleButtonClick = (roomNo) => {
//     setSelectedButton(roomNo);
//     setSelectedRoom(null);

//     const room = Object.values(bookingData).find((room) => room.roomNo === roomNo);

//     if (room && room.status === 'pending') {
//       setSelectedRoom(room);
//       setShowPendingModal(true);
//     }
//   };
//   const getButtonText = (roomNo) => {
//         const room = Object.values(bookingData).find((room) => room.roomNo === roomNo);
//         if (room) {
//           switch (room.status) {
//             case 'pending':
//               return 'Occupied';
//             case 'completed':
//               return 'Vacant';
//             default:
//               return 'Housekeeping';
//           }
//         }
//         return 'Housekeeping';
//       };
    
//   const getButtonColor = (roomNo) => {
//     const room = Object.values(bookingData).find((room) => room.roomNo === roomNo);
//     if (room) {
//       switch (room.status) {
//         case 'pending':
//           return '#FE0000';
//         case 'completed':
//           return '#03C03C';
//         default:
//           return '#E1C16E';
//       }
//     }
//     return '#E1C16E';
//   };

//   const handleRegisterClick = () => {
//     navigate('/register');
//   };

//   const handleCloseModal = () => {
//     setShowPendingModal(false);
//   };

//   return (
//     <div>
//       <Header />
//       <div style={{ maxWidth: 350, margin: '0 auto', alignItems: "center", padding: "0px", paddingTop: "0px" }}>
//         <h1 style={{ display: "flex", justifyContent: "center", }}>Availability</h1>
//       </div>
//       <SimpleGrid cols={3} style={{ display: 'grid', placeItems: "center", paddingLeft: '20px', paddingRight: "20px" }}>
//         {Object.values(bookingData).map((room) => (
//           <div key={room.roomNo}>
//             <Button
//               style={{
//                 backgroundColor: getButtonColor(room.roomNo),
//                 width: '100px',
//                 height: '40px',
//                 border: selectedButton === room.roomNo ? '2px solid #00000040' : 'none',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//               onClick={() => handleButtonClick(room.roomNo)}
//             >
//               <Text fz="sm" style={{ margin: 0 }}>{room.roomNo}</Text>
//             </Button>
//             <div style={{ textAlign: 'center', marginTop: '5px' }}>{getButtonText(room.roomNo)}</div>
//           </div>
//         ))}
//       </SimpleGrid>

//       <Modal // Modal for displaying pending card
//         opened={showPendingModal}
//         onClose={handleCloseModal}
//         title="Pending Card"
//         style={{display:"flex",justifyContent:"center"}}
//       >
//         {selectedRoom && (
//           <PendigCard selectedRoom={selectedRoom} />
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default Departure;


// import React, { useState } from 'react';
// import { SimpleGrid, Button, Text, Modal } from '@mantine/core';
// import Header from './Header';
// import bookingData from './databooking';
// import PendigCard from './Cards/PendigCard';
// import { useNavigate } from 'react-router-dom';

// const Departure = () => {
//   const [selectedButton, setSelectedButton] = useState(null);
//   const [showPendingModal, setShowPendingModal] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const navigate = useNavigate();

//   const handleButtonClick = (roomNo) => {
//     setSelectedButton(roomNo);
//     setSelectedRoom(null);

//     const room = Object.values(bookingData).find((room) => room.roomNo === roomNo);

//     if (room) {
//       if (room.status === 'pending') {
//         setSelectedRoom(room);
//         setShowPendingModal(true);
//       } else if (room.status === 'completed') {
//         navigate('/register');
//       }
//     }
//   };

//   const getButtonText = (roomNo) => {
//     const room = Object.values(bookingData).find((room) => room.roomNo === roomNo);
//     if (room) {
//       switch (room.status) {
//         case 'pending':
//           return 'Occupied';
//         case 'completed':
//           return 'Vacant';
//         default:
//           return 'Housekeeping';
//       }
//     }
//     return 'Housekeeping';
//   };

//   const getButtonColor = (roomNo) => {
//     const room = Object.values(bookingData).find((room) => room.roomNo === roomNo);
//     if (room) {
//       switch (room.status) {
//         case 'pending':
//           return '#FE0000';
//         case 'completed':
//           return '#03C03C';
//         default:
//           return '#E1C16E';
//       }
//     }
//     return '#E1C16E';
//   };

//   const handleRegisterClick = () => {
//     navigate('/register');
//   };

//   const handleCloseModal = () => {
//     setShowPendingModal(false);
//   };

//   return (
//     <div>
//       <Header />
//       <div style={{ maxWidth: 350, margin: '0 auto', alignItems: "center", padding: "0px", paddingTop: "0px" }}>
//         <h1 style={{ display: "flex", justifyContent: "center", }}>Availability</h1>
//       </div>
//       <SimpleGrid cols={3} style={{ display: 'grid', placeItems: "center", paddingLeft: '20px', paddingRight: "20px" }}>
//         {Object.values(bookingData).map((room) => (
//           <div key={room.roomNo}>
//             <Button
//               style={{
//                 backgroundColor: getButtonColor(room.roomNo),
//                 width: '100px',
//                 height: '40px',
//                 border: selectedButton === room.roomNo ? '2px solid #00000040' : 'none',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//               onClick={() => handleButtonClick(room.roomNo)}
//             >
//               <Text fz="sm" style={{ margin: 0 }}>{room.roomNo}</Text>
//             </Button>
//             <div style={{ textAlign: 'center', marginTop: '5px' }}>{getButtonText(room.roomNo)}</div>
//           </div>
//         ))}
//       </SimpleGrid>

//       <Modal
//   opened={showPendingModal}
//   onClose={handleCloseModal}
//   overlayOpacity={0}
//   styles={{
//     overlay: { backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' },
//     modal: { backgroundColor: 'transparent', border: 'none', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
//   }}
// >
//         {selectedRoom && (
//           <PendigCard selectedRoom={selectedRoom} />
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default Departure;

import React, { useState } from 'react';
import { SimpleGrid, Button, Text, Modal } from '@mantine/core';
import Header from './Header';
import bookingData from './databooking';
import PendigCard from './Cards/PendigCard';
import { useNavigate } from 'react-router-dom';
import UpdateBokkings from './UpdateBookings/UpadatedBookings';
import UpdatedBookings from './UpdateBookings/UpadatedBookings';
import { useRecoilState } from 'recoil';
import { roomAtom } from '../Store/Store';


const Departure = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [showPendingModal, setShowPendingModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigate = useNavigate();

  const [ roomDetails, setRoomDetails] = useRecoilState(roomAtom)
console.log(roomDetails);
 
  const handleButtonClick = (roomNo) => {
    setSelectedButton(roomNo);
    setSelectedRoom(null);

    const room = Object.values(bookingData).find((room) => room.roomNo === roomNo);
   

    if (room) {
setRoomDetails(room)
      if (room.status === 'pending') {
        setSelectedRoom(room);
        setShowPendingModal(true);
      } else if (room.status === 'completed') {
        navigate('/register');
      }
    }
  };

  const getButtonText = (roomNo) => {
    const room = Object.values(bookingData).find((room) => room.roomNo === roomNo);
    if (room) {
      switch (room.status) {
        case 'pending':
          return 'Occupied';
        case 'completed':
          return 'Vacant';
        default:
          return 'Housekeeping';
      }
    }
    return 'Housekeeping';
  };

  const getButtonColor = (roomNo) => {
    const room = Object.values(bookingData).find((room) => room.roomNo === roomNo);
    if (room) {
      switch (room.status) {
        case 'pending':
          return '#FE0000';
        case 'completed':
          return '#03C03C';
        default:
          return '#E1C16E';
      }
    }
    return '#E1C16E';
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleCloseModal = () => {
    setShowPendingModal(false);
  };
  

  return (
    <div>
      <Header />
      <div style={{ maxWidth: 350, margin: '0 auto', alignItems: "center", padding: "0px", paddingTop: "0px" }}>
        <h1 style={{ display: "flex", justifyContent: "center", }}>Availability</h1>
      </div>
      <SimpleGrid cols={3} style={{ display: 'grid', placeItems: "center", paddingLeft: '20px', paddingRight: "20px" }}>
        {Object.values(bookingData).map((room) => (
          <div key={room.roomNo}>
            <Button
              style={{
                backgroundColor: getButtonColor(room.roomNo),
                width: '100px',
                height: '40px',
                border: selectedButton === room.roomNo ? '2px solid #00000040' : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={() => handleButtonClick(room.roomNo)}
            >
              <Text fz="sm" style={{ margin: 0 }}>{room.roomNo}</Text>
            </Button>
            <div style={{ textAlign: 'center', marginTop: '5px' }}>{getButtonText(room.roomNo)}</div>
          </div>
        ))}
      </SimpleGrid>

      {showPendingModal && (
       <Modal
       opened={true}
       onClose={handleCloseModal}
       centered
       xOffset={-10}
       size={350}
     >
      {/* <UpdatedBookings room={'10'}/> */}
          {selectedRoom && (
           
            <PendigCard selectedRoom={selectedRoom} 
            
            
            />
          )}
        </Modal>
      )}
    </div>
  );
};

export default Departure;
