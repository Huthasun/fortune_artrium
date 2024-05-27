// import React, { useState } from 'react';
// import { TextInput,  Button, ActionIcon, Group, Card, Text } from '@mantine/core';
// import { useNavigate } from 'react-router-dom';
// import Header from '../Header';
// import { useRecoilValue } from 'recoil';
// import { roomAtom } from '../../Store/Store';
// import { BiArrowBack } from 'react-icons/bi';
// import { DateInput } from '@mantine/dates';

// const SubmitDetails = () => {
//     const navigate = useNavigate();
//     const [roomNumber, setRoomNumber] = useState('');
//     const [bookingType, setBookingType] = useState('');
    
//         const [formData, setFormData] = useState({
//             checkOutDate: '',
//             checkOutTime: '',
//             checkInDate: '',
//             checkInTime: '',
//             paidamount:'',
//             balanceamount:'',
//         })
//         // const handleInputChange = (field, value) => {
//         //   setFormData({ ...formData, [field]: value });
//         // };
//         const roomDetails = useRecoilValue(roomAtom)
//        const [selectedOption, setSelectedOption] = useState('Booking');
//   console.log(roomDetails);
//   const handleInputChange = (field, value) => {
//     // setFormData({ ...formData, [field]: value });
//   };
      
//         const handleSubmit = () => {
//           console.log(formData);
//           // Further processing logic here
//           navigate('/bookings');
//         };
//   return (
//     <div style={{ maxWidth: '100%',  boxSizing: 'border-box' }}>
//       <Header/>
//       <div style={{padding:"1rem",paddingBottom:0}}>
//         <Group>
//       {/* <ActionIcon size={"sm"} onClick={()=>navigate(-1)}><BiArrowBack/></ActionIcon> */}
//       <Text fz={22} fw={600}>Submitdetails</Text>
//       </Group>
//       </div>
//       <div style={{padding:"1rem",paddingBottom:0}}>
//       <Text fz={18} fw={700}>Room.No-{roomDetails.roomNo}</Text>
//       </div>
//         <div style={{ maxWidth: '500px', margin: '8px auto',padding: '17px' }}>
        
//         <div style={{ display: 'flex', flexDirection: 'row', }}>
//           {/* <TextInput
//             label="Check-in Date"
//             placeholder="YYYY-MM-DD"
//             pattern="\d{4}-\d{2}-\d{2}"
//             value={formData.checkInDate}
//             onChange={(event) => handleInputChange('checkInDate', event.target.value)}
            
//             required
//           /> */}
//           <DateInput
//       valueFormat="YYYY MMM DD"
//       label="Check-in Date"
//       placeholder="Date input"
//       maw={400}
//       mx="auto"
//     />
//           <TextInput
//             label="Check-in Time"
//             placeholder="HH:MM"
//             pattern="\d{2}:\d{2}"
//             value={formData.checkInTime}
//             onChange={(event) => handleInputChange('checkInTime', event.target.value)}
//             required
//             style={{marginLeft:"4px"}}
//           />
//         </div>
//         <div style={{ display: 'flex', flexDirection: 'row',marginTop:"10px"}}>
//           {/* <TextInput
//             label="Check-out Date"
//             placeholder="YYYY-MM-DD"
//             pattern="\d{4}-\d{2}-\d{2}"
//             value={formData.checkOutDate}
//             onChange={(event) => handleInputChange('checkOutDate', event.target.value)}
//             required
//             style={{ marginBottom: 15 }}
//           /> */}
//            <DateInput
//       valueFormat="YYYY MMM DD"
//       label="Check-out Date"
//       placeholder="Date input"
//       maw={400}
//       mx="auto"
//     />
//           <TextInput
//             label="Check-out Time"
//             placeholder="HH:MM"
//             pattern="\d{2}:\d{2}"
//             value={formData.checkOutTime}
//             onChange={(event) => handleInputChange('checkOutTime', event.target.value)}
//             required
//             style={{marginLeft:"4px",marginBottom: 15 }}
            
//           />
//         </div>
//         <TextInput
//           label="Tarrif"
//           type='number'
//           placeholder="Amount"
//           value={formData.amount}
//           onChange={(event) => handleInputChange('amount', event.target.value)}
//           required
//           style={{ marginBottom: 15 }}
//         />
//         <TextInput
//           label="Paid Amount"
//           type='number'
//           placeholder="Amount"
//           value={formData.amount}
//           onChange={(event) => handleInputChange('amount', event.target.value)}
//           required
//           style={{ marginBottom: 15 }}
//         />
//         <TextInput
//           label="Balance Amount"
//           type='number'
//           placeholder="Amount"
//           value={formData.amount}
//           onChange={(event) => handleInputChange('amount', event.target.value)}
//           required
//           style={{ marginBottom: 15 }}
//         />
//         <Button onClick={handleSubmit} style={{ marginTop: '13px',width:"35%",backgroundColor:"#FE0000" }}>Submit</Button>
//     </div>
//     </div>
//   )
// }

// export default SubmitDetails

import React, { useState } from 'react';
import { TextInput, Button, ActionIcon, Group, Card, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import { useRecoilValue } from 'recoil';
import { roomAtom } from '../../Store/Store';
import { BiArrowBack } from 'react-icons/bi';
import { DateInput } from '@mantine/dates';

const SubmitDetails = () => {
  const navigate = useNavigate();
  const [roomNumber, setRoomNumber] = useState('');
  const [bookingType, setBookingType] = useState('');

  const [formData, setFormData] = useState({
    checkOutDate: '',
    checkOutTime: '',
    checkInDate: '',
    checkInTime: '',
    paidamount: '',
    balanceamount: '',
    tarrif: '', // Added tarrif field
  });

  const roomDetails = useRecoilValue(roomAtom);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });

    // If the field is Check-in Date and it has been changed, update Check-in Time with the current time
    if (field === 'checkInDate') {
      const currentTime = new Date().toLocaleTimeString('en-IN', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      });
      setFormData({ ...formData, checkInTime: currentTime });
    }
  };

  const handleSubmit = () => {
    console.log(formData);
    // Further processing logic here
    navigate('/bookings');
  };

  return (
    <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
      <Header />
      <div style={{ padding: "1rem", paddingBottom: 0 }}>
        <Group>
          <Text fz={22} fw={600}>Submitdetails</Text>
        </Group>
      </div>
      <div style={{ padding: "1rem", paddingBottom: 0 }}>
        <Text fz={18} fw={700}>Room.No-{roomDetails.roomNo}</Text>
      </div>
      <div style={{ maxWidth: '500px', margin: '8px auto', padding: '17px' }}>

        <div style={{ display: 'flex', flexDirection: 'row', }}>
          <DateInput
            valueFormat="YYYY MMM DD"
            label="Check-in Date"
            placeholder="Date input"
            maw={400}
            mx="auto"
            onChange={(date) => handleInputChange('checkInDate', date)}
          />
          <TextInput
            label="Check-in Time"
            placeholder="HH:MM"
            pattern="\d{2}:\d{2}"
            value={formData.checkInTime}
            onChange={(event) => handleInputChange('checkInTime', event.target.value)}
            required
            style={{ marginLeft: "4px" }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: "10px" }}>
          <DateInput
            valueFormat="YYYY MMM DD"
            label="Check-out Date"
            placeholder="Date input"
            maw={400}
            mx="auto"
            onChange={(date) => handleInputChange('checkOutDate', date)}
          />
          <TextInput
            label="Check-out Time"
            placeholder="HH:MM"
            pattern="\d{2}:\d{2}"
            value={formData.checkOutTime}
            onChange={(event) => handleInputChange('checkOutTime', event.target.value)}
            required
            style={{ marginLeft: "4px", marginBottom: 15 }}
          />
        </div>
        <TextInput
          label="Tarrif"
          type='number'
          placeholder="Amount"
          value={formData.tarrif}
          onChange={(event) => handleInputChange('tarrif', event.target.value)}
          required
          style={{ marginBottom: 15 }}
        />
        <TextInput
          label="Paid Amount"
          type='number'
          placeholder="Amount"
          value={formData.paidamount}
          onChange={(event) => handleInputChange('paidamount', event.target.value)}
          required
          style={{ marginBottom: 15 }}
        />
        <TextInput
          label="Balance Amount"
          type='number'
          placeholder="Amount"
          value={formData.balanceamount}
          onChange={(event) => handleInputChange('balanceamount', event.target.value)}
          required
          style={{ marginBottom: 15 }}
        />
        <Button onClick={handleSubmit} style={{ marginTop: '13px', width: "35%", backgroundColor: "#FE0000" }}>Submit</Button>
      </div>
    </div>
  )
}

export default SubmitDetails;
