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

// import React, { useState } from 'react';
// import { TextInput, Select, Button, ActionIcon, Text, Card, Group } from '@mantine/core';
// import { useNavigate } from 'react-router-dom';
// import Header from '../Header';
// import { useRecoilValue } from 'recoil';
// import { roomAtom } from '../../Store/Store';
// import { BiArrowBack } from 'react-icons/bi';
// import Footer1 from '../Footer1';



// const Newregiter = () => {
//   const [bookingType, setBookingType] = useState('');
//   const [roomNumber, setRoomNumber] = useState('');
//   const [numGuests, setNumGuests] = useState(1);
//   const [numAdults, setNumAdults] = useState(1);
//   const [numKids, setNumKids] = useState(0);
//   // const [error, setError] = useState('');

//   const navigate = useNavigate();
//   const roomDetails = useRecoilValue(roomAtom)
//        const [selectedOption, setSelectedOption] = useState('Booking');
//   console.log(roomDetails);
//   const handleInputChange = (field, value) => {
//     // setFormData({ ...formData, [field]: value });
//   };



 
//   const handleSubmit = () => {
//     // Perform validation here if needed
//     // if (!bookingType || !numGuests || !numAdults || !numKids) {
//     //   setError('Please fill out all fields.');
//     //   return;
//     // } 
//     console.log({
//       bookingType,
//       roomNumber,
//       numGuests,
//       numAdults,
//       numKids
//     });
//     navigate('/app/guestdetails', { state: { numGuests } }); // Pass numGuests as state
//   };

//   return (
//     <div style={{ maxWidth: '100%', boxSizing: 'border-box', boxShadow:"" }}>
//       {/* <Header />  */}

//       <div style={{padding:"1rem",paddingBottom:0}}>
//         <Group>
//       {/* <ActionIcon size={"sm"} onClick={()=>navigate(-1)}><BiArrowBack/></ActionIcon> */}
//       <Text fz={22} fw={600}>Customer Registration</Text>
//       </Group>
//       </div>
     
//       <div  style={{ maxWidth: '500px',padding: '1rem',paddingBottom:"0"}}>
      
//         <form>
//         <Text fz={18} fw={600}pb={15}>Room.No-{window.localStorage.getItem('roomNo')}</Text>
//         {/* {error && <Text color="red" pb={15}>{error}</Text>} */}
//           <Select
//             label="Booking Type"
//             data={['Walk-In','Online']}
//             value={bookingType}
//             onChange={setBookingType}
//             placeholder="Select booking type"
//             required
//             style={{marginBottom:15}}
//           />
//           {/* <TextInput
//             label="Room Number"
//             value={roomNumber}
//             onChange={event => setRoomNumber(event.currentTarget.value)}
//             placeholder="Enter room number"
//             required
//           /> */}
//           <div style={{display:'flex',justifyContent:"space-around",}}>
//           <TextInput
//             label="Number of Kids"
//             value={numGuests}
//             onChange={event => setNumGuests(event.currentTarget.value)}
//             placeholder="Enter number of guests"
//             required
//             style={{marginBottom:15,marginRight:"4px"}}
//           />
//           <TextInput
//             label="Number of Adults"
//             value={numAdults}
//             onChange={event => setNumAdults(event.currentTarget.value)}
//             placeholder="Enter number of adults"
//             required
//             style={{marginBottom:15,marginLeft:'4px'}}
//           />
//           </div>
//           <TextInput
//             label="Number of Guests"
//             value={numKids}
//             onChange={event => setNumKids(event.currentTarget.value)}
//             placeholder="Enter number of kids"
//             required
//             style={{marginBottom:15}}
//           />
//           <Button onClick={handleSubmit} style={{ marginTop: '17px', width: "35%" ,backgroundColor:"#FE0000"}}>Next</Button>
//         </form>
//         {/* <Footer1/> */}
//       </div>
//     </div>
//   );
// };

// export default Newregiter;
// import React, { useState } from 'react';
// import { TextInput, Select, Button, Text, Group } from '@mantine/core';
// import { useNavigate } from 'react-router-dom';
// import { useForm } from '@mantine/form';
// import client from '../../API/api';

// const Newregister = () => {
//   const navigate = useNavigate();
//   // const roomDetails = useRecoilValue(roomAtom);

//   const form = useForm({
//     initialValues: {
//       bookingType: '',
//       numAdults: 0,
//       numKids: 0,
//       numGuests: 0, // Make sure numGuests is included in initial values
//     },
//     validate: {
//       bookingType: (value) => (value ? null : 'Select booking type'),
//       numAdults: (value) => (value > 0 ? null : 'Number of adults must be at least 1'),
//       numKids: (value) => (value >= 0 ? null : 'Number of kids cannot be negative'),
//     },
//   });

//   const handleNumAdultsChange = (value) => {
//     const adults = parseInt(value, 10) || 0;
//     form.setFieldValue('numAdults', adults);
//     form.setFieldValue('numGuests', adults + form.values.numKids);
//   };

//   const handleNumKidsChange = (value) => {
//     const kids = parseInt(value, 10) || 0;
//     form.setFieldValue('numKids', kids);
//     form.setFieldValue('numGuests', form.values.numAdults + kids);
//   };

  
//   const handleSubmit =  (values) => {
//     try {
//       // const response =  client.post('/create-booking', values);
//       // console.log('Data saved successfully:', response.data);
//       window.localStorage.setItem('numGuests', values.numGuests);
//       window.localStorage.setItem('bookingType', values.bookingType);
//       window.localStorage.setItem('numAdults', values.numAdults);
//       window.localStorage.setItem('numKids', values.numKids);
//       navigate('/app/guestdetails', { state: { numGuests: values.numGuests } });
//     } catch (error) {
//       console.error('Error creating booking:', error);
//     }
//   };
//   return (
//     <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
//       <div style={{ padding: '1rem', paddingBottom: 0 }}>
//         <Group>
//           <Text fz={22} fw={600}>Customer Registration</Text>
//         </Group>
//       </div>

//       <div style={{ maxWidth: '500px', padding: '1rem', paddingBottom: '0' }}>
//         <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
//           <Text fz={18} fw={600} pb={15}>Room.No-{window.localStorage.getItem('roomNo')}</Text>
//           <Select
//             label="Booking Type"
//             data={['Walk-In', 'Online']}
//             value={form.values.bookingType}
//             onChange={(value) => form.setFieldValue('bookingType', value)}
//             placeholder="Select booking type"
//             required
//             error={form.errors.bookingType}
//             style={{ marginBottom: 15 }}
//           />
//           <div style={{ display: 'flex', justifyContent: "space-around" }}>
//             <TextInput
//               label="Number of Adults"
//               value={form.values.numAdults}
//               onChange={(event) => handleNumAdultsChange(event.currentTarget.value)}
//               placeholder="Enter number of adults"
//               required
//               error={form.errors.numAdults}
//               style={{ marginBottom: 15, marginRight: "4px" }}
//             />
//             <TextInput
            
//               label="Number of Kids"
//               value={form.values.numKids}
//               onChange={(event) => handleNumKidsChange(event.currentTarget.value)}
//               placeholder="Enter number of kids"
//               error={form.errors.numKids}
//               style={{ marginBottom: 15, marginLeft: '4px' }}
//             />
//           </div>
//           <TextInput
//             label="Number of Guests"
//             value={form.values.numAdults + form.values.numKids}
//             placeholder="Enter number of guests"
//             readOnly
//             style={{ marginBottom: 15 }}
//           />
//           <Button type="submit" style={{ marginTop: '17px', width: "35%", backgroundColor: "#FE0000" }}>Next</Button>
//         </form>
//       </div>
//       {/* <GuestRecords numGuests={form.values.numGuests} /> */}
//     </div>
//   );
// };

// export default Newregister;




import React, { useEffect } from 'react';
import { TextInput, Select, Button, Text, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';

const Newregister = () => {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      bookingType: localStorage.getItem('bookingType') || '',
      numAdults: parseInt(localStorage.getItem('numAdults'), 10) || 0,
      numKids: parseInt(localStorage.getItem('numKids'), 10) || 0,
      numGuests: parseInt(localStorage.getItem('numGuests'), 10) || 0,
    },
    validate: {
      bookingType: (value) => (value ? null : 'Select booking type'),
      numAdults: (value) => (value > 0 ? null : 'Number of adults must be at least 1'),
      numKids: (value) => (value >= 0 ? null : 'Number of kids cannot be negative'),
    },
  });

  const handleNumAdultsChange = (value) => {
    const adults = parseInt(value, 10) || 0;
    form.setFieldValue('numAdults', adults);
    form.setFieldValue('numGuests', adults + form.values.numKids);
  };

  const handleNumKidsChange = (value) => {
    const kids = parseInt(value, 10) || 0;
    form.setFieldValue('numKids', kids);
    form.setFieldValue('numGuests', form.values.numAdults + kids);
  };

  const handleSubmit = (values) => {
    try {
      // Save form values to local storage
      localStorage.setItem('numGuests', values.numGuests);
      localStorage.setItem('bookingType', values.bookingType);
      localStorage.setItem('numAdults', values.numAdults);
      localStorage.setItem('numKids', values.numKids);

      // Navigate to the next page
      navigate('/app/guestdetails', { state: { numGuests: values.numGuests } });
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  // Update form values from local storage on component mount
  useEffect(() => {
    form.setValues({
      bookingType: localStorage.getItem('bookingType') || '',
      numAdults: parseInt(localStorage.getItem('numAdults'), 10) || 0,
      numKids: parseInt(localStorage.getItem('numKids'), 10) || 0,
      numGuests: parseInt(localStorage.getItem('numGuests'), 10) || 0,
    });
  }, []);

  return (
    <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
      <div style={{ padding: '1rem', paddingBottom: 0 }}>
        <Group>
          <Text fz={22} fw={600}>Customer Registration</Text>
        </Group>
      </div>

      <div style={{ maxWidth: '500px', padding: '1rem', paddingBottom: '0' }}>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Text fz={18} fw={600} pb={15}>Room.No-{localStorage.getItem('roomNo')}</Text>
          <Select
            label="Booking Type"
            data={['Walk-In', 'Online']}
            value={form.values.bookingType}
            onChange={(value) => form.setFieldValue('bookingType', value)}
            placeholder="Select booking type"
            required
            error={form.errors.bookingType}
            style={{ marginBottom: 15 }}
          />
          <div style={{ display: 'flex', justifyContent: "space-around" }}>
            <TextInput
              label="Number of Adults"
              value={form.values.numAdults}
              onChange={(event) => handleNumAdultsChange(event.currentTarget.value)}
              placeholder="Enter number of adults"
              required
              error={form.errors.numAdults}
              style={{ marginBottom: 15, marginRight: "4px" }}
            />
            <TextInput
              label="Number of Kids"
              value={form.values.numKids}
              onChange={(event) => handleNumKidsChange(event.currentTarget.value)}
              placeholder="Enter number of kids"
              error={form.errors.numKids}
              style={{ marginBottom: 15, marginLeft: '4px' }}
            />
          </div>
          <TextInput
            label="Number of Guests"
            value={form.values.numAdults + form.values.numKids}
            placeholder="Enter number of guests"
            readOnly
            style={{ marginBottom: 15 }}
          />
          <Button type="submit" style={{ marginTop: '17px', width: "35%", backgroundColor: "#FE0000" }}>Next</Button>
        </form>
      </div>
    </div>
  );
};

export default Newregister;
