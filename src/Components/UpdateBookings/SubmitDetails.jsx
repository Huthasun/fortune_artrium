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
// import React, { useState } from 'react';
// import { TextInput, Button, Group, Text } from '@mantine/core';
// import { useNavigate } from 'react-router-dom';
// import Header from '../Header';
// import { useRecoilValue } from 'recoil';
// import { roomAtom } from '../../Store/Store';
// import { DatePickerInput, TimeInput } from '@mantine/dates';
// import { useForm } from '@mantine/form';

// const SubmitDetails = () => {
//   const navigate = useNavigate();
//   const roomDetails = useRecoilValue(roomAtom);
//   const [formData, setFormData] = useForm({
//     initialValues:{
//       checkInDate: '',
//     checkInTime: '',
//     checkOutDate: '',
//     checkOutTime: '',
//     tarrif: '',
//     paidamount: '',
//     balanceamount: '',
//     },
//     validate:{
      
//     }
//   });

//   const [errors, setErrors] = useState({});

//   const handleInputChange = (field, value) => {
//     console.log(`Updating ${field} with value: `, value); // Debugging
//     const updatedFormData = { ...formData, [field]: value };

//     // Automatically calculate balance amount if tarrif and paidamount are provided
//     if (field === 'tarrif' || field === 'paidamount') {
//       const tarrif = field === 'tarrif' ? parseFloat(value) : parseFloat(updatedFormData.tarrif);
//       const paidamount = field === 'paidamount' ? parseFloat(value) : parseFloat(updatedFormData.paidamount);
//       updatedFormData.balanceamount = tarrif && paidamount ? Math.max(tarrif - paidamount, 0) : '';
//     }

//     setFormData(updatedFormData);
//   };

//   const validateFields = () => {
//     const newErrors = {
//       checkInDate: !formData.checkInDate ? 'Check-in Date is required' : '',
//       checkInTime: !formData.checkInTime ? 'Check-in Time is required' : '',
//       tarrif: !formData.tarrif ? 'Tariff is required' : '',
//       paidamount: !formData.paidamount ? 'Paid Amount is required' : '',
//     };
//     setErrors(newErrors);
//     return !Object.values(newErrors).some(error => error);
//   };

//   const handleSubmit = () => {
//     // console.log(validateFields);
   
//       console.log(formData);
//       window.localStorage.clear();
//       navigate('/app/bookings');
    
//   };

//   return (
//     <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
//       <Header />
//       <div style={{ padding: '1rem', paddingBottom: 0 }}>
//         <Group>
//           <Text fz={22} fw={600}>Accommodation Details</Text>
//         </Group>
//       </div>
//       <div style={{ padding: '1rem', paddingBottom: 0 }}>
//         <Text fz={18} fw={600}>Room.No-{window.localStorage.getItem('roomNo')}</Text>
//       </div>
//       <form onSubmit={form.onSubmit(() => handleSubmit())}>
//         <div style={{ maxWidth: '500px', margin: '8px auto', padding: '17px' }}>
//           <div style={{ display: 'flex', flexDirection: 'row' }}>
//             <DatePickerInput
//               label="Check-in Date"
//               placeholder="YYYY-MM-DD"
//               // value={formData.checkInDate}
//               // onChange={(date) => handleInputChange('checkInDate', date)}
//               style={{ width: '55%' }}
//               // required
//               // error={errors.checkInDate}
//             />
//             <TimeInput
//               label="Check-in Time"
//               // value={formData.checkInTime}
//               // onChange={(value) => handleInputChange('checkInTime', value)}
//               style={{ marginLeft: '4px', width: '55%' }}
//               // required
//               error={errors.checkInTime}
//             />
//           </div>
//           <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
//             <DatePickerInput
//               label="Check-out Date"
//               placeholder="YYYY-MM-DD"
//               // value={formData.checkOutDate}
//               // onChange={(date) => handleInputChange('checkOutDate', date)}
//               style={{ width: '55%' }}
//             />
//             <TimeInput
//               label="Check-out Time"
//               // value={formData.checkOutTime}
//               // onChange={(value) => handleInputChange('checkOutTime', value)}
//               style={{ marginLeft: '4px', width: '55%', marginBottom: 15 }}
//             />
//           </div>
//           <TextInput
//             label="Tariff"
//             type="number"
//             placeholder="Amount"
//             value={formData.tarrif}
//             onChange={(event) => handleInputChange('tarrif', event.currentTarget.value)}
//             // required
//             error={errors.tarrif}
//             style={{ marginBottom: 15 }}
//           />
//           <TextInput
//             label="Paid Amount"
//             type="number"
//             placeholder="Amount"
//             value={formData.paidamount}
//             onChange={(event) => handleInputChange('paidamount', event.currentTarget.value)}
//             // required
//             error={errors.paidamount}
//             style={{ marginBottom: 15 }}
//           />
//           <TextInput
//             label="Balance Amount"
//             type="number"
//             placeholder="Amount"
//             value={formData.balanceamount}
//             readOnly
//             style={{ marginBottom: 15 }}
//           />
//           <Button type='submit' style={{ marginTop: '13px', width: '35%', backgroundColor: '#FE0000' }}>Submit</Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SubmitDetails;





// import React, { useState }   from 'react';
// import { TextInput, Button, Group, Text } from '@mantine/core';
// import { useNavigate } from 'react-router-dom';
// import { DatePickerInput, TimeInput } from '@mantine/dates';
// import { useForm } from '@mantine/form';
// import { useEffect } from 'react';

// const SubmitDetails = () => {
//   const navigate = useNavigate();
//   // const roomDetails = useRecoilValue(roomAtom);
//   const [date, setDate] = useState(new Date())
  
//   const [outdate, setOutdate] = useState()

//   useEffect(()=>{
//     const newDate = new Date(date);
  
  
//     newDate.setTime(newDate.getTime()  + 24 * 60 * 60 * 1000)
//     setOutdate(newDate);
//   },[date])



//   const form = useForm({
//     initialValues: {
//       checkOutDate: '',
//       checkOutTime: '',
//       checkInDate: '',
//       checkInTime: '',
//       paidamount: '',
//       balanceamount: '', 
//       tarrif: '',
//     },

//     validate: {
//       // checkOutDate: (value) => (value ? null : 'Check-out Date is required'),
//       // checkOutTime: (value) => (value ? null : 'Check-out Time is required'),
//       checkInDate: (value) => (value ? null : 'Check-in Date is required'),
//       checkInTime: (value) => (value ? null : 'Check-in Time is required'),
//       paidamount: (value) => (value ? null : 'Paid Amount is required'),
//       balanceamount: (value) => (value ? null : 'Balance Amount is required'),
//       tarrif: (value) => (value ? null : 'Tarrif is required'),
//     },
//   });

//   useEffect(() => {
//     const tarrif = parseFloat(form.values.tarrif) || 0;
//     const paidamount = parseFloat(form.values.paidamount) || 0;
//     form.setFieldValue('balanceamount', Math.max(tarrif - paidamount, 0));
//   }, [form.values.tarrif, form.values.paidamount]);

//   const handleSubmit = (values) => {
//     console.log(values);
//     // Further processing logic here
//     window.localStorage.removeItem("roomNo");
//     navigate('/app/bookings');
//   };

//   return (
//     <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
//       {/* <Header /> */}
//       <div style={{ padding: '1rem', paddingBottom: 0 }}>
//         <Group>
//           <Text fz={22} fw={600}>Accommodation Details</Text>
//         </Group>
//       </div>
//       <div style={{ padding: '1rem', paddingBottom: 0 }}>
//         <Text fz={18} fw={600}>Room.No-{window.localStorage.getItem('roomNo')}</Text>
//       </div>
//       <form onSubmit={form.onSubmit(handleSubmit)}>
//         <div style={{ maxWidth: '500px', margin: '8px auto', padding: '17px',paddingBottom:"20px" }}>
//           <div style={{ display: 'flex', flexDirection: 'row' }}>
//             <DatePickerInput
//               label="Check-in Date"
//               placeholder="YYYY-MM-DD"
//               value={date}
//               onChange={value => setDate(value)}
//               // {...form.getInputProps('checkInDate')}
//               style={{ width: '55%' }}
//               // required
//             />
//             <TimeInput
//               label="Check-in Time"
//               {...form.getInputProps('checkInTime')}
//               // required
//               style={{ marginLeft: '4px', width: '55%' }}
//             />
//           </div>
//           <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
//             <DatePickerInput
//               label="Check-out Date"
//               placeholder="YYYY-MM-DD"
//               value={outdate}
//               onChange={value => setOutdate(value)}
//               // {...form.getInputProps('checkOutDate')}
//               style={{ width: '55%' }}
//               // required
//             />
//             <TimeInput
//               label="Check-out Time"
//               {...form.getInputProps('checkOutTime')}
//               // required
//               style={{ marginLeft: '4px', width: '55%', marginBottom: 15 }}
//             />
//           </div>
//           <TextInput
//             label="Tarrif"
//             type="number"
//             placeholder="Amount"
//             {...form.getInputProps('tarrif')}
//             // required
//             style={{ marginBottom: 15 }}
//           />
//           <TextInput
//             label="Paid Amount"
//             type="number"
//             placeholder="Amount"
//             {...form.getInputProps('paidamount')}
//             // required
//             style={{ marginBottom: 15 }}
//           />
//           <TextInput
//             label="Balance Amount"
//             type="number"
//             placeholder="Amount"
//             {...form.getInputProps('balanceamount')}
//             // required
//             style={{ marginBottom: 15 }}
//           />
//           <Button type="submit" style={{ marginTop: '10px', width: '35%', backgroundColor: '#FE0000' }}onClick={handleSubmit}>Submit</Button>
//         </div>
//       </form>
//       {/* <Footer1/> */}

//     </div>
//   );
// };

// export default SubmitDetails;


// import React, { useState, useEffect } from 'react';
// import { TextInput, Button, Group, Text } from '@mantine/core';
// import { useNavigate } from 'react-router-dom';
// import { DatePickerInput, TimeInput } from '@mantine/dates';
// import { useForm } from '@mantine/form';
// import client from '../../API/api';

// const SubmitDetails = () => {
//   const navigate = useNavigate();
//   const [date, setDate] = useState(new Date());
//   const [outdate, setOutdate] = useState(new Date());
//   const [localData, setLocalData] = useState({});

//   useEffect(() => {
//     const newDate = new Date(date);
//     newDate.setTime(newDate.getTime() + 24 * 60 * 60 * 1000);
//     setOutdate(newDate);
//   }, [date]);

//   const form = useForm({
//     initialValues: {
//       checkOutDate: '',
//       checkOutTime: '',
//       checkInDate: '',
//       checkInTime: '',
//       paidamount: '',
//       balanceamount: '',
//       tarrif: '',
//     },

//     validate: {
//       checkInDate: (value) => (value ? null : 'Check-in Date is required'),
//       checkInTime: (value) => (value ? null : 'Check-in Time is required'),
//       checkOutDate: (value) => (value ? null : 'Check-out Date is required'),
//       checkOutTime: (value) => (value ? null : 'Check-out Time is required'),
//       paidamount: (value) => (value ? null : 'Paid Amount is required'),
//       balanceamount: (value) => (value ? null : 'Balance Amount is required'),
//       tarrif: (value) => (value ? null : 'Tarrif is required'),
//     },
//   });

//   useEffect(() => {
//     // Retrieve data from local storage
//     const localDataKeys = [
//       'guestName', 'gender', 'phoneNumber', 'guestIdProof', 'guestIdNumber', 'address',
//       'guestName1', 'gender1', 'guestIdProof1', 'guestIdNumber1',
//       'numGuests', 'bookingType', 'numAdults', 'numKids'
//     ];
    
//     const data = localDataKeys.reduce((acc, key) => {
//       acc[key] = window.localStorage.getItem(key);
//       return acc;
//     }, {});
    
//     setLocalData(data);
//   }, []);


//   useEffect(() => {
//     const tarrif = parseFloat(form.values.tarrif) || 0;
//     const paidamount = parseFloat(form.values.paidamount) || 0;
//     form.setFieldValue('balanceamount', Math.max(tarrif - paidamount, 0));
//   }, [form.values.tarrif, form.values.paidamount]);

//   // Handle form submission
//   const handleSubmit = async (values) => {
//     // Retrieve primaryGuest_Id and convert it to a number
//     const primaryGuest_Id = Number(window.localStorage.getItem('primaryGuest_Id'));

//     // Check if primaryGuest_Id is a valid number
//     if (isNaN(primaryGuest_Id)) {
//       console.error('Invalid primaryGuest_Id format');
//       alert('Primary Guest ID is invalid. Please check the input data.');
//       return;
//     }

//     // Combine form values with local storage data including primaryGuest_Id
//     const combinedData = {
//       ...localData,
//       primaryGuest_Id, // Include the primaryGuest_Id here
//       checkOutDate: values.checkOutDate,
//       checkOutTime: values.checkOutTime,
//       checkInDate: values.checkInDate,
//       checkInTime: values.checkInTime,
//       paidamount: values.paidamount,
//       balanceamount: values.balanceamount,
//       tarrif: values.tarrif,
//     };

//     try {
//       // Send data to the backend
//       const response = await client.post('/create-booking', combinedData);
//       console.log('Data saved successfully:', response.data);

//       // Remove roomNo from local storage after successful submission
//       window.localStorage.removeItem("roomNo");

//       // Navigate to the bookings page
//       navigate('/app/bookings');
//     } catch (error) {
//       console.error('Error saving data:', error);
//       alert(error.response?.data?.error || 'Failed to save booking details.');
//     }
//   };


//   return (
//     <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
//       <div style={{ padding: '1rem', paddingBottom: 0 }}>
//         <Group>
//           <Text fz={22} fw={600}>Accommodation Details</Text>
//         </Group>
//       </div>
//       <div style={{ padding: '1rem', paddingBottom: 0 }}>
//         <Text fz={18} fw={600}>Room.No-{window.localStorage.getItem('roomNo')}</Text>
//       </div>
//       <form onSubmit={form.onSubmit((values)=>handleSubmit(values))}>
//         <div style={{ maxWidth: '500px', margin: '8px auto', padding: '17px', paddingBottom: "20px" }}>
//           <div style={{ display: 'flex', flexDirection: 'row' }}>
//             <DatePickerInput
//               label="Check-in Date"
//               placeholder="YYYY-MM-DD"
//               value={date}
//               onChange={value => setDate(value)}
//               {...form.getInputProps('checkInDate')}
//               style={{ width: '55%' }}
//             />
//             <TimeInput
//               label="Check-in Time"
//               {...form.getInputProps('checkInTime')}
//               style={{ marginLeft: '4px', width: '55%' }}
//             />
//           </div>
//           <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
//             <DatePickerInput
//               label="Check-out Date"
//               placeholder="YYYY-MM-DD"
//               value={outdate}
//               onChange={value => setOutdate(value)}
//               {...form.getInputProps('checkOutDate')}
//               style={{ width: '55%' }}
//             />
//             <TimeInput
//               label="Check-out Time"
//               {...form.getInputProps('checkOutTime')}
//               style={{ marginLeft: '4px', width: '55%', marginBottom: 15 }}
//             />
//           </div>
//           <TextInput
//             label="Tarrif"
//             type="number"
//             placeholder="Amount"
//             {...form.getInputProps('tarrif')}
//             style={{ marginBottom: 15 }}
//           />
//           <TextInput
//             label="Paid Amount"
//             type="number"
//             placeholder="Amount"
//             {...form.getInputProps('paidamount')}
//             style={{ marginBottom: 15 }}
//           />
//           <TextInput
//             label="Balance Amount"
//             type="number"
//             placeholder="Amount"
//             {...form.getInputProps('balanceamount')}
//             style={{ marginBottom: 15 }}
//             // disabled
//           />
//           <Button type="submit" style={{ marginTop: '10px', width: '35%', backgroundColor: '#FE0000' }}>Submit</Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SubmitDetails;
import React, { useState, useEffect } from 'react';
import { TextInput, Button, Group, Text, Select } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { DatePickerInput, TimeInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import client from '../../API/api'; // Axios instance to handle API requests

const SubmitDetails = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [outdate, setOutdate] = useState(new Date());
  const [localData, setLocalData] = useState({});

  // Update check-out date based on check-in date
  useEffect(() => {
    const newDate = new Date(date);
    newDate.setTime(newDate.getTime() + 24 * 60 * 60 * 1000); // Adds 24 hours
    setOutdate(newDate);
  }, [date]);

  // Form setup with validation
  const form = useForm({
    initialValues: {
      checkOutDate: '',
      checkOutTime: '',
      checkInDate: '',
      checkInTime: '',
      paidamount: '',
      balanceamount: '',
      tarrif: '',
      bookingStatus: '',
      modeOfPayment: '',
      duration: '',
    },

    validate: {
      checkInDate: (value) => (value ? null : 'Check-in Date is required'),
      checkInTime: (value) => (value ? null : 'Check-in Time is required'),
      checkOutDate: (value) => (value ? null : 'Check-out Date is required'),
      checkOutTime: (value) => (value ? null : 'Check-out Time is required'),
      paidamount: (value) => (value ? null : 'Paid Amount is required'),
      balanceamount: (value) => (value ? null : 'Balance Amount is required'),
      tarrif: (value) => (value ? null : 'Tarrif is required'),
      modeOfPayment: (value) => (value ? null : 'Mode of Payment is required'),
    },
  });

  // Load data from local storage
  useEffect(() => {
    const localDataKeys = [
      'guestName', 'gender', 'phoneNumber', 'guestIdProof', 'guestIdNumber', 'address',
      'numGuests', 'bookingType', 'numAdults', 'numKids', 'guestDetails','roomPrice'
    ];

    const data = localDataKeys.reduce((acc, key) => {
      acc[key] = window.localStorage.getItem(key);
      return acc;
    }, {});

    setLocalData(data);
    const roomPrice = window.localStorage.getItem('roomPrice') || '';
    form.setFieldValue('tarrif', roomPrice); // Set tarrif to roomPri
  }, []);
  
// Calculate balance amount based on duration and tariff
useEffect(() => {
  const tarrif = parseFloat(form.values.tarrif) || 0;
  const paidamount = parseFloat(form.values.paidamount) || 0;
  const duration = parseFloat(form.values.duration) || 1; // Default to 1 if duration is not set

  const totalAmount = duration * tarrif; // Total cost based on duration
  form.setFieldValue('balanceamount', Math.max(totalAmount - paidamount, 0));
}, [form.values.tarrif, form.values.paidamount, form.values.duration]);


  // Calculate total number of days when check-in or check-out changes
  useEffect(() => {
    if (form.values.checkInDate && form.values.checkInTime && form.values.checkOutDate && form.values.checkOutTime) {
      const checkInDateTime = combineDateTime(form.values.checkInDate, form.values.checkInTime);
      const checkOutDateTime = combineDateTime(form.values.checkOutDate, form.values.checkOutTime);

      if (checkInDateTime && checkOutDateTime) {
        const diffTime = new Date(checkOutDateTime).getTime() - new Date(checkInDateTime).getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert to total days

        form.setFieldValue('duration', diffDays); // Set the total number of days
      }
    }
  }, [form.values.checkInDate, form.values.checkInTime, form.values.checkOutDate, form.values.checkOutTime]);


  // Handle form submission
  const handleSubmit = async (values) => {
    try {
      // Retrieve primary guest details from local storage
      const primaryGuestDetails = {
        name: window.localStorage.getItem('guestName'),
        gender: window.localStorage.getItem('gender'),
        phoneNumber: window.localStorage.getItem('phoneNumber'),
        guestIdType: window.localStorage.getItem('guestIdProof'),
        guestIdNumber: window.localStorage.getItem('guestIdNumber'),
        address: window.localStorage.getItem('address'),
      };

      // Validate primary guest details
      if (!primaryGuestDetails.name || !primaryGuestDetails.phoneNumber) {
        throw new Error('Primary guest details are missing or incomplete.');
      }

      // Retrieve guest details from local storage
      const guestDetails = JSON.parse(window.localStorage.getItem('guestDetails')) || [];

      // Convert amount fields to numbers
      const paidamount = parseFloat(values.paidamount) || 0;
      const balanceamount = parseFloat(values.balanceamount) || 0;
      const tarrif = parseFloat(values.tarrif) || 0;

      // Combine all necessary data
      const combinedData = {
        primaryGuestDetails,
        guestDetails,
        bookingType: window.localStorage.getItem('bookingType'),
        numAdults: window.localStorage.getItem('numAdults'),
        numKids: window.localStorage.getItem('numKids'),
        numGuests: window.localStorage.getItem('numGuests'),
        checkInDateTime: combineDateTime(values.checkInDate, values.checkInTime),
        checkOutDateTime: combineDateTime(values.checkOutDate, values.checkOutTime),
        paidamount,
        balanceamount,
        tarrif,
        roomNo: window.localStorage.getItem('roomNo'),
        modeOfPayment: values.modeOfPayment,
        duration: values.duration, // Include duration in the submission
      };

      console.log('Combined Data for Booking:', combinedData); // Log combinedData before API call

      // POST the data to the backend API
      const response = await client.post('/bookings', combinedData);

      // Clear all local storage items except for roomNo
      const roomNo = window.localStorage.getItem('roomNo');
      const username = window.localStorage.getItem('username')
      window.localStorage.clear();
      if (roomNo) {
        window.localStorage.setItem('roomNo', roomNo);
      }
     
      if (username) {

        window.localStorage.setItem('username',username)
        
      }

      // Navigate to the bookings page
      navigate('/app/bookings');
    } catch (error) {
      console.error('Error saving booking:', error.response?.data || error); // Detailed error log
      alert(error.response?.data?.message || 'Failed to save booking details. Please check input data.');
    }
  };

  // Function to combine date and time into ISO format
  const combineDateTime = (date, time) => {
    if (!date || !time) return null;

    
  // Extract hours and minutes from the time input (assumed 'HH:mm' format)
  const [hours, minutes] = time.split(':');

  // Create a new Date object based on the date input
  const combinedDate = new Date(date);

  // Set the time (hours, minutes, seconds, milliseconds)
  combinedDate.setHours(hours, minutes, 0, 0);

  // Convert to ISO string (e.g., "2024-10-04T07:28:00.000Z")
  return combinedDate.toISOString();
};

  return (
    <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
      <div style={{ padding: '1rem', paddingBottom: 0 }}>
        <Group>
          <Text fz={22} fw={600}>Accommodation Details</Text>
        </Group>
      </div>
      <div style={{ padding: '1rem', paddingBottom: 0 }}>
        <Text fz={18} fw={600}>Room.No-{window.localStorage.getItem('roomNo')}</Text>
      </div>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <div style={{ maxWidth: '500px', margin: '8px auto', padding: '17px', paddingBottom: "20px" }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <DatePickerInput
              label="Check-in Date"
              placeholder="YYYY-MM-DD"
              value={date}
              onChange={value => setDate(value)}
              {...form.getInputProps('checkInDate')}
              style={{ width: '55%' }}
            />
            <TimeInput
              label="Check-in Time"
              {...form.getInputProps('checkInTime')}
              style={{ marginLeft: '4px', width: '55%' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
            <DatePickerInput
              label="Check-out Date"
              placeholder="YYYY-MM-DD"
              value={outdate}
              onChange={value => setOutdate(value)}
              {...form.getInputProps('checkOutDate')}
              style={{ width: '55%' }}
            />
            <TimeInput
              label="Check-out Time"
              {...form.getInputProps('checkOutTime')}
              style={{ marginLeft: '4px', width: '55%', marginBottom: 15 }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>

          <TextInput
            label="Total No.of Days"
            placeholder="number of days"
            type="number"
            min={1}
            {...form.getInputProps('duration')}
            style={{ width: '55%' }}
          />
          <Select
            label="Mode of Payment"
            data={['Credit Card', 'Cash', 'UPI']}
            placeholder="Select payment mode"
            {...form.getInputProps('modeOfPayment')}
            style={{ marginLeft: '4px', width: '55%', marginBottom: 15 }}
          
          />
        
          </div>
          <TextInput
            // label="Tarrif"
            // type="number"
            // placeholder="Amount"
            // {...form.getInputProps('tarrif')}
            // style={{ marginBottom: 15 }}
            label="Tarrif"
            placeholder="Enter Tarrif"
            value={form.values.tarrif}
            onChange={(event) => form.setFieldValue('tarrif', event.currentTarget.value)}
            required
            style={{marginBottom: 15}}
          />
          <TextInput
            label="Paid Amount"
            type="number"
            placeholder="Amount"
            {...form.getInputProps('paidamount')}
            style={{ marginBottom: 15 }}
          />
          <TextInput
            label="Balance Amount"
            type="number"
            placeholder="Amount"
            {...form.getInputProps('balanceamount')}
            style={{ marginBottom: 15 }}
            readOnly
          />
          <Group position="center" mt="md">
           <Button type="submit" style={{ backgroundColor: "red" }}>Submit</Button>
        </Group>
        </div>
      </form>
    </div>
  );
};

export default SubmitDetails;


// import React, { useState, useEffect } from 'react';
// import { TextInput, Button, Group, Text, Select } from '@mantine/core';
// import { useNavigate } from 'react-router-dom';
// import { DatePickerInput, TimeInput } from '@mantine/dates';
// import { useForm } from '@mantine/form';
// import client from '../../API/api'; // Ensure this is your API client setup

// const SubmitDetails = () => {
//   const navigate = useNavigate();
//   const [date, setDate] = useState(new Date());
//   const [outdate, setOutdate] = useState(new Date());
//   const [localData, setLocalData] = useState({});
//   const [registrationCards, setRegistrationCards] = useState([]);

//   useEffect(() => {
//     // Automatically set check-out date 24 hours after check-in date
//     const newDate = new Date(date);
//     newDate.setTime(newDate.getTime() + 24 * 60 * 60 * 1000);
//     setOutdate(newDate);
//   }, [date]);

//   const form = useForm({
//     initialValues: {
//       checkOutDate: '',
//       checkOutTime: '',
//       checkInDate: '',
//       checkInTime: '',
//       paidamount: '',
//       balanceamount: '',
//       tarrif: '',
//       modeOfPayment: '', // New field for mode of payment
//     },
//     validate: {
//       checkInDate: (value) => (value ? null : 'Check-in Date is required'),
//       checkInTime: (value) => (value ? null : 'Check-in Time is required'),
//       checkOutDate: (value) => (value ? null : 'Check-out Date is required'),
//       checkOutTime: (value) => (value ? null : 'Check-out Time is required'),
//       paidamount: (value) => (value ? null : 'Paid Amount is required'),
//       balanceamount: (value) => (value ? null : 'Balance Amount is required'),
//       tarrif: (value) => (value ? null : 'Tarrif is required'),
//       modeOfPayment: (value) => (value ? null : 'Mode of Payment is required'),
//     },
//   });

//   useEffect(() => {
//     // Retrieve data from local storage
//     const localDataKeys = [
//       'guestName', 'gender', 'phoneNumber', 'guestIdProof', 'guestIdNumber', 'address',
//       'numGuests', 'bookingType', 'numAdults', 'numKids',
//     ];

//     const data = localDataKeys.reduce((acc, key) => {
//       acc[key] = window.localStorage.getItem(key);
//       return acc;
//     }, {});

//     // Retrieve registration card data from local storage as an array
//     const registrationCardsData = JSON.parse(window.localStorage.getItem('registrationCards')) || [];

//     setLocalData(data);
//     setRegistrationCards(registrationCardsData);
//   }, []);

//   useEffect(() => {
//     // Calculate balance amount whenever tariff or paid amount changes
//     const tarrif = parseFloat(form.values.tarrif) || 0;
//     const paidamount = parseFloat(form.values.paidamount) || 0;
//     form.setFieldValue('balanceamount', Math.max(tarrif - paidamount, 0));
//   }, [form.values.tarrif, form.values.paidamount]);

//   // Save primary guest details first
//   const savePrimaryGuest = async () => {
//     const primaryGuestData = {
//       name: localData.guestName,
//       gender: localData.gender,
//       phoneNumber: localData.phoneNumber,
//       guestIdType: localData.guestIdProof,
//       guestIdNumber: localData.guestIdNumber,
//       address: localData.address,
//     };

//     try {
//       // Save primary guest details
//       const response = await client.post('/create-primary-guest', primaryGuestData);
//       console.log('Primary guest saved successfully:', response.data);

//       // Return the primaryGuest_Id from the response
//       return response.data.primaryGuest_Id;
//     } catch (error) {
//       console.error('Error saving primary guest:', error);
//       alert('Failed to save primary guest details.');
//       throw error; // Prevent further execution if the primary guest API call fails
//     }
//   };

//   // Handle form submission
//   const handleSubmit = async (values) => {
//     try {
//       // Combine formatted data but keep check-in and check-out fields separate
//       const combinedData = {
//         ...localData,
//         primaryGuest_Id: await savePrimaryGuest(),
//         checkInDate: values.checkInDate, // Send as separate fields
//         checkInTime: values.checkInTime,
//         checkOutDate: values.checkOutDate, // Send as separate fields
//         checkOutTime: values.checkOutTime,
//         paidamount: values.paidamount,
//         balanceamount: values.balanceamount,
//         tarrif: values.tarrif,
//         roomNo: window.localStorage.getItem('roomNo'),
//         modeOfPayment: values.modeOfPayment,
//         registrationCards, // Include registration card data
//       };

//       console.log('Combined Data for Booking:', combinedData);

//       // Save booking details
//       const response = await client.post('/create-booking', combinedData);
//       console.log('Booking saved successfully:', response.data);

//       // Clear local storage and navigate
//       window.localStorage.removeItem('roomNo');
//       window.localStorage.removeItem('registrationCards');
//       navigate('/app/bookings');
//     } catch (error) {
//       console.error('Error saving booking:', error.message || error.response?.data || error);
//       alert(error.message || error.response?.data?.message || 'Failed to save booking details. Please check input data.');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
//       <div style={{ padding: '1rem', paddingBottom: 0 }}>
//         <Group>
//           <Text fz={22} fw={600}>Accommodation Details</Text>
//         </Group>
//       </div>
//       <div style={{ padding: '1rem', paddingBottom: 0 }}>
//         <Text fz={18} fw={600}>Room.No-{window.localStorage.getItem('roomNo')}</Text>
//       </div>
//       <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
//         <div style={{ maxWidth: '500px', margin: '8px auto', padding: '17px', paddingBottom: "20px" }}>
//           <div style={{ display: 'flex', flexDirection: 'row' }}>
//             <DatePickerInput
//               label="Check-in Date"
//               placeholder="YYYY-MM-DD"
//               value={date}
//               onChange={value => setDate(value)}
//               {...form.getInputProps('checkInDate')}
//               style={{ width: '55%' }}
//             />
//             <TimeInput
//               label="Check-in Time"
//               {...form.getInputProps('checkInTime')}
//               style={{ marginLeft: '4px', width: '55%' }}
//             />
//           </div>
//           <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
//             <DatePickerInput
//               label="Check-out Date"
//               placeholder="YYYY-MM-DD"
//               value={outdate}
//               onChange={value => setOutdate(value)}
//               {...form.getInputProps('checkOutDate')}
//               style={{ width: '55%' }}
//             />
//             <TimeInput
//               label="Check-out Time"
//               {...form.getInputProps('checkOutTime')}
//               style={{ marginLeft: '4px', width: '55%', marginBottom: 15 }}
//             />
//           </div>
//           <Select
//             label="Mode of Payment"
//             data={['Credit Card', 'Cash', 'UPI']}
//             placeholder="Select payment mode"
//             {...form.getInputProps('modeOfPayment')}
//             style={{ marginBottom: 15 }}
//           />
//           <TextInput
//             label="Tarrif"
//             type="number"
//             placeholder="Amount"
//             {...form.getInputProps('tarrif')}
//             style={{ marginBottom: 15 }}
//           />
//           <TextInput
//             label="Paid Amount"
//             type="number"
//             placeholder="Amount"
//             {...form.getInputProps('paidamount')}
//             style={{ marginBottom: 15 }}
//           />
//           <TextInput
//             label="Balance Amount"
//             type="number"
//             placeholder="Amount"
//             {...form.getInputProps('balanceamount')}
//             style={{ marginBottom: 15 }}
//           />
//           <Group position="center" mt="md">
//             <Button type="submit" style={{ backgroundColor: "red" }}>Submit</Button>
//           </Group>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SubmitDetails;
