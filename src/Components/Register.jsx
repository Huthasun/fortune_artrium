




// import React, { useState } from 'react';
// import { TextInput, Select, Button } from '@mantine/core';
// import { BrowserRouter as Router, useNavigate } from 'react-router-dom'; // Import BrowserRouter and useNavigate
// import MainLayout from '../MainLayout/MainLayout';

// function Register() {
//   // const navigate = useNavigate();
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
//     // Redirect to departure page
//     // navigate('/departure'); // Using navigate instead of history.push
//   };

//   return (
//     <Router> {/* Wrap your component with Router */}
//       <div style={{ maxWidth: 350, margin: '0 auto', padding: "30px", paddingTop: "10px" }}>
//         <MainLayout/>
//         <h3 style={{ textAlign: "center" }}>Booking Form</h3>
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
//     </Router>
//   );
// }

// export default Register;


import React, { useState } from 'react';
import { TextInput, Select, Button } from '@mantine/core';

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
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., sending data to backend
    console.log(formData);
    // Further processing logic here
  };

  return (
    <div style={{ maxWidth: 350, margin: '0 auto', padding: "30px", paddingTop: "10px" }}>
      
      <h3 style={{ textAlign: "center" }}>Booking Form</h3>
      <TextInput
        label="Name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(event) => handleInputChange('name', event.target.value)}
        required
      />
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
        data={['101', '102', '103']} // Add more options as needed
        value={formData.roomNumber}
        onChange={(value) => handleInputChange('roomNumber', value)}
        required
      />
      <Select
        label="Number of Guests"
        placeholder="Select number of guests"
        data={['1', '2', '3']} // Add more options as needed
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
      <Button onClick={handleSubmit} style={{ marginTop: '11px', marginBottom: '5px' }}>Submit</Button>
    </div>
  );
}

export default Register;
