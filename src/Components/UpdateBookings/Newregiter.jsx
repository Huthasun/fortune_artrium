// import React, { useState } from 'react';
// import { TextInput, NumberInput, Select, Button } from '@mantine/core';
// import { useNavigate } from 'react-router-dom';
// import Header from '../Header';

// const Newregiter = () => {
//     const [bookingType, setBookingType] = useState('');
//     const [roomNumber, setRoomNumber] = useState('');
//     const [numGuests, setNumGuests] = useState(1);
//     const [numAdults, setNumAdults] = useState(1);
//     const [numKids, setNumKids] = useState(0);

//     const navigate = useNavigate();
  
//     const handleSubmit = () => {
//       // Perform validation here if needed
//       console.log({
//         bookingType,
//         roomNumber,
//         numGuests,
//         numAdults,
//         numKids
//       });
//       navigate('/guestdetails');
//     };
//   return (
//     <div style={{ maxWidth: '100%',  boxSizing: 'border-box' }}>
        
//             <Header/>
//         <div style={{ maxWidth: '500px', margin: '21px auto',padding: '19px' }}>
//        <form>
//       {/* <h2>Room Booking</h2> */}
//       <Select
//         label="Booking Type"
//         data={['Single', 'Double', 'Suite']}
//         value={bookingType}
//         onChange={setBookingType}
//         placeholder="Select booking type"
//         required
//       />
//       <TextInput
//         label="Room Number"
//         value={roomNumber}
//         onChange={event => setRoomNumber(event.currentTarget.value)}
//         placeholder="Enter room number"
//         required
//       />
//       <TextInput
//         label="Number of Guests"
//         value={numGuests}
//         onChange={event => setNumGuests(event.currentTarget.value)}
//         placeholder="Enter number of guests"
//         required
//       />
//       <TextInput
//         label="Number of Adults"
//         value={numAdults}
//         onChange={setNumAdults}
//         min={1}
//         placeholder="Enter number of adults"
//         required
//       />
//       <TextInput
//         label="Number of Kids"
//         value={numKids}
//         onChange={setNumKids}
//         min={0}
//         placeholder="Enter number of kids"
//         required
//       />
//       <Button onClick={handleSubmit} style={{ marginTop: '20px',width:"35%" }}>Next</Button>
//     </form>
//     </div>
//     </div>
//   )
// }

// export default Newregiter

import React, { useState } from 'react';
import { TextInput, Select, Button, ActionIcon, Text, Card, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import { useRecoilValue } from 'recoil';
import { roomAtom } from '../../Store/Store';
import { BiArrowBack } from 'react-icons/bi';


const Newregiter = () => {
  const [bookingType, setBookingType] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [numGuests, setNumGuests] = useState(1);
  const [numAdults, setNumAdults] = useState(1);
  const [numKids, setNumKids] = useState(0);

  const navigate = useNavigate();
  const roomDetails = useRecoilValue(roomAtom)
       const [selectedOption, setSelectedOption] = useState('Booking');
  console.log(roomDetails);
  const handleInputChange = (field, value) => {
    // setFormData({ ...formData, [field]: value });
  };



 
  const handleSubmit = () => {
    // Perform validation here if needed
    console.log({
      bookingType,
      roomNumber,
      numGuests,
      numAdults,
      numKids
    });
    navigate('/guestdetails', { state: { numGuests } }); // Pass numGuests as state
  };

  return (
    <div style={{ maxWidth: '100%', boxSizing: 'border-box', boxShadow:"" }}>
      <Header />

      <div style={{padding:"1rem",paddingBottom:0}}>
        <Group>
      {/* <ActionIcon size={"sm"} onClick={()=>navigate(-1)}><BiArrowBack/></ActionIcon> */}
      <Text fz={22} fw={600}>Registration</Text>
      </Group>
      </div>
     
      <div  style={{ maxWidth: '500px',padding: '1rem'}}>
      
        <form>
        <Text fz={18} fw={600}pb={15}>Room.No-{roomDetails.roomNo}</Text>
          <Select
            label="Booking Type"
            data={['Single', 'Double', 'Suite']}
            value={bookingType}
            onChange={setBookingType}
            placeholder="Select booking type"
            required
            style={{marginBottom:15}}
          />
          {/* <TextInput
            label="Room Number"
            value={roomNumber}
            onChange={event => setRoomNumber(event.currentTarget.value)}
            placeholder="Enter room number"
            required
          /> */}
          <TextInput
            label="Number of Guests"
            value={numGuests}
            onChange={event => setNumGuests(event.currentTarget.value)}
            placeholder="Enter number of guests"
            required
            style={{marginBottom:15}}
          />
          <TextInput
            label="Number of Adults"
            value={numAdults}
            onChange={event => setNumAdults(event.currentTarget.value)}
            placeholder="Enter number of adults"
            required
            style={{marginBottom:15}}
          />
          <TextInput
            label="Number of Kids"
            value={numKids}
            onChange={event => setNumKids(event.currentTarget.value)}
            placeholder="Enter number of kids"
            required
            style={{marginBottom:15}}
          />
          <Button onClick={handleSubmit} style={{ marginTop: '17px', width: "35%" ,backgroundColor:"#FE0000"}}>Next</Button>
        </form>
      </div>
    </div>
  );
};

export default Newregiter;