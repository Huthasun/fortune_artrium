// import React, { useState } from 'react';
// import { TextInput, Select, Button,Image ,Avatar} from '@mantine/core';
// import '../../src/Styling.css';
// import Fortune from '../assets/fj.jpg';
// import Footer1 from './Footer1';
// // import Icon from '../assets/Ellipse 7.jpg'



// function Register() {
//   const [formData, setFormData] = useState({
//     name: '',
//     bookingType: '',
//     roomNumber: '',
//     guests: '',
//     checkInDate: '',
//     checkInTime: '',
//     duration: 1,
//     price: 0,
//   });

//   const handleInputChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleSubmit = () => {
//     // Handle form submission, e.g., sending data to backend
//     console.log(formData);
//     // Further processing logic here
//   };

//   return (
//     <div>
//       <div style={{ backgroundColor: 'white', width:"375px", height:"48px",top:"44px",textAlign: 'center' }}>
//         {/* <h1>Booking Form</h1> */}
//         <div style={{display:"flex",justifyContent:"space-between"}}>
//         <Image src={Fortune} alt='logo' style={{ height:'100px',width:"17%",marginLeft:"10px"}} />
//         {/* <Image src={Icon} alt='logo' style={{ height:'10px',width:"17%",marginLeft:"10px",top:"10px"}} /> */}
//         <Avatar color="orange" radius="xl" size={47} style={{marginRight:"10px"}}>F</Avatar>

//         </div>
        
//       </div>
//       <div style={{ maxWidth: 350, margin: '0 auto', padding: "30px", paddingTop: "10px" ,alignItems:"center"}}>
//         <h1 style={{display:"flex",justifyContent:"center"}}>Front desk</h1>
//         <TextInput
//           label="Name"
//           placeholder="Enter your name"
//           value={formData.name}
//           onChange={(event) => handleInputChange('name', event.target.value)}
//           required
//         />
//         <Select
//           label="Booking Type"
//           placeholder="Select booking type"
//           data={['Standard', 'Deluxe', 'Suite']}
//           value={formData.bookingType}
//           onChange={(value) => handleInputChange('bookingType', value)}
//           required
//         />
//         <Select
//           label="Room Number"
//           placeholder="Select room number"
//           data={['101', '102', '103']} // Add more options as needed
//           value={formData.roomNumber}
//           onChange={(value) => handleInputChange('roomNumber', value)}
//           required
//         />
//         <Select
//           label="Number of Guests"
//           placeholder="Select number of guests"
//           data={['1', '2', '3']} // Add more options as needed
//           value={formData.guests}
//           onChange={(value) => handleInputChange('guests', value)}
//           required
//         />
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <TextInput
//             label="Check-in Date"
//             placeholder="YYYY-MM-DD"
//             pattern="\d{4}-\d{2}-\d{2}"
//             value={formData.checkInDate}
//             onChange={(event) => handleInputChange('checkInDate', event.target.value)}
//             required
//           />
//           <TextInput
//             label="Check-in Time"
//             placeholder="HH:MM"
//             pattern="\d{2}:\d{2}"
//             value={formData.checkInTime}
//             onChange={(event) => handleInputChange('checkInTime', event.target.value)}
//             required
//           />
//         </div>
//         <TextInput
//           label="Number of Days Planned"
//           placeholder="Enter number of days"
//           type="number"
//           min={1}
//           value={formData.duration}
//           onChange={(event) => handleInputChange('duration', parseInt(event.target.value))}
//           required
//         />
//         <TextInput
//           label="Price"
//           placeholder="Price"
//           value={formData.price}
//           readOnly
//         />
//         <Button onClick={handleSubmit} style={{ marginTop: '11px', marginBottom: '5px' }}>Submit</Button>
//       </div>
      
//       <Footer1/>
       
      

//     </div>
//   );
// }

// export default Register;

import React, { useState } from 'react';
import { TextInput, Select, Button,  Radio ,Text, } from '@mantine/core';
import Header from './Header';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    bookingType: '',
    roomNumber: '',
    guests: '',
    checkInDate: '',
    checkInTime: '',
    duration: 1,
    price: 0,
    gender: '',
    phoneNumber: '',
    identityProof: '',
    idNumber: '',
    address: '',
    numberOfAdults: '',
    numberOfKids: '',
    checkOutDate: '',
    checkOutTime: '',
    amount: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
    // Further processing logic here
  };

  return (
    <div>
      {/* <div style={{ backgroundColor: '#fff', width: "375px", height: "70px", top: "44px", display: "flex", justifyContent: "space-between" ,borderBottom:"black"}}>
          <Image src={Fortune} alt='logo' style={{ height: '70px ', width: "17%", marginLeft: "10px", padding:"10px" }} />
          <Avatar color="orange" radius="xl" size={60}   style={{ marginRight: "10px", padding:"10px"}}>F</Avatar>
      </div> */}
      <Header/>
      <div style={{ maxWidth: 350, margin: '0 auto', padding: "30px", paddingTop: "10px", alignItems: "center" }}>
        <h1 style={{ display: "flex", justifyContent: "center" }}>Customer Register</h1>
        {/* <TextInput
          label="Name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(event) => handleInputChange('name', event.target.value)}
          required
        /> */}
        <Select
          label="Booking Type"
          placeholder="Select booking type"
          data={['Standard', 'Deluxe', 'Suite']}
          value={formData.bookingType}
          onChange={(value) => handleInputChange('bookingType', value)}
          required
        />
        <Select
          label="Room Number"
          placeholder="Select room number"
          data={['101', '102', '103']}
          value={formData.roomNumber}
          onChange={(value) => handleInputChange('roomNumber', value)}
          required
        />
        <Select
          label="Number of Guests"
          placeholder="Select number of guests"
          data={['1', '2', '3']}
          value={formData.guests}
          onChange={(value) => handleInputChange('guests', value)}
          required
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TextInput
            label="Check-in Date"
            placeholder="YYYY-MM-DD"
            pattern="\d{4}-\d{2}-\d{2}"
            value={formData.checkInDate}
            onChange={(event) => handleInputChange('checkInDate', event.target.value)}
            required
          />
          <TextInput
            label="Check-in Time"
            placeholder="HH:MM"
            pattern="\d{2}:\d{2}"
            value={formData.checkInTime}
            onChange={(event) => handleInputChange('checkInTime', event.target.value)}
            required
          />
        </div>
        <TextInput
          label="Number of Days Planned"
          placeholder="Enter number of days"
          type="number"
          min={1}
          value={formData.duration}
          onChange={(event) => handleInputChange('duration', parseInt(event.target.value))}
          required
        />
        <TextInput
          label="Price"
          placeholder="Price"
          value={formData.price}
          readOnly
        />
        <Text fw={500}>Gender</Text>
        <div style={{display:"flex",justifyContent:'flex-start',alignItems:'center',height:"46px"}}>
        <Radio
        label="male"
        value="male"
        checked={formData.gender === 'male'}
        onChange={() => handleInputChange('gender', 'male')}
        required
      />
      <Radio style={{padding:"20px"}}
        label="Female"
        value="female"
        checked={formData.gender === 'female'}
        onChange={() => handleInputChange('gender', 'female')}
        required
      />
      </div>
        <TextInput
          label="Phone Number"
          placeholder="Enter phone number"
          value={formData.phoneNumber}
          onChange={(event) => handleInputChange('phoneNumber', event.target.value)}
          required
        />
        <Select
          label="Identity Proof"
          placeholder="Select identity proof"
          data={['Passport', 'ID Card', 'Driving License']}
          value={formData.identityProof}
          onChange={(value) => handleInputChange('identityProof', value)}
          required
        />
        <TextInput
          label="ID Number"
          placeholder="Enter ID number"
          value={formData.idNumber}
          onChange={(event) => handleInputChange('idNumber', event.target.value)}
          required
        />
        <TextInput
          label="Address"
          placeholder="Enter address"
          value={formData.address}
          onChange={(event) => handleInputChange('address', event.target.value)}
          required
        />
        <Select
          label="Number of Adults"
          placeholder="Select number of adults"
          data={['1', '2', '3']}
          value={formData.numberOfAdults}
          onChange={(value) => handleInputChange('numberOfAdults', value)}
          required
        />
        <Select
          label="Number of Kids"
          placeholder="Select number of kids"
          data={['0', '1', '2', '3']}
          value={formData.numberOfKids}
          onChange={(value) => handleInputChange('numberOfKids', value)}
          required
        />
        <TextInput
          label="Check-out Date"
          placeholder="YYYY-MM-DD"
          pattern="\d{4}-\d{2}-\d{2}"
          value={formData.checkOutDate}
          onChange={(event) => handleInputChange('checkOutDate', event.target.value)}
          required
          imageUrl="../assets/calender.jpg"
          
        />
        <TextInput
          label="Check-out Time"
          placeholder="HH:MM"
          pattern="\d{2}:\d{2}"
          value={formData.checkOutTime}
          onChange={(event) => handleInputChange('checkOutTime', event.target.value)}
          required
        />
        <TextInput
          label="Amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={(event) => handleInputChange('amount', event.target.value)}
          required
        />
        <Button onClick={handleSubmit} style={{ marginTop: '11px', marginBottom: '5px' }}>Submit</Button>

        
      </div>
      {/* <Footer1 /> */}
      
    </div>
    
  );
}

export default Register;


