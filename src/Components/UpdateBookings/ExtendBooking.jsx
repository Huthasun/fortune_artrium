// import React, { useState, useEffect } from 'react';
// import { TextInput, Button, Group, Text, Select } from '@mantine/core';
// import { useNavigate } from 'react-router-dom';
// import { DatePickerInput, TimeInput } from '@mantine/dates';
// import { useForm } from '@mantine/form';
// import client from '../../API/api';

// const ExtendBooking = () => {
//   const navigate = useNavigate();
//   const [date, setDate] = useState(null);
//   const [outdate, setOutdate] = useState(null);

//   const form = useForm({
//     initialValues: {
//       checkOutDate: '',
//       checkOutTime: '',
//       checkInDate: '',
//       checkInTime: '',
//       paidamount: '',
//       balanceamount: '',
//       tarrif: '',
//       bookingStatus: 'Confirmed',
//       modeOfPayment: '',
//       duration: '',
//       totalamount: '',
//       bookingId: '',
//     },
//     validate: {
//       checkInDate: (value) => (value ? null : 'Check-in Date is required'),
//       checkInTime: (value) => (value ? null : 'Check-in Time is required'),
//       checkOutDate: (value) => (value ? null : 'Check-out Date is required'),
//       checkOutTime: (value) => (value ? null : 'Check-out Time is required'),
//       paidamount: (value) => (value ? null : 'Paid Amount is required'),
//       tarrif: (value) => (value ? null : 'Tariff is required'),
//       modeOfPayment: (value) => (value ? null : 'Mode of Payment is required'),
//     },
//   });

//   useEffect(() => {
//     const selectedRoom = JSON.parse(localStorage.getItem('selectedRoomData'));
//     if (selectedRoom) {
//       const {
//         bookingDetails: { checkInDateTime, checkOutDateTime, numOfDays, pmytotalAmount, modeOfPayment },
//         bookingId,
//         paidAmount,
//         totalAmount,
//         balanceAmount,
        
//         roomStatusId,
//         roomId,
//         primaryGuestId, 
//       } = selectedRoom;

//       if (checkInDateTime && checkOutDateTime) {
//         const checkInDateObj = new Date(checkInDateTime);
//         const checkOutDateObj = new Date(checkOutDateTime);

//         const checkInDate = checkInDateObj.toISOString().split('T')[0];
//         const checkInTime = checkInDateObj.toISOString().split('T')[1].slice(0, 5);

//         const checkOutDate = checkOutDateObj.toISOString().split('T')[0];
//         const checkOutTime = checkOutDateObj.toISOString().split('T')[1].slice(0, 5);

//         form.setValues({
//           bookingId,
//           checkInDate,
//           checkInTime,
//           checkOutDate,
//           checkOutTime,
//           paidamount: paidAmount,
//           tarrif: totalAmount,
//           totalamount: pmytotalAmount,
//           balanceamount: balanceAmount,
//           modeOfPayment:modeOfPayment,
//           duration: numOfDays,
//         });

//         setDate(checkInDateObj);
//         setOutdate(checkOutDateObj);
//       }
//     }
//   }, []);

//   useEffect(() => {
//     if (form.values.checkInDate && form.values.checkInTime && form.values.checkOutDate && form.values.checkOutTime) {
//       const combineDateTime = (date, time) => `${date}T${time}:00`;

//       const checkInDateTime = combineDateTime(form.values.checkInDate, form.values.checkInTime);
//       const checkOutDateTime = combineDateTime(form.values.checkOutDate, form.values.checkOutTime);

//       if (checkInDateTime && checkOutDateTime) {
//         const diffTime = new Date(checkOutDateTime).getTime() - new Date(checkInDateTime).getTime();
//         const diffDays = Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);

//         if (form.values.duration !== diffDays) {
//           form.setFieldValue('duration', diffDays);
//         }
//       }
//     }
//   }, [form.values.checkInDate, form.values.checkInTime, form.values.checkOutDate, form.values.checkOutTime, form.values.duration]);

//   useEffect(() => {
//     const duration = parseInt(form.values.duration || 0, 10);
//     const tarrif = parseFloat(form.values.tarrif || 0);

//     if (duration && tarrif) {
//       const total = duration * tarrif;
//       if (form.values.totalamount !== total) {
//         form.setFieldValue('totalamount', total);
//       }
//     }
//     form.setFieldValue('balanceamount', calculateBalance());
//   }, [form.values.duration, form.values.tarrif]);

//   const calculateBalance = () => {
//     const paid = parseFloat(form.values.paidamount || 0);
//     const total = parseFloat(form.values.totalamount || 0);
//     return total - paid;
//   };

//   const combineDateTime = (date, time) => {
//     const dateTimeString = `${date}T${time}`;
//     return new Date(dateTimeString).toISOString(); // Returns an ISO string format
//   };
//   const handleSubmit = async (values) => {
//     const selectedRoom = JSON.parse(localStorage.getItem('selectedRoomData'));
  
//     // Ensure selectedRoom exists before proceeding
//     if (!selectedRoom) {
//       alert('No room selected. Please select a room.');
//       return;
//     }
  
//     const combinedBookingData = {
//       bookingId: values.bookingId,
//       checkInDateTime: combineDateTime(values.checkInDate, values.checkInTime),
//       checkOutDateTime: combineDateTime(values.checkOutDate, values.checkOutTime),
//       duration: values.duration,
//       modeOfPayment: values.modeOfPayment,
//       paidAmount: values.paidamount,
//       balanceAmount: values.balanceamount,
//       pmytotalAmount: values.totalamount,
//       roomNo: selectedRoom.roomNo,  // From localStorage data
//       tarrif: values.tarrif,
//     };
  
//     const combinedRoomStatusData = {
//       roomStatusId: selectedRoom.roomStatusId,  // Extracted from selectedRoom data in localStorage
//       roomId: selectedRoom.roomId,              // Room data also stored in localStorage
//       bookingId: values.bookingId,
//       primaryGuestId: selectedRoom.primaryGuestId,  // Use primaryGuestId from localStorage
//       roomStatus: 'occupied',                      // Hardcoded as 'Occupied'
//       totalAmount: values.totalamount,
//       paidAmount: values.paidamount,
//       balanceAmount: values.balanceamount,
//       checkOutDateTime: combineDateTime(values.checkOutDate, values.checkOutTime),
//     };
  
//     try {
//       // Update booking data via API call
//       const bookingResponse = await client.put(`/bookings/updateBooking/${values.bookingId}`, combinedBookingData);
//       console.log('Booking updated successfully:', bookingResponse.data);
  
//       // Update room status via API call
//       const roomStatusResponse = await client.put(`/api/room-status/updateRoomStatus/${selectedRoom.roomStatusId}`, combinedRoomStatusData);
//       console.log('Room status updated successfully:', roomStatusResponse.data);
  
//       // Clear localStorage and navigate to bookings page
//       localStorage.removeItem('selectedRoomData');
//       navigate('/app/bookings');
//     } catch (error) {
//       console.error('Error:', error);
  
//       if (error.response) {
//         console.error('Response error:', error.response);
//         alert(`Failed to update. Error: ${error.response.data.message || error.response.statusText}`);
//       } else {
//         alert('Failed to update. Please check input data. Error: ' + error.message);
//       }
//     }
//   };
  
//   const cancelbutton = () => {
//     localStorage.removeItem('selectedRoomData');
//     navigate('/app/bookings');
//   };

//   return (
//     <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
//       <div style={{ padding: '1rem', paddingBottom: 0 }}>
//         <Group>
//           <Text fz={22} fw={600}>Extend Bookings</Text>
//         </Group>
//       </div>
//       <form onSubmit={form.onSubmit(handleSubmit)}>
//         <div style={{ maxWidth: '500px', margin: '8px auto', padding: '17px', paddingBottom: '20px' }}>
//           <div style={{ display: 'flex', flexDirection: 'row' }}>
//             <DatePickerInput
//               label="Check-in Date"
//               placeholder="YYYY-MM-DD"
//               value={date}
//               onChange={(value) => {
//                 setDate(value);
//                 form.setFieldValue('checkInDate', value ? value.toISOString().split('T')[0] : '');
//               }}
//               style={{ width: '55%' }}
//             />
//             <TimeInput
//               label="Check-in Time"
//               value={form.values.checkInTime}
//               onChange={(value) => form.setFieldValue('checkInTime', value)}
//               style={{ marginLeft: '4px', width: '55%' }}
//               format="HH:mm"
//             />
//           </div>
//           <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
//             <DatePickerInput
//               label="Check-out Date"
//               placeholder="YYYY-MM-DD"
//               value={outdate}
//               onChange={(value) => {
//                 setOutdate(value);
//                 form.setFieldValue('checkOutDate', value ? value.toISOString().split('T')[0] : '');
//               }}
//               style={{ width: '55%' }}
//             />
//             <TimeInput
//               label="Check-out Time"
//               value={form.values.checkOutTime}
//               onChange={(value) => form.setFieldValue('checkOutTime', value)}
//               style={{ marginLeft: '4px', width: '55%' }}
//               format="HH:mm"
//             />
//           </div>
//           <TextInput
//             label="Total number of days"
//             placeholder="Total number of days"
//             value={form.values.duration}
//             // disabled
//             style={{ marginTop: '10px' }}
//           />
//           <TextInput
//             label="Tariff"
//             placeholder="Enter tariff"
//             value={form.values.tarrif}
//             onChange={(event) => form.setFieldValue('tarrif', event.target.value)}
//             style={{ marginTop: '10px' }}
//           />
//           <TextInput
//             label="Paid Amount"
//             placeholder="Enter paid amount"
//             value={form.values.paidamount}
//             onChange={(event) => form.setFieldValue('paidamount', event.target.value)}
//             style={{ marginTop: '10px' }}
//           />
//           <TextInput
//             label="Balance Amount"
//             placeholder="Balance amount"
//             value={form.values.balanceamount}
//             onChange={(event) => form.setFieldValue('balanceamount', event.target.value)}
//             style={{ marginTop: '10px' }}
//           />
//           <TextInput
//             label="Total Amount"
//             placeholder="Total amount"
//             value={form.values.totalamount}
//             onChange={(event) => form.setFieldValue('totalamount', event.target.value)}
//             style={{ marginTop: '10px' }}
//           />
//           <Select
//             label="Mode of Payment"
//             placeholder="Choose"
//             data={['Cash', 'Credit Card', 'UPI']}
//             value={form.values.modeOfPayment}
//             onChange={(value) => form.setFieldValue('modeOfPayment', value)}
//             style={{ marginTop: '10px' }}
//           />
//         </div>

//         <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
//           <Button variant="outline" onClick={cancelbutton}>
//             Cancel
//           </Button>
//           <Button type="submit" style={{backgroundColor:"red"}}>
//             Submit
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ExtendBooking;
// import React, { useState, useEffect } from 'react';
// import { TextInput, Button, Group, Text, Select } from '@mantine/core';
// import { useNavigate } from 'react-router-dom';
// import { DatePickerInput, TimeInput } from '@mantine/dates';
// import { useForm } from '@mantine/form';
// import client from '../../API/api';

// const ExtendBooking = () => {
//   const navigate = useNavigate();
//   const [date, setDate] = useState(null);
//   const [outdate, setOutdate] = useState(null);
//   const [roomNo, setRoomNo] = useState('');

//   const form = useForm({
//     initialValues: {
//       checkOutDate: '',
//       checkOutTime: '',
//       checkInDate: '',
//       checkInTime: '',
//       paidamount: '',
//       balanceamount: '',
//       tarrif: '',
//       bookingStatus: 'Confirmed',
//       modeOfPayment: '',
//       duration: '',
//       totalamount: '',
//       bookingId: '',
//     },
//     validate: {
//       checkInDate: (value) => (value ? null : 'Check-in Date is required'),
//       checkInTime: (value) => (value ? null : 'Check-in Time is required'),
//       checkOutDate: (value) => (value ? null : 'Check-out Date is required'),
//       checkOutTime: (value) => (value ? null : 'Check-out Time is required'),
//       paidamount: (value) => (value ? null : 'Paid Amount is required'),
//       tarrif: (value) => (value ? null : 'Tariff is required'),
//       modeOfPayment: (value) => (value ? null : 'Mode of Payment is required'),
//     },
//   });

//   useEffect(() => {
//     const selectedRoom = JSON.parse(localStorage.getItem('selectedRoomData'));
//     if (selectedRoom && selectedRoom.roomNo) {
//       setRoomNo(selectedRoom.roomNo);
//     }
//   }, []);

//  useEffect(() => {
//   if (
//     form.values.checkInDate &&
//     form.values.checkInTime &&
//     form.values.checkOutDate &&
//     form.values.checkOutTime
//   ) {
//     const checkInDateTime = combineDateTime(form.values.checkInDate, form.values.checkInTime);
//     const checkOutDateTime = combineDateTime(form.values.checkOutDate, form.values.checkOutTime);

//     if (checkInDateTime && checkOutDateTime) {
//       const diffTime = new Date(checkOutDateTime).getTime() - new Date(checkInDateTime).getTime();

//       if (diffTime >= 0) {
//         const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

//         const checkInDate = new Date(checkInDateTime);
//         const checkOutDate = new Date(checkOutDateTime);

//         const isSameTime =
//           checkInDate.getHours() === checkOutDate.getHours() &&
//           checkInDate.getMinutes() === checkOutDate.getMinutes();

//         const duration = isSameTime ? diffDays : diffDays;

//         form.setFieldValue('duration', duration);
//       } else {
//         form.setFieldValue('duration', 0);
//       }
//     }
//   }
// }, [form.values.checkInDate, form.values.checkInTime, form.values.checkOutDate, form.values.checkOutTime]);


//   useEffect(() => {
//     const tarrif = parseFloat(form.values.tarrif) || 0;
//     const paidamount = parseFloat(form.values.paidamount) || 0;
//     const duration = parseFloat(form.values.duration) || 1; 
  
//     const totalAmount = duration * tarrif;
//     form.setFieldValue('totalamount', totalAmount);
//     form.setFieldValue('balanceamount', Math.max(totalAmount - paidamount, 0));
//   }, [form.values.tarrif, form.values.paidamount, form.values.duration]);
  
//   useEffect(() => {
//     const selectedRoom = JSON.parse(localStorage.getItem('selectedRoomData'));
//     if (selectedRoom && selectedRoom.bookingDetails) {
//       const {
//         balanceAmount, 
//         bookingDetails: { checkInDateTime, checkOutDateTime, numOfDays, tarrif, modeOfPayment, pmytotalAmount },
//         bookingId,
//         paidAmount,
//       } = selectedRoom;

//     //   // Store the original total amount once
//     // if (!localStorage.getItem('originalTotalAmount')) {
//     //   localStorage.setItem('originalTotalAmount', pmytotalAmount);
//     // }

//     // // Store cumulative paid amount if not present
//     // if (!localStorage.getItem('cumulativePaidAmount')) {
//     //   localStorage.setItem('cumulativePaidAmount', paidAmount || 0);
//     // }

  
//     //   // Ensure 'bookingDetails' is present before proceeding
//     //   if (selectedRoom.bookingDetails && selectedRoom.bookingDetails.balance !== balanceAmount) {
//     //     selectedRoom.bookingDetails.balance = balanceAmount; 
//     //     localStorage.setItem('selectedRoomData', JSON.stringify(selectedRoom)); 
//     //   }
  
//       if (checkInDateTime && checkOutDateTime) {
//         const checkInDateObj = new Date(checkInDateTime);
//         const checkOutDateObj = new Date(checkOutDateTime);
  
//         const checkInDate = checkInDateObj.toISOString().split('T')[0];
//         const checkInTime = checkInDateObj.toISOString().split('T')[1].slice(0, 5);
  
//         const checkOutDate = checkOutDateObj.toISOString().split('T')[0];
//         const checkOutTime = checkOutDateObj.toISOString().split('T')[1].slice(0, 5);
  
//         form.setValues({
//           bookingId,
//           checkInDate,
//           checkInTime,
//           checkOutDate,
//           checkOutTime,
//           paidamount: paidAmount,
//           tarrif: tarrif,
//           totalamount: pmytotalAmount,
//           balanceamount: balanceAmount, 
//           modeOfPayment: modeOfPayment,
//           duration: numOfDays,
//         });
  
//         setDate(checkInDateObj);
//         setOutdate(checkOutDateObj);
//       }
//     }
//   }, []);
  
//   const combineDateTime = (date, time) => {
//     const dateTimeString =`${date}T${time}`;
//     return new Date(dateTimeString).toISOString();
//   };

//   const handleSubmit = async (values) => {
//     const selectedRoom = JSON.parse(localStorage.getItem('selectedRoomData'));

//     if (!selectedRoom) {
//       alert('No room selected. Please select a room.');
//       return;
//     }

// //      // Retrieve original total amount and cumulative paid amount from localStorage
// //   const originalTotalAmount = parseFloat(localStorage.getItem('originalTotalAmount')) || 0;
// //   const cumulativePaidAmount =
// //     parseFloat(localStorage.getItem('cumulativePaidAmount')) || 0;
// //  // Add the current payment to the cumulative paid amount
// //  const updatedPaidAmount = cumulativePaidAmount + parseFloat(values.paidamount || 0);

// //  // Calculate the updated balance
// //  const updatedBalance = Math.max(originalTotalAmount - updatedPaidAmount, 0);

//     const combinedBookingData = {
//       bookingId: values.bookingId,
//       checkInDateTime: combineDateTime(values.checkInDate, values.checkInTime),
//       checkOutDateTime: combineDateTime(values.checkOutDate, values.checkOutTime),
//       duration: values.duration,
//       modeOfPayment: values.modeOfPayment,
//       paidAmount: values.paidamount,
//       balance:values.balanceamount,
//       pmytotalAmount: values.totalamount,
//       roomNo: selectedRoom.roomNo,
//       tarrif: values.tarrif,

//     };

//     const combinedRoomStatusData = {
//       roomStatusId: selectedRoom.roomStatusId,
//       roomId: selectedRoom.roomId,
//       bookingId: values.bookingId,
//       primaryGuestId: selectedRoom.primaryGuestId,
//       roomStatus: 'occupied',
//       totalamount: values.totalamount,
//     paidAmount: values.paidamount,
//     balanceAmount: values.balanceamount,
//       checkOutDateTime: combineDateTime(values.checkOutDate, values.checkOutTime),

//     };

//     try {
//       const bookingResponse = await client.put(`/bookings/updateBooking/${values.bookingId}`, combinedBookingData);
//       console.log('Booking updated successfully:', bookingResponse.data);

//       const roomStatusResponse = await client.put(`/api/room-status/updateRoomStatus/${selectedRoom.roomStatusId}`, combinedRoomStatusData);
//       console.log('Room status updated successfully:', roomStatusResponse.data);
//   // // Update cumulative paid amount in localStorage
//   //   localStorage.setItem('cumulativePaidAmount', updatedPaidAmount);
//       localStorage.removeItem('selectedRoomData');
//       navigate('/app/bookings');
//     } catch (error) {
//       console.error('Error:', error);

//       if (error.response) {
//         console.error('Response error:', error.response);
//         alert(`Failed to update. Error: ${error.response.data.message || error.response.statusText}`);
//       } else {
//         alert('Failed to update. Please check input data. Error: ' + error.message);
//       }
//     }
//   };

//   const cancelbutton = () => {
//     localStorage.removeItem('selectedRoomData');
//     navigate('/app/bookings');
//   };

//   return (
//     <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
//       <div style={{ padding: '1rem', paddingBottom: 0 }}>
//         <Group>
//           <Text fz={22} fw={600}>Extend Bookings</Text>
//         </Group>
//       </div>
//       <div style={{ padding: '1rem', paddingBottom: 0 }}>
//       <Text fz={18} fw={600}>Room Number: {roomNo || 'No room selected'}</Text>
//       </div>
//       <form onSubmit={form.onSubmit(handleSubmit)}>
//         <div style={{ maxWidth: '500px', margin: '8px auto', padding: '17px', paddingBottom: '20px' }}>
//           <div style={{ display: 'flex', flexDirection: 'row' }}>
//             <DatePickerInput
//               label="Check-in Date"
//               placeholder="YYYY-MM-DD"
//               value={date}
//               onChange={(value) => {
//                 setDate(value);
//                 form.setFieldValue('checkInDate', value ? value.toISOString().split('T')[0] : '');
//               }}
//               style={{ width: '55%' }}
//             />
//             <TimeInput
//               label="Check-in Time"
//               value={form.values.checkInTime}
//               {...form.getInputProps('checkInTime')}
//               style={{ marginLeft: '4px', width: '55%' }}
//             />
//           </div>
//           <div style={{ display: 'flex', flexDirection: 'row' }}>
//             <DatePickerInput
//               label="Check-out Date"
//               value={outdate}
//               onChange={(value) => {
//                 setOutdate(value);
//                 form.setFieldValue('checkOutDate', value ? value.toISOString().split('T')[0] : '');
//               }}
//               style={{ width: '55%' }}
//             />
//             <TimeInput
//               label="Check-out Time"
//               value={form.values.checkOutTime}
//               {...form.getInputProps('checkOutTime')}
//               style={{ marginLeft: '4px', width: '55%', }}
//             />
//           </div>
//           <TextInput
//             label="Tariff (Amount per Day)"
//             placeholder="Enter Tariff"
//             value={form.values.tarrif}
//             onChange={(e) => form.setFieldValue('tarrif', e.target.value)}
//             style={{ marginTop: '10px' }}
//             required
//           />
//           <TextInput
//             label="Paid Amount"
//             placeholder="Enter Paid Amount"
//             value={form.values.paidamount}
//             onChange={(e) => form.setFieldValue('paidamount', e.target.value)}
//             style={{ marginTop: '10px' }}
//             required
//           />
//           <Select
//             label="Mode of Payment"
//             placeholder="Choose Mode"
//             value={form.values.modeOfPayment}
//             onChange={(value) => form.setFieldValue('modeOfPayment', value)}
//             data={['Credit Card', 'Cash', 'UPI']}
//             style={{ marginTop: '10px' }}
//             required
//           />
//           <TextInput
//             label="Balance Amount"
//             value={form.values.balanceamount}
//             readOnly
//             style={{ marginTop: '10px' }}
//           />
//           <TextInput
//             label="Total Amount"
//             value={form.values.totalamount}
//             readOnly
//             style={{ marginTop: '10px' }}
//           />
//           <TextInput
//             label="Duration (Days)"
//             value={form.values.duration}
//             readOnly
//             style={{ marginTop: '10px' }}
//           />
//           <Group position="right" mt="lg">
//             <Button variant="light" color="red" onClick={cancelbutton}>
//               Cancel
//             </Button>
//             <Button type="submit">Save</Button>
//           </Group>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ExtendBooking;
import React, { useState, useEffect } from 'react';
import { TextInput, Button, Group, Text, Select } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { DatePickerInput, TimeInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import client from '../../API/api';

const ExtendBooking = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(null);
  const [outdate, setOutdate] = useState(null);
  const [roomNo, setRoomNo] = useState('');

  const form = useForm({
    initialValues: {
      checkOutDate: '',
      checkOutTime: '',
      checkInDate: '',
      checkInTime: '',
      paidamount: '',
      tarrif: '',
      modeOfPayment: '',
      duration: '',
      totalamount: '',
      pay: '', // Added field for "Pay"
      bookingId: '',
    },
    validate: {
      checkInDate: (value) => (value ? null : 'Check-in Date is required'),
      checkInTime: (value) => (value ? null : 'Check-in Time is required'),
      checkOutDate: (value) => (value ? null : 'Check-out Date is required'),
      checkOutTime: (value) => (value ? null : 'Check-out Time is required'),
      paidamount: (value) => (value ? null : 'Paid Amount is required'),
      tarrif: (value) => (value ? null : 'Tariff is required'),
      modeOfPayment: (value) => (value ? null : 'Mode of Payment is required'),
    },
  });

  useEffect(() => {
    const selectedRoom = JSON.parse(localStorage.getItem('selectedRoomData'));

    if (selectedRoom) {
      const {
        roomNo,
        bookingId,
        bookingDetails: {
          checkInDateTime,
          checkOutDateTime,
          tarrif,
          paidAmount,
          pmytotalAmount,
          modeOfPayment,
          numOfDays,
        },
      } = selectedRoom;

      // Parse and format the dates/times
      const checkInDate = checkInDateTime.split('T')[0];
      const checkInTime = checkInDateTime.split('T')[1].slice(0, 5);
      const checkOutDate = checkOutDateTime.split('T')[0];
      const checkOutTime = checkOutDateTime.split('T')[1].slice(0, 5);

      // Update state and form fields
      setRoomNo(roomNo);
      setDate(new Date(checkInDateTime));
      setOutdate(new Date(checkOutDateTime));

      form.setValues({
        bookingId: bookingId || '',
        checkInDate,
        checkInTime,
        checkOutDate,
        checkOutTime,
        paidamount: paidAmount || '',
        tarrif: tarrif || '',
        totalamount: pmytotalAmount || '',
        modeOfPayment: modeOfPayment || '',
        duration: numOfDays || '',
        pay: '', // Pay is left empty
      });
    }
  }, []);

  // Calculate number of days and total amount when dates are changed
  useEffect(() => {
    if (form.values.checkInDate && form.values.checkOutDate && form.values.tarrif) {
      const checkInDate = new Date(form.values.checkInDate);
      const checkOutDate = new Date(form.values.checkOutDate);

      // Calculate the difference in time
      const diffTime = checkOutDate - checkInDate;

      // Calculate the number of days (rounded up)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      // Calculate the total amount based on tariff and duration
      const totalAmount = diffDays * parseFloat(form.values.tarrif || 0);

      // Set duration and total amount in the form
      form.setFieldValue('duration', diffDays);
      form.setFieldValue('totalamount', totalAmount);
    }
  }, [form.values.checkInDate, form.values.checkOutDate, form.values.tarrif]);

  const combineDateTime = (date, time) => `${date}T${time}`;

  const handleSubmit = async (values) => {
    const selectedRoom = JSON.parse(localStorage.getItem('selectedRoomData'));

    if (!selectedRoom) {
      alert('No room selected. Please select a room.');
      return;
    }

    const combinedBookingData = {
      bookingId: values.bookingId,
      checkInDateTime: combineDateTime(values.checkInDate, values.checkInTime),
      checkOutDateTime: combineDateTime(values.checkOutDate, values.checkOutTime),
      duration: values.duration,
      modeOfPayment: values.modeOfPayment,
      paidAmount: values.paidamount,
      pay: values.pay,
      pmytotalAmount: values.totalamount,
      roomNo: selectedRoom.roomNo,
      tarrif: values.tarrif,
    };

    const combinedRoomStatusData = {
      roomStatusId: selectedRoom.roomStatusId,
      roomId: selectedRoom.roomId,
      bookingId: values.bookingId,
      primaryGuestId: selectedRoom.primaryGuestId,
      roomStatus: 'occupied',
      pmytotalAmount: values.totalamount,
      paidAmount: values.paidamount,
      // balanceAmount: values., // Balance logic removed
      checkOutDateTime: combineDateTime(values.checkOutDate, values.checkOutTime),
    };

    try {
      // Update booking data
      const bookingResponse = await client.put(
        `/bookings/updateBooking/${values.bookingId}`,
        combinedBookingData
      );
      console.log('Booking updated successfully:', bookingResponse.data);

      // Update room status
      const roomStatusResponse = await client.put(
        `/api/room-status/updateRoomStatus/${selectedRoom.roomStatusId}`,
        combinedRoomStatusData
      );
      console.log('Room status updated successfully:', roomStatusResponse.data);

      localStorage.removeItem('selectedRoomData');
      navigate('/app/bookings');
    } catch (error) {
      console.error('Error:', error);

      if (error.response) {
        alert(`Failed to update. Error: ${error.response.data.message || error.response.statusText}`);
      } else {
        alert('Failed to update. Please check input data. Error: ' + error.message);
      }
    }
  };

  const cancelbutton = () => {
    localStorage.removeItem('selectedRoomData');
    navigate('/app/bookings');
  };

  return (
    <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
      <div style={{ padding: '1rem', paddingBottom: 0 }}>
        <Group>
          <Text fz={22} fw={600}>Extend Bookings</Text>
        </Group>
      </div>
      <div style={{ padding: '1rem', paddingBottom: 0 }}>
        <Text fz={18} fw={600}>Room Number: {roomNo || 'No room selected'}</Text>
      </div>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <div style={{ maxWidth: '500px', margin: '8px auto', padding: '17px', paddingBottom: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <DatePickerInput
              label="Check-in Date"
              placeholder="YYYY-MM-DD"
              value={date}
              onChange={(value) => {
                setDate(value);
                form.setFieldValue('checkInDate', value ? value.toISOString().split('T')[0] : '');
              }}
              style={{ width: '55%' }}
            />
            <TimeInput
              label="Check-in Time"
              value={form.values.checkInTime}
              {...form.getInputProps('checkInTime')}
              style={{ marginLeft: '4px', width: '55%' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <DatePickerInput
              label="Check-out Date"
              value={outdate}
              onChange={(value) => {
                setOutdate(value);
                form.setFieldValue('checkOutDate', value ? value.toISOString().split('T')[0] : '');
              }}
              style={{ width: '55%' }}
            />
            <TimeInput
              label="Check-out Time"
              value={form.values.checkOutTime}
              {...form.getInputProps('checkOutTime')}
              style={{ marginLeft: '4px', width: '55%' }}
            />
          </div>
          <TextInput
            label="Tariff (Amount per Day)"
            placeholder="Enter Tariff"
            value={form.values.tarrif}
            onChange={(e) => form.setFieldValue('tarrif', e.target.value)}
            style={{ marginTop: '10px' }}
            required
          />
          <TextInput
            label="Paid Amount"
            placeholder="Enter Paid Amount"
            value={form.values.paidamount}
            readOnly
            onChange={(e) => form.setFieldValue('paidamount', e.target.value)}
            style={{ marginTop: '10px' }}
            required
          />
          <TextInput
            label="Pay"
            placeholder="Enter Payment Amount"
            value={form.values.pay}
            onChange={(e) => form.setFieldValue('pay', e.target.value)}
            style={{ marginTop: '10px' }}
          />
          <Select
            label="Mode of Payment"
            placeholder="Choose Mode"
            value={form.values.modeOfPayment}
            onChange={(value) => form.setFieldValue('modeOfPayment', value)}
            data={['Credit Card', 'Cash', 'UPI']}
            style={{ marginTop: '10px' }}
            required
          />
          <TextInput
            label="Total Amount"
            value={form.values.totalamount}
            readOnly
            style={{ marginTop: '10px' }}
          />
          <TextInput
            label="Duration (Days)"
            value={form.values.duration}
            readOnly
            style={{ marginTop: '10px' }}
          />
          <Group position="right" mt="lg">
            <Button variant="light" color="red" onClick={cancelbutton}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </Group>
        </div>
      </form>
    </div>
  );
};

export default ExtendBooking;