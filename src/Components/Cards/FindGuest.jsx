// import React, { useState } from 'react';
// import { Card, Text, Button, SimpleGrid, Modal, Space, TextInput } from '@mantine/core';
// import { IoMdSearch } from 'react-icons/io';
// import client from '../../API/api';

// const FindGuest = ({ onClose }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [guestDetails, setGuestDetails] = useState(null);
//   const [bookingDetails, setBookingDetails] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [modalOpened, setModalOpened] = useState(true); // Open modal by default

//   const handleSearch = async () => {
//     if (!searchQuery) return; // If input is empty, do nothing
//     setIsLoading(true);

//     let searchParams = {};

//     // Determine the search parameter based on input
//     if (/^\d{10}$/.test(searchQuery)) {
//       searchParams.phoneNumber = searchQuery; // If it's a 10-digit number, assume phone number
//     } else if (/^\d+$/.test(searchQuery)) {
//       searchParams.guestIdNumber = searchQuery; // If it's all digits, assume guest ID number
//     } else {
//       searchParams.name = searchQuery; // Otherwise, assume name
//     }

//     try {
//       const response = await client.get('/bookings/latest-booking-details', { params: searchParams });

//       if (response.status === 200) {
//         setGuestDetails(response.data.primaryGuestDetails);
//         setBookingDetails(response.data.bookingDetails);
//       } else {
//         setGuestDetails(null);
//         setBookingDetails(null);
//       }
//     } catch (error) {
//       console.error('No bookings found with the given criteria.', error);
//       setGuestDetails(null);
//       setBookingDetails(null);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const closeModal = () => {
//     setModalOpened(false);
//     onClose(); // Trigger the onClose prop to inform parent component
//   };

//   return (
//     // <>
//     <div>
//       <div>
     
//       <Modal
//           opened={true}
//           onClose={onClose}
//           centered
//           xOffset={-10}
//           size={350}
         
//         >
//            <TextInput
//             placeholder="Enter Phone Number, Guest ID, or Name"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             rightSection={
//               <Button onClick={handleSearch} disabled={isLoading}  radius={'xl'} style={{backgroundColor:"red"}}>
//                 <IoMdSearch size={20} />
//               </Button>
//             }
//             radius={'lg'}
//           />
          
//         <Card
//         //  shadow="sm"
//         //  style={{
//         //    maxWidth: '100%',
//         //    margin: 'auto',
//         //    padding: '10px',
//         //    display: 'grid',
//         //    borderRadius: '8px',
//         //  }}
//         >
//           <div style={{}}>
         
//           </div>
          
//           {/* <Space h="sm" /> */}
          
//           {guestDetails && bookingDetails ? (
//             <SimpleGrid cols={2} spacing="lg">
//               <div>
//                 <Text weight={500}>Name:</Text>
//                 <Text weight={500} style={{marginTop:"2px"}}>Phone Number:</Text>
//                 <Text weight={500} style={{marginTop:"2px"}}>Guest ID Number:</Text>
//                 <Text weight={500} style={{marginTop:"2px"}}>Gender:</Text>
//                 <Text weight={500} style={{marginTop:"2px"}}>Address:</Text>
//                 <Text weight={500} style={{marginTop:"2px"}}>No of Days:</Text>
//                 <Text weight={500} style={{marginTop:"2px"}}>Total Payment:</Text>
//               </div>
//               <div>
//                 <Text>{guestDetails.name || 'N/A'}</Text>
//                 <Text style={{marginTop:"2px"}}>{guestDetails.phoneNumber || 'N/A'}</Text>
//                 <Text style={{marginTop:"2px"}}>{guestDetails.guestIdNumber || 'N/A'}</Text>
//                 <Text style={{marginTop:"2px"}}>{guestDetails.gender || 'N/A'}</Text>
//                 <Text style={{marginTop:"2px"}}>{guestDetails.address || 'N/A'}</Text>
//                 <Text style={{marginTop:"2px"}}>{bookingDetails.noOfDays || 'N/A'}</Text>
//                 <Text style={{marginTop:"2px"}}>{bookingDetails.totalPayment || 'N/A'}</Text>
//               </div>
//             </SimpleGrid>
//           ) : (
//             <Text>No booking found with the provided information.</Text>
//           )}
          
//           {/* <Space h="lg" /> */}
        
//         </Card>
//         <div style={{display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
//           <Button  size='xs'onClick={closeModal} style={{backgroundColor:"red",padding:"0 25px"}} >Close</Button>
//           <Button size='xs' style={{backgroundColor:"red"}}>Fill form</Button>
//           </div>
//       </Modal>
     
//       </div>
     
//     {/* </> */}
//     </div>
//   );
// };

// export default FindGuest;
import { useState } from "react";
import axios from "axios";
import "../Cards/Findguest.css";
import client from "../../API/api";

export default function BookingHistory() {
  const [phone, setPhone] = useState("");
  const [records, setRecords] = useState([]);
  const [guest, setGuest] = useState(null);

  const handleSearch = async () => {
    if (!phone) {
      alert("Please enter phone number");
      return;
    }

    try {
      const res = await client.get(`/bookings/booking-history?phoneNumber=${phone}`);
      setRecords(res.data.bookingHistory);
      setGuest(res.data.guestDetails);
    } catch (err) {
      console.log(err);
      setRecords([]);
      setGuest(null);
      alert("No records found");
    }
  };

  return (
    <div className="history-container">
      <h2>Guest Booking History</h2>

      {/* Search Section */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Guest Info */}
      {guest && (
        <div className="guest-info">
          <p><strong>Name:</strong> {guest.name}</p>
          <p><strong>Phone:</strong> {guest.phoneNumber}</p>
          <p><strong>ID Number:</strong> {guest.guestIdNumber}</p>
        </div>
      )}

      {/* Table Section */}
      {records.length > 0 && (
        <table className="history-table">
          <thead>
            <tr>
              <th>Room No</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Duration</th>
              <th>Total Amount</th>
              <th>Staff Name</th>
            </tr>
          </thead>

          <tbody>
            {records.map((rec, i) => (
              <tr key={i}>
                {/* Room No */}
                <td>{rec.roomNo || "-"}</td>

                {/* Check-In */}
                <td>
                  {rec.checkInDateTime
                    ? new Date(rec.checkInDateTime).toLocaleString()
                    : "-"}
                </td>

                {/* Check-Out */}
                <td>
                  {rec.checkOutDateTime
                    ? new Date(rec.checkOutDateTime).toLocaleString()
                    : "-"}
                </td>

                {/* Duration */}
                <td>{rec.numOfDays || "-"}</td>

                {/* Total Amount */}
                <td>₹ {rec.pmytotalAmount || 0}</td>

                {/* Staff Name */}
                <td>{rec.username || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {records.length === 0 && guest && (
        <p className="no-data">No previous bookings found.</p>
      )}
    </div>
  );
}
