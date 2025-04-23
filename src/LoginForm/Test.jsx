// import React, { useState } from 'react';
// import {  TextInput,  yupResolver } from '@mantine/form';
// import * as yup from 'yup';

// const schema = yup.object({
//   guestName: yup.string().required('Guest name is required'),
//   gender: yup.string().required('Gender is required'),
//   phoneNumber: yup.string().required('Phone number is required'),
//   guestIdProof: yup.string().required('Guest ID Proof is required'),
//   guestIdNumber: yup.string().when('guestIdProof', {
//     is: (guestIdProof) => guestIdProof, // Check if guestIdProof has a value
//     then: (schema) => {
//       if (schema === 'addhar_id') {
//         return schema.matches(/^\d{12}$/, 'Addhar ID must be exactly 12 digits');
//       } else if (schema === 'driving_license') {
//         return schema.matches(/^\w{16}$/, 'Driver\'s License must be exactly 16 alphanumeric characters');
//       } else if (schema === 'passport') {
//         return schema.matches(/^\w{8}$/, 'Passport must be exactly 8 alphanumeric characters');
//       } else {
//         return schema; // No validation for other ID types
//       }
//     },
//   }),
//   address: yup.string().required('Address is required'),
// });

// const Test = () => {
//   const [form, setForm] = useState({ values: {}, errors: {} });

//   const handleSubmit = (values) => {
//     console.log('Submitted form data:', values);
//     // Handle form submission logic here (e.g., send data to server)
//   };

//   return (
//     <form schema={schema} onSubmit={handleSubmit} onError={(errors) => setForm({ ...form, errors })}>
//       <TextInput label="Guest Name" placeholder="Enter your name" {...form} />
//       <>
//         <Radio label="Male" value="male" {...form} />
//         <Radio label="Female" value="female" {...form} />
//       </>
//       <TextInput label="Phone Number" placeholder="Enter phone number" {...form} />
//       <FormSelect
//         label="Guest ID Proof"
//         placeholder="Select ID proof"
//         data={[
//           { value: 'addhar_id', label: 'Addhar ID' },
//           { value: 'driving_license', label: 'Driving License' },
//           { value: 'passport', label: 'Passport' },
//         ]}
//         {...form}
//       />
//       <TextInput label="Guest ID Number" placeholder="Enter ID number" {...form} />
//       <Textarea label="Address" placeholder="Enter your address" {...form} />
//       <Button type="submit">Submit</Button>
//     </form>
//   );
// };

// export default Test;
// import React, { useState, useEffect } from 'react';
// import { SimpleGrid, Button, Text, Modal } from '@mantine/core';
// import Header from './Header'; // Assuming Header component exists
// import bookingData from './databooking'; // Assuming bookingData is an object
// import PendigCard from './Cards/PendigCard'; // Assuming PendigCard component exists
// import { useNavigate } from 'react-router-dom';
// import Footer1 from './Footer1'; // Assuming Footer1 component exists
// import { useRecoilState } from 'recoil';
// import { roomAtom } from '../Store/Store';
// import client from '../API/api';
// import axios from 'axios';
// import Housekeeping from './HouseKeeping/HouseKepping';

// const Departure = () => {
//   const [selectedButton, setSelectedButton] = useState(null);
//   const [showPendingModal, setShowPendingModal] = useState(false);
//   const [showHousekeepingModal, setShowHousekeepingModal] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState(null);
//   const navigate = useNavigate();
//   const [roomDetails, setRoomDetails] = useRecoilState(roomAtom);
//   const [rooms, setRooms] = useState([]); // Use state for fetched rooms
//   const [roomPrice, setRoomPrice] = useState(null); // State to hold room price
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 60000); // Update current time every minute

//     return () => clearInterval(interval);
//   }, []);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const hotelId = localStorage.getItem('hotelId'); // Get hotelId from localStorage
//         if (hotelId) {
//           const response = await client.get(/api/room-status?hotelId=${hotelId});

//           // Filter rooms by hotelId
//           const filteredRooms = response.data.data.filter(room => room.hotelId === parseInt(hotelId));
//           setRooms(filteredRooms); // Set fetched rooms for the specific hotel
//         } else {
//           console.warn('Hotel ID not found in localStorage');
//         }
//       } catch (error) {
//         console.error('Error fetching room status:', error);
//       }
//     };
//     fetchData();
//   }, []);
//   // Fetch room status from API
//   //   useEffect(() => {
//   //     const fetchData = async () => {
//   //       try {
//   //         const response = await client.get('/api/room-status');
//   //         setRooms(response.data.data); // Set fetched rooms
//   //       } catch (error) {
//   //         console.error('Error fetching room status:', error);
//   //       }
//   //     };
//   //     fetchData();
//   //   }, []); // Fetch on component mount
//   // // Retrieve roomNo from local storage on mount
//   useEffect(() => {
//     const storedRoomNo = localStorage.getItem('roomNo');
//     if (storedRoomNo) {
//       const room = rooms.find((room) => room.roomNo === storedRoomNo);
//       if (room) {
//         setRoomDetails(room);
//         setSelectedButton(storedRoomNo);
//       }
//     }
//   }, [rooms]); // Update on rooms change

//   // Fetch room price by room ID
//   const fetchRoomPrice = async (roomNo) => {
//     try {
//       const response = await client.get(/rooms/${roomNo}/price); // Fetch room price
//       return response.data.price; // Return the room price
//     } catch (error) {
//       console.error('Error fetching room price:', error);
//       return null;
//     }
//   };


//   const refreshRoomStatus = async () => {
//     try {
//       const response = await client.get('/api/room-status');
//       setRooms(response.data.data); // Refresh the room status data
//     } catch (error) {
//       console.error('Error refreshing room status:', error);
//     }
//   };

//   const handleButtonClick = async (roomNo) => {
//     setSelectedButton(roomNo);
//     localStorage.setItem('roomNo', roomNo);

//     const room = rooms.find((room) => room.roomNo === roomNo);
//     if (room) {
//       setRoomDetails(room);
//       if (room.roomStatus === 'occupied') {
//         setSelectedRoom(room);
//         setShowPendingModal(true); // Open modal for occupied rooms
//       } else if (room.roomStatus === 'vacant') {
//         const price = await fetchRoomPrice(roomNo); // Fetch price for the vacant room
//         if (price !== null) {
//           localStorage.setItem('roomPrice', price); // Save price to local storage
//         }
//         navigate('/app/register', {
//           state: {
//             roomDetails, // Pass room details for the Register component
//             roomPrice, // Pass room price for the Register component (optional)
//           },
//         });
//       } else if (room.roomStatus === 'housekeeping') {
//         setSelectedRoom(room);
//         setShowHousekeepingModal(true);
//       }
//     }
//   };

//   const getButtonText = (room) => {
//     switch (room.roomStatus) {
//       case 'occupied':
//         return 'Occupied';
//       case 'vacant':
//         return 'Vacant';
//       default:
//         return 'Housekeeping';
//     }
//   };

//   const getButtonColor = (room) => {
//     switch (room.roomStatus) {
//       case 'vacant':
//         return '#03C03C'; // Green for vacant
//       case 'occupied':
//         return '#FE0000'; // Red for occupied
//       default:
//         return '#E1C16E';
//     }
//   };

//   const handleCloseModal = () => {
//     setShowPendingModal(false);
//   };

//   const handleCloseHousekeepingModal = () => {
//     setShowHousekeepingModal(false);
//   };

//   useEffect(() => {
//     const greenRooms = rooms.filter((room) => {
//       const checkOutDateTime = new Date(room.checkOutDateTime);
//       const twoHoursBeforeCheckOut = new Date(checkOutDateTime.getTime() - 2 * 60 * 60 * 1000);
//       return room.roomStatus === "occupied" && currentTime < twoHoursBeforeCheckOut;
//     });

//     localStorage.setItem("greenRooms", JSON.stringify(greenRooms));
//   }, [rooms, currentTime]); 

  
//   return (
//     <div>
//       <Header />
//       <div style={{ padding: "0px", paddingTop: "0px" }}>
//         <h1 style={{ display: "grid", placeItems: "center" }}>Availability</h1>
//       </div>

//       <SimpleGrid cols={3} style={{ display: 'grid', placeItems: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
//         {rooms.map((room) => {
//           const checkOutDateTime = new Date(room.checkOutDateTime);
//           const twoHoursBeforeCheckOut = new Date(checkOutDateTime.getTime() - 2 * 60 * 60 * 1000);
//           const isGreenBorder = room.roomStatus === 'occupied' && currentTime < twoHoursBeforeCheckOut;

//           return (
//             <div key={room.roomNo}>
//               <Button
//                 style={{
//                   backgroundColor: getButtonColor(room),
//                   width: '100%',
//                   height: 'auto',
//                   minWidth: '100px',
//                   minHeight: '45px',
//                   border: isGreenBorder ? '3px solid #03C03C' : selectedButton === room.roomNo ? '2px solid gray' : 'none',
//                   boxShadow: isGreenBorder ? '0px 0px 10px 2px #03C03C' : 'none',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   transition: 'border 0.3s ease-in-out',
//                 }}
//                 onClick={() => handleButtonClick(room.roomNo)}
//               >
//                 <Text fz="sm" style={{ margin: 0, fontSize: '1.5rem' }}>{room.roomNo}</Text>
//               </Button>
//               <div style={{ textAlign: 'center', marginTop: '5px' }}>{getButtonText(room)}</div>
//             </div>
//           );
//         })}
//       </SimpleGrid>
      

//       {showPendingModal && (
//         <Modal opened={true} onClose={handleCloseModal} centered xOffset={-10} size={350}>
//           {selectedRoom && (
//             <PendigCard
//               selectedRoom={selectedRoom}
//               onClose={handleCloseModal}
//               refreshRoomStatus={refreshRoomStatus}
//             />
//           )}
//         </Modal>
//       )}

//       {showHousekeepingModal && (
//         <Housekeeping
//           selectedRoom={selectedRoom}
//           onClose={handleCloseHousekeepingModal}
//           refreshRoomStatus={refreshRoomStatus}
//         />
//       )}
//     </div>

//   );
// };

// export default Departure;