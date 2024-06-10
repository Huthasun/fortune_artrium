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

// import React, { useState, } from 'react';
// import { TextInput, Button, ActionIcon, Group, Card, Text } from '@mantine/core';
// import { useNavigate } from 'react-router-dom';
// import Header from '../Header';
// import { useRecoilValue } from 'recoil';
// import { roomAtom } from '../../Store/Store';
// // import { BiArrowBack } from 'react-icons/bi';
// import { DateInput, DatePickerInput, TimeInput } from '@mantine/dates';

// const SubmitDetails = () => {
//   const navigate = useNavigate();
//   const [roomNumber, setRoomNumber] = useState('');
//   const [bookingType, setBookingType] = useState('');
//   const [error, setError] = useState('');
//   const [formData, setFormData] = useState({
//     checkOutDate: '',
//     checkOutTime: '',
//     checkInDate: '',
//     checkInTime: '',
//     paidamount: '',
//     balanceamount: '', 
//     tarrif: '', // Added tarrif field
//   });

//   const roomDetails = useRecoilValue(roomAtom);

//   const handleInputChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });

//     // If the field is Check-in Date and it has been changed, update Check-in Time with the current time
//     // if (field === 'checkInDate') {
//     //   const currentTime = new Date().toLocaleTimeString('en-IN', {
//     //     hour12: false,
//     //     hour: '2-digit',
//     //     minute: '2-digit',
//     //   });
//     //   setFormData({ ...formData, checkInTime: currentTime });
//     // }
//   };

//   const handleSubmit = () => {
//     for (let i = 0; i < formData.length; i++) {
//       const {checkOutDate,checkOutTime,checkInDate,checkInTime,paidamount,balanceamount,tarrif } = formData[i];
//       if (!checkOutDate || !checkOutTime || !checkInDate || !checkInTime || !paidamount || !balanceamount || !tarrif) {
//         setError(`Please fill out all fields for guest ${i + 1}.`);
//         return;
//       }
//     }
  

//     console.log(formData);
//     // Further processing logic here
//     window.localStorage.clear();
//     navigate('/bookings');
//   };
//   const [value, setValue] = useState()

//   return (
//     <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
//       <Header />
//       <div style={{ padding: "1rem", paddingBottom: 0 }}>
//         <Group>
//           <Text fz={22} fw={600}>Accommidation Details</Text>
//         </Group>
//       </div>
//       <div style={{ padding: "1rem", paddingBottom: 0 }}>
//         <Text fz={18} fw={600}>Room.No-{window.localStorage.getItem('roomNo')}</Text>
//         {error && <Text color="red" pb={15}>{error}</Text>}
//       </div>
//       <form>
//       <div style={{ maxWidth: '500px', margin: '8px auto', padding: '17px' }}>
//         <div style={{ display: 'flex', flexDirection: 'row', }}>
//           <DatePickerInput
//             label="Check-in Date"
//             placeholder="YYYY-MM-DD"
//             value={value}
//             onChange={(date) => handleInputChange('checkInDate', date)}
//             style={{ width: '55%' }}
//             required
//             // mx="auto"
//             // maw={600}
//           />
//           <TimeInput
//             label="Check-in Time"
//             // placeholder="HH:MM"
//             // type="number" 
//             // pattern="\d{2}:\d{2}"
//             value={formData.checkInTime}
//             onChange={(value) => handleInputChange('checkInTime', value)}
//             required
//             style={{ marginLeft: "4px",width:"55%", }}
                    
             
//               // placeholder="HH:MM"
//               withAsterisk
//           />
//         </div>
//         <div style={{ display: 'flex', flexDirection: 'row', marginTop: "10px" }}>
//            <DatePickerInput
//             label="Check-out Date"
//             placeholder="YYYY-MM-DD"
//             value={value}
//             onChange={(date) => handleInputChange('checkOutDate', date)}
//             style={{ width: '55%' }}
//             required
//             // mx="auto"
//             // maw={600}
//           />
//           {/* <TextInput
//             label="Check-out Time"
//             placeholder="HH:MM"
//             pattern="\d{2}:\d{2}"
            
//             onChange={(event) => handleInputChange('checkOutTime', event.target.value)}
//             required
//             style={{ marginLeft: "4px", marginBottom: 15,width:"55%" }}
//           /> */}
//            <TimeInput
//             label="Check-out Time"
//             // placeholder="HH:MM"
//             // type="number" 
//             // pattern="\d{2}:\d{2}"
//             value={formData.checkOutTime}
//             onChange={(value) => handleInputChange('checkInTime', value)}
//             required
//             style={{ marginLeft: "4px",width:"55%",marginBottom: 15 }}
                    
             
//               // placeholder="HH:MM"
//               withAsterisk
//           />

//         </div>
//         <TextInput
//           label="Tarrif"
//           type='number'
//           placeholder="Amount"
//           value={formData.tarrif}
//           onChange={(event) => handleInputChange('tarrif', event.target.value)}
//           required
//           style={{ marginBottom: 15 }}
//         />
//         <TextInput
//           label="Paid Amount"
//           type='number'
//           placeholder="Amount"
//           value={formData.paidamount}
//           onChange={(event) => handleInputChange('paidamount', event.target.value)}
//           required
//           style={{ marginBottom: 15 }}
//         />
//         <TextInput
//           label="Balance Amount"
//           type='number'
//           placeholder="Amount"
//           value={formData.balanceamount}
//           onChange={(event) => handleInputChange('balanceamount', event.target.value)}
//           required
//           style={{ marginBottom: 15 }}
//         />
        
//         <Button onClick={handleSubmit} style={{ marginTop: '13px', width: "35%", backgroundColor: "#FE0000" }}>Submit</Button>
//       </div>
//       </form>
//     </div>
    
//   )
// }

// export default SubmitDetails;

import React from 'react';
import { TextInput, Button, Group, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import { useRecoilValue } from 'recoil';
import { roomAtom } from '../../Store/Store';
import { DatePickerInput, TimeInput } from '@mantine/dates';
import { useForm } from '@mantine/form';

const SubmitDetails = () => {
  const navigate = useNavigate();
  const roomDetails = useRecoilValue(roomAtom);

  const form = useForm({
    initialValues: {
      checkOutDate: '',
      checkOutTime: '',
      checkInDate: '',
      checkInTime: '',
      paidamount: '',
      balanceamount: '', 
      tarrif: '',
    },

    validate: {
      checkOutDate: (value) => (value ? null : 'Check-out Date is required'),
      checkOutTime: (value) => (value ? null : 'Check-out Time is required'),
      checkInDate: (value) => (value ? null : 'Check-in Date is required'),
      checkInTime: (value) => (value ? null : 'Check-in Time is required'),
      paidamount: (value) => (value ? null : 'Paid Amount is required'),
      balanceamount: (value) => (value ? null : 'Balance Amount is required'),
      tarrif: (value) => (value ? null : 'Tarrif is required'),
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
    // Further processing logic here
    window.localStorage.clear();
    navigate('/bookings');
  };

  return (
    <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
      <Header />
      <div style={{ padding: '1rem', paddingBottom: 0 }}>
        <Group>
          <Text fz={22} fw={600}>Accommodation Details</Text>
        </Group>
      </div>
      <div style={{ padding: '1rem', paddingBottom: 0 }}>
        <Text fz={18} fw={600}>Room.No-{window.localStorage.getItem('roomNo')}</Text>
      </div>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div style={{ maxWidth: '500px', margin: '8px auto', padding: '17px' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <DatePickerInput
              label="Check-in Date"
              placeholder="YYYY-MM-DD"
              {...form.getInputProps('checkInDate')}
              style={{ width: '55%' }}
              required
            />
            <TimeInput
              label="Check-in Time"
              {...form.getInputProps('checkInTime')}
              required
              style={{ marginLeft: '4px', width: '55%' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
            <DatePickerInput
              label="Check-out Date"
              placeholder="YYYY-MM-DD"
              {...form.getInputProps('checkOutDate')}
              style={{ width: '55%' }}
              required
            />
            <TimeInput
              label="Check-out Time"
              {...form.getInputProps('checkOutTime')}
              required
              style={{ marginLeft: '4px', width: '55%', marginBottom: 15 }}
            />
          </div>
          <TextInput
            label="Tarrif"
            type="number"
            placeholder="Amount"
            {...form.getInputProps('tarrif')}
            required
            style={{ marginBottom: 15 }}
          />
          <TextInput
            label="Paid Amount"
            type="number"
            placeholder="Amount"
            {...form.getInputProps('paidamount')}
            required
            style={{ marginBottom: 15 }}
          />
          <TextInput
            label="Balance Amount"
            type="number"
            placeholder="Amount"
            {...form.getInputProps('balanceamount')}
            required
            style={{ marginBottom: 15 }}
          />
          <Button type="submit" style={{ marginTop: '13px', width: '35%', backgroundColor: '#FE0000' }}>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default SubmitDetails;
