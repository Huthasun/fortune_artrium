// import React, { useState } from 'react';
// import { Card, TextInput, Select, Textarea,Radio,Text,Button } from '@mantine/core';
// import { useNavigate } from 'react-router-dom';
// import Header from '../Header';
// // import { useState } from 'react';
// const RegisterationCard = () => {
//   const navigate = useNavigate();
  
//   const [formData, setFormData] = useState({
//     gender:'',
//   })
//   const handleInputChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const handleSubmit = () => {
//     console.log(formData);
//     // Further processing logic here
//     navigate('/submitdetails');
//   };
 
  
//   return (
//     <div style={{ maxWidth: '100%',  boxSizing: 'border-box' }}>
//       <Header/>
//       <Card style={{
//         backgroundColor:"transparent"
//       }}>
//       <TextInput
//         label="Guest Name"
//         placeholder="Enter guest name"
//         required
//         // variant="filled"
//         style={{ marginBottom: 15 }}
//       />
//       <Text weight={500} required>Gender</Text>
//        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' ,marginRight:"45%",padding:"3%"}}>
//           <Radio
//             label="Male"
//             value="male"
//             checked={formData.gender === 'male'}
//             onChange={() => handleInputChange('gender', 'male')}
//             required
//           />
//           <Radio
//             label="Female"
//             value="female"
//             checked={formData.gender === 'female'}
//             onChange={() => handleInputChange('gender', 'female')}
//             required
//           />
//         </div>
//       <TextInput
//         label="Phone Number"
//         placeholder="Enter phone number"
//         type="tel"
//         required
//         // variant="filled"
//         style={{ marginBottom: 15 }}
//       />
//       <Select
//         label="Identity Proof"
//         placeholder="Select identity proof"
//         data={[
//           { label: 'Driver\'s License', value: 'drivers_license' },
//           { label: 'Passport', value: 'passport' },
//           { label: 'National ID', value: 'national_id' },
//         ]}
//         style={{ marginBottom: 15 }}
//       />
//       <TextInput
//         label="ID Number"
//         placeholder="Enter ID number"
//         required
//         // variant="filled"
//         style={{ marginBottom: 15 }}
//       />
//       <Textarea
//         label="Address"
//         placeholder="Enter guest address"
//         required
//         // variant="filled"
//         style={{ marginBottom: 15 }}
//       />
//       <Button onClick={handleSubmit} style={{ marginTop: '2px',width:"35%" }}>Next</Button>
//     </Card>
//     </div>
//   )
// }

// export default RegisterationCard
// import React, { useState } from 'react';
// import { Card, TextInput, Select, Textarea, Radio, Text, Button, Group, ActionIcon, } from '@mantine/core';
// import { useNavigate, useLocation } from 'react-router-dom';
// import Header from '../Header';
// import { useRecoilValue } from 'recoil';
// import { roomAtom } from '../../Store/Store';
// import { BiArrowBack } from 'react-icons/bi';

// const RegistrationCard = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { numGuests } = location.state || { numGuests: 1 }; // Default to 1 if not provided

  

//   const [formData, setFormData] = useState(
//     Array.from({ length: numGuests }, () => ({
//       guestName: '',
//       gender: '',
//       phoneNumber: '',
//       identityProof: '',
//       idNumber: '',
//       address: ''
//     }))
//   );

//   // const handleInputChange = (index, field, value) => {
//   //   const newFormData = [...formData];
//   //   newFormData[index][field] = value;
//   //   setFormData(newFormData);
//   // };
//   const roomDetails = useRecoilValue(roomAtom)
//   const [selectedOption, setSelectedOption] = useState('Booking');
// console.log(roomDetails);
// const handleInputChange = (field, value) => {
// // setFormData({ ...formData, [field]: value });
// };

//   const handleSubmit = () => {
//     console.log(formData);
//     // Further processing logic here
//     navigate('/submitdetails');
//   };

//   return (
//     <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
//       <Header />
//       <div style={{padding:"1rem",paddingBottom:0}}>
//         <Group>
//       {/* <ActionIcon size={"sm"} onClick={()=>navigate(-1)}><BiArrowBack/></ActionIcon> */}
//       <Text fz={22} fw={600}>Guest details</Text>
//       </Group>
//       </div>
//       <Card style={{ backgroundColor: "transparent", marginBottom: '' }}>
     
//         <form>
        
//         <Text fz={18} fw={600}pb={15}>Room.No-{roomDetails.roomNo}</Text>
//         {formData.map((guest, index) => (
//        <div  key={index}>
//           <TextInput
//             label={`Guest Name ${index + 1}`}
//             placeholder="Enter guest name"
//             value={guest.guestName}
//             onChange={(e) => handleInputChange(index, 'guestName', e.currentTarget.value)}
//             required
//             style={{ marginBottom: 15 }}
//           />
//           <Text weight={500} required>Gender</Text>
//           <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', marginRight: "45%", padding: "3%" }}>
//             <Radio
//               label="Male"
//               value="male"
//               checked={guest.gender === 'male'}
//               onChange={() => handleInputChange(index, 'gender', 'male')}
//               required
//             />
//             <Radio
//               label="Female"
//               value="female"
//               checked={guest.gender === 'female'}
//               onChange={() => handleInputChange(index, 'gender', 'female')}
//               required
//             />
//           </div>
//           <TextInput
//             label="Phone Number"
//             placeholder="Enter phone number"
//             type="tel"
//             value={guest.phoneNumber}
//             onChange={(e) => handleInputChange(index, 'phoneNumber', e.currentTarget.value)}
//             required
//             style={{ marginBottom: 15 }}
//           />
//           <Select
//             label="Identity Proof"
//             placeholder="Select identity proof"
//             value={guest.identityProof}
//             onChange={(value) => handleInputChange(index, 'identityProof', value)}
//             data={[
//               { label: 'Driver\'s License', value: 'drivers_license' },
//               { label: 'Passport', value: 'passport' },
//               { label: 'National ID', value: 'national_id' },
//             ]}
//             style={{ marginBottom: 15 }}
//           />
//           <TextInput
//             label="ID Number"
//             placeholder="Enter ID number"
//             value={guest.idNumber}
//             onChange={(e) => handleInputChange(index, 'idNumber', e.currentTarget.value)}
//             required
//             style={{ marginBottom: 15 }}
//           />
//           <Textarea
//             label="Address"
//             placeholder="Enter guest address"
//             value={guest.address}
//             onChange={(e) => handleInputChange(index, 'address', e.currentTarget.value)}
//             required
//             style={{ marginBottom: 4 }}
//           />
//        </div>
//           ))}
//         <Button onClick={handleSubmit} style={{ marginTop: '15px', width: "35%",marginLeft:"0px",background:'red'}}>Next</Button>
//         </form>
//         </Card>
//     </div>
//   );
// }

// export default RegistrationCard;

// THIS CODE
// import React, { useState } from 'react';
// import { Card, TextInput, Select, Textarea, Radio, Text, Button, Group, ActionIcon } from '@mantine/core';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
// import { roomAtom } from '../../Store/Store';
// import { BiArrowBack } from 'react-icons/bi';

// const RegistrationCard = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { numGuests } = location.state || { numGuests: 1 }; // Default to 1 if not provided
//   const [formData, setFormData] = useState(
//     Array.from({ length: numGuests }, () => ({
//       guestName: '',
//       gender: '',
//       phoneNumber: '',
//       guestIdProof: '',
//       guestIdNumber: '',
//       address: '',
//       errors: {
//         guestName: '',
//         gender: '',
//         phoneNumber: '',
//         guestIdProof: '',
//         guestIdNumber: '',
//         address: ''
//       }
//     }))
//   );

//   const roomDetails = useRecoilValue(roomAtom);

//   const handleInputChange = (index, field, value) => {
//     const newFormData = [...formData];
//     newFormData[index][field] = value;
//     setFormData(newFormData);
//   };

//   const validateFields = () => {
//     let isValid = true;
//     const newFormData = formData.map((guest) => {
//       const errors = {
//         guestName: guest.guestName ? '' : 'Guest name is required',
//         gender: guest.gender ? '' : 'Gender is required',
//         phoneNumber: guest.phoneNumber && !/^\d{10}$/.test(guest.phoneNumber) ? 'Phone number must be a valid 10-digit number' : '',
//         guestIdProof: guest.guestIdProof ? '' : 'ID proof is required',
//         guestIdNumber: guest.guestIdNumber ? '' : 'ID number is required',
//         address: guest.address ? '' : 'Address is required'
//       };
//       if (Object.values(errors).some((error) => error)) isValid = false;
//       return { ...guest, errors };
//     });
//     setFormData(newFormData);
//     return isValid;
//   };

//   const handleSubmit = () => {
//     if (validateFields()) {
//       console.log(formData);
//       navigate('/app/submitdetails');
//     }
//   };

//   return (
//     <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
//       <div style={{ padding: '1rem', paddingBottom: 0 }}>
//         <Group>
//           {/* <ActionIcon size="sm" onClick={() => navigate(-1)}>
//             <BiArrowBack />
//           </ActionIcon> */}
//           <Text fz={22} fw={600}>Guest Details</Text>
//         </Group>
//       </div>
//       <Card style={{ backgroundColor: 'transparent', paddingBottom: '50px' }}>
//         <form>
//           <Text fz={18} fw={600} pb={15}>Room.No-{window.localStorage.getItem('roomNo')}</Text>
//           {formData.map((guest, index) => (
//             <div key={index}>
//               <TextInput
//                 label={`Guest Name ${index + 1}`}
//                 placeholder="Enter guest name"
//                 value={guest.guestName}
//                 onChange={(e) => handleInputChange(index, 'guestName', e.currentTarget.value)}
//                 required
//                 error={guest.errors.guestName}
//                 style={{ marginBottom: 15 }}
//               />
//               <Text weight={500} required>Gender</Text>
//               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', marginRight: '45%', padding: '3%' }}>
//                 <Radio
//                   label="Male"
//                   value="male"
//                   checked={guest.gender === 'male'}
//                   onChange={() => handleInputChange(index, 'gender', 'male')}
//                   required
//                 />
//                 <Radio
//                   label="Female"
//                   value="female"
//                   checked={guest.gender === 'female'}
//                   onChange={() => handleInputChange(index, 'gender', 'female')}
//                   required
//                 />
//               </div>
//               <Text color="red" size="sm">{guest.errors.gender}</Text>
//               <TextInput
//                 label="Phone Number"
//                 placeholder="Enter phone number"
//                 type="tel"
//                 value={guest.phoneNumber}
//                 onChange={(e) => handleInputChange(index, 'phoneNumber', e.currentTarget.value)}
//                 error={guest.errors.phoneNumber}
//                 style={{ marginBottom: 15 }}
//               />
//               <Select
//                 label="Guest ID Proof"
//                 placeholder="Select identity proof"
//                 value={guest.guestIdProof}
//                 onChange={(value) => handleInputChange(index, 'guestIdProof', value)}
//                 data={[
//                   { label: "Driver's License", value: 'drivers_license' },
//                   { label: 'Passport', value: 'passport' },
//                   { label: 'National ID', value: 'national_id' }
//                 ]}
//                 required
//                 error={guest.errors.guestIdProof}
//                 style={{ marginBottom: 15 }}
//               />
//               <TextInput
//                 label="Guest ID Number"
//                 placeholder="Enter ID number"
//                 value={guest.guestIdNumber}
//                 onChange={(e) => handleInputChange(index, 'guestIdNumber', e.currentTarget.value)}
//                 required
//                 error={guest.errors.guestIdNumber}
//                 style={{ marginBottom: 15 }}
//               />
//               <Textarea
//                 label="Address"
//                 placeholder="Enter guest address"
//                 value={guest.address}
//                 onChange={(e) => handleInputChange(index, 'address', e.currentTarget.value)}
//                 required
//                 error={guest.errors.address}
//                 style={{ marginBottom: 15 }}
//               />
//             </div>
//           ))}
//           <Button onClick={handleSubmit} style={{ marginTop: '15px', width: '35%', background: 'red' }}>Next</Button>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default RegistrationCard;

// import React, { useState } from 'react';
// import { Card, TextInput, Select, Textarea, Radio, Text, Button, Group, NumberInput } from '@mantine/core';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useRecoilValue } from 'recoil';
// import { roomAtom } from '../../Store/Store';
// import { useForm } from '@mantine/form';

// const RegistrationCard = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { numGuests } = location.state || { numGuests: 1 }; // Default to 1 if not provided

//   const form = useForm({
//     initialValues: {
//       guestName: '',
//       gender: '',
//       phoneNumber: '',
//       guestIdProof: '',
//       guestIdNumber: '',
//       address: ''
//     },
//     validate: {
//       guestName: (value) => (value ? null : 'Guest name is required'),
//       gender: (value) => (value ? null : 'Gender is required'),
//       phoneNumber: (value) => (value ? null : 'Phone number must be a valid 10-digit number'),
//       guestIdProof: (value) => (value ? null : 'ID proof is required'),
//       guestIdNumber: (value) => (value ? null : 'ID Number is required'),
//       address: (value) => (value ? null : 'Address is required')
//     }
//   });

//   const getMaxLength = () => {
//     switch (form.values.guestIdProof) {
//       case 'drivers_license':
//         return 16;
//       case 'passport':
//         return 8;
//       case 'addhar_id':
//         return 12;
//       default:
//         return null;
//     }
//   };

//   const roomDetails = useRecoilValue(roomAtom);

//   const handleSubmit = (values) => {
//     console.log('Form submitted:', values);
//     // handle form submission logic here
//   };

//   return (
//     <div style={{ maxWidth: '100%', boxSizing: 'border-box', position: 'relative' }}>
//       <div style={{ padding: '1rem', paddingBottom: 0 }}>
//         <Group>
//           <Text fz={22} fw={600}>Guest Details</Text>
//         </Group>
//       </div>
//       <Card style={{ backgroundColor: 'transparent', paddingBottom: '50px' }}>
//         <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
//         <Text fz={18} fw={600} pb={15}>Room.No-{window.localStorage.getItem('roomNo')}</Text>
//           <div>
//             <TextInput
//               label={`Guest Name ${index + 1}`}
//               placeholder="Enter guest name"
//               {...form.getInputProps('guestName')}
//               style={{ marginBottom: 15 }}
//             />
//             <Text weight={500}>Gender</Text>
//             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', marginRight: '45%', padding: '3%' }}>
//               <Radio
//                 label="Male"
//                 value="male"
//                 checked={form.values.gender === 'male'}
//                 onChange={() => form.setFieldValue('gender', 'male')}
//               />
//               <Radio
//                 label="Female"
//                 value="female"
//                 checked={form.values.gender === 'female'}
//                 onChange={() => form.setFieldValue('gender', 'female')}
//               />
//             </div>
//             <NumberInput
//               hideControls
//               label="Phone Number"
//               placeholder="Enter Phone Number"
//               maxLength={10}
//               {...form.getInputProps('phoneNumber')}
//               style={{ marginBottom: 15 }}
//             />
//             <Select
//               label="Guest ID Proof"
//               placeholder="Select identity proof"
//               data={[
//                 { label: "Driver's License", value: 'drivers_license' },
//                 { label: 'Passport', value: 'passport' },
//                 { label: 'Addhar ID', value: 'addhar_id' }
//               ]}
//               {...form.getInputProps('guestIdProof')}
//               style={{ marginBottom: 15 }}
//             />
//             <NumberInput
//               hideControls
//               label="Guest ID Number"
//               placeholder="Enter ID number"
//               maxLength={getMaxLength()}
//               {...form.getInputProps('guestIdNumber')}
//               style={{ marginBottom: 15 }}
//             />
//             <Textarea
//               label="Address"
//               placeholder="Enter guest address"
//               {...form.getInputProps('address')}
//               style={{ marginBottom: 15 }}
//             />
//           </div>
          // <Button type="submit" style={{ marginTop: '15px', width: '35%', background: 'red' }}>Submit</Button>
//         </form>
//       </Card>
//     </div>
//   );
// };

// export default RegistrationCard;


// import React, { useEffect, useState } from 'react';
// import { Card, TextInput, Select, Textarea, Radio, Text, Button, Group, Notification, Overlay, NumberInput } from '@mantine/core';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useRecoilState, useRecoilValue } from 'recoil';
// // import { guestAtom } from '../../Store/Store';
// import { BiArrowBack } from 'react-icons/bi';
// import { useForm, hasLength } from '@mantine/form';
// import axios from 'axios';
// import { IconCheck, IconX } from '@tabler/icons-react';
// import {yupResolver} from '@mantine/core'


// const RegistrationCard= () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { numGuests } = location.state || { numGuests: 1 }; // Default to 1 if not provided
//   const [message, setMessage] = useState('');
//   const [showSuccess, setShowSuccess] = useState(false); // State to control success notification
  




  

//   const form = useForm({
//     initialValues: {
//       // guests: Array.from({ length: numGuests }, () => ({
//         guestName: '',
//         gender: '',
//         // phoneNumber: '',
//         guestIdProof: '',
//         guestIdNumber: '',
//         // address: ''
//       // }))
//     },
//     validate: {
      
//         guestName: (value) => (value ? null : 'Guest name is required'),
//         gender: (value) => (value ? null : 'Gender is required'),
//         // phoneNumber: (value) => (value && value.length == 10 ? null : 'Phone number must be a valid 10-digit number'),
//         // phoneNumber: (value) => (value && value.length == 10 ? null : console.log("phone number : "+form.values.phoneNumber.toString())),       
//         guestIdProof: (value) => (value ? null : 'ID proof is required'),
//         guestIdNumber: (value) => (value && value.length == getMaxLength() ? null : `${form.values.guestIdProof} must be a valid ${getMaxLength()} digit Id`),
//         // address: (value) => (value ? null : 'Address is required')
//     }
    
    
//   });
//   const getMaxLength = () => {
//     switch (form.values.guestIdProof) {
//       case 'drivers_license':
//         return 16;
//       case 'passport':
//         return 8;
//       case 'addhar_id':
//         return 12;
//       default:
//         return null; // Or any default value you prefer
//     }
//   };
//   useEffect(() => {
//     window.localStorage.setItem('guestName1', form.values.guestName);
//     window.localStorage.setItem('gender1', form.values.gender);
//     // window.localStorage.setItem('phoneNumber', form.values.phoneNumber);
//     window.localStorage.setItem('guestIdProof1', form.values.guestIdProof);
//     window.localStorage.setItem('guestIdNumber1', form.values.guestIdNumber);
//     // window.localStorage.setItem('address', form.values.address);
//   }, [form.values]);

//   // console.log(form.values);
//   // const roomDetails = useRecoilValue(roomAtom);

//   const handleSubmit = async (values) => {
//     // try {
//     //   const response = await axios.post('http://192.168.29.68:80/hms/customer/', values);
//     //   console.log('Data saved successfully:', response.data);
//     //   setMessage(response.data.msg);
//     //   setShowSuccess(true); // Show success notification
//     //   // Optionally, you can navigate after submission
//     //   // navigate('/app/submitdetails');

//     //   form.reset();

//     //   setTimeout(() => {
//     //     setShowSuccess(false);
//     //   }, 2000);

//     // } catch (error) {
//     //   console.error('Error saving data:', error);
//     //   setMessage("An error occurred");
//     //   // Handle error, maybe show an error message
//     // }
//     // navigate('/app/submitdetails')
//   };
// //   validate: {
// //     guestName: (value) => (value ? null : 'Guest name is required'),
// //     gender: (value) => (value ? null : 'Gender is required'),
// //     phoneNumber: (value) => (!value || value.length === 10 ? null : 'Phone number must be a valid 10-digit number'),
// //     guestIdProof: (value) => (value ? null : 'ID proof is required'),
// //     guestIdNumber: (value) => {
// //       if (!value) return 'ID number is required';
// //       const idProof = form.values.guestIdProof;
// //       if (idProof === 'addhar_id' && !/^\d{4}\s\d{4}\s\d{4}$/.test(value)) {
// //         return 'Aadhaar ID must be a valid 12-digit number formatted as 1234 5678 9012';
// //       }
// //       if (idProof === 'passport' && !/^[a-zA-Z0-9]{8}$/.test(value)) {
// //         return 'Passport must be a valid 8-character alphanumeric value';
// //       }
// //       if (idProof === 'drivers_license' && !/^[a-zA-Z0-9]{16}$/.test(value)) {
// //         return 'Driver\'s License must be a valid 16-character alphanumeric value';
// //       }
// //       return null;
// //     },
// //     address: (value) => (value ? null : 'Address is required')
// //   }
// // });

// // const handleSubmit = async (values) => {
// //   navigate('/app/submitdetails');
// // };

//   return (
//     <div style={{ width: '100%', boxSizing: 'border-box', position: 'relative' }}>
//       <div style={{ padding: '1rem', paddingBottom: 0 }}>
//         {/* <Group>
         
//           <Text fz={22} fw={600}>Guest Details</Text>
//         </Group> */}
//       </div>
//       <Card style={{ backgroundColor: 'transparent' }}>
//         <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
//         {/* <Text fz={18} fw={600} pb={15}>Room.No-{window.localStorage.getItem('roomNo')}</Text> */}
//           {/* {form.values.guests.map((_, index) => ( */}
//             <div >
//               <TextInput
//                 label="Guest Name"
//                 placeholder="Enter guest name"
//                 {...form.getInputProps('guestName')}
//                 style={{ marginBottom: 15 }}
//               />
//               <Text weight={500}>Gender</Text>
//               <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', marginRight: '30%', padding: '3%' }}>
//                 <Radio
//                   label="Male"
//                   value="male"
//                   checked={form.values.gender === 'male'}
//                   onChange={() => form.setFieldValue('gender', 'male')}
//                 />
//                 <Radio
//                   label="Female"
//                   value="female"
//                   checked={form.values.gender === 'female'}
//                   onChange={() => form.setFieldValue('gender', 'female')}
//                 />
//               </div>
//               {/* <TextInput
//                   label="Phone Number"
//                   placeholder="Enter phone number"
//                   type="tel"
//                   {...form.getInputProps(`phoneNumber`)}
//                   error={form.errors.guests?.[index]?.phoneNumber}
//                   style={{ marginBottom: 15 }}
//                   onChange={(event) => {
//                     const numericValue = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
//                     form.setFieldValue(`phoneNumber`, numericValue.slice(0, 10)); // Limit to 10 digits
//                   }}
//                 /> */}
//                  {/* <TextInput hideControls
//           mt="md"
//           label="Phone Number"
//           placeholder="Phone Number"
//           type='number'
//           style={{ marginBottom: 15 }}
//           {...form.getInputProps('phoneNumber')}
//         /> */}
//          {/* <TextInput
//          hideControls
//                 // type='number'
//                 label="Phone Number"
//                 placeholder="Enter Phone Number"
//                 maxLength={10}
//                 {...form.getInputProps('phoneNumber')}
//                 // value={form}
//       // onChange={handlePhoneChange}
//                 style={{ marginBottom: 15 }}
//               /> */}
//               {/* <TextInput
//               label="Phone Number"
//               placeholder="Enter phone number"
//               maxLength={10}
//               {...form.getInputProps('phoneNumber')}
//               style={{ marginBottom: 15 }}
//               onChange={(event) => {
//                 const numericValue = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
//                 form.setFieldValue('phoneNumber', numericValue.slice(0, 10)); // Limit to 10 digits
//               }}
//             /> */}
//               <Select
//                 label="Guest ID Proof"
//                 placeholder="Select identity proof"
//                 data={[
//                   { label: 'Aadhaar ID', value: 'addhar_id' },
//                   { label: "Driver's License", value: 'drivers_license' },
//                   { label: 'Passport', value: 'passport' }
                  
//                 ]}
//                 {...form.getInputProps('guestIdProof')}
//                 style={{ marginBottom: 15 }}
//               />
//               <TextInput
//               hideControls
//                       label="Guest ID Number"
//                       placeholder="Enter ID number"
                     
//                       style={{ marginBottom: 15 }}
//                       error={form.errors.guestIdNumber}
//                       maxLength={getMaxLength()}
//                       {...form.getInputProps('guestIdNumber')}
//                       // onChange={(event) => {
//                       //   const value = event.target.value.trim(); // Remove leading/trailing whitespace
//                       //   form.setFieldValue(`guestIdNumber`, value);
//                       // }}
//                     />
//                     {/* <TextInput
//               label="Guest ID Number"
//               placeholder="Enter ID number"
//               style={{ marginBottom: 15 }}
//               {...form.getInputProps('guestIdNumber')}
//               onChange={(event) => {
//                 let value = event.target.value.trim();
//                 const idProof = form.values.guestIdProof;

//                 if (idProof === 'addhar_id') {
//                   value = value.replace(/\D/g, '').slice(0, 12);
//                   value = value.replace(/(\d{4})(\d{4})(\d{4})/, '$1 $2 $3');
//                 } else if (idProof === 'passport') {
//                   value = value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 8);
//                 } else if (idProof === 'drivers_license') {
//                   value = value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 16);
//                 }

//                 form.setFieldValue('guestIdNumber', value);
//               }}
//             />
//             {form.errors.guestIdNumber && (
//               <Text color="red" size="sm" mt={-10} mb={10}>{form.errors.guestIdNumber}</Text>
//             )} */}
//               {/* <Textarea
//                 label="Address"
//                 placeholder="Enter guest address"
//                 {...form.getInputProps('address')}
//                 style={{ marginBottom: 15 }}
//               /> */}
//             </div>
//           {/* ) */}
//           {/* ) */}
//           {/* } */}
//           {/* <Button type="submit" style={{ marginTop: '15px', width: '35%', background: 'red' }}>Next</Button> */}
          
//         </form>
        

//       </Card>
     

//     </div>
//   );
// };

// export default RegistrationCard;
import React, { useEffect } from 'react';
import { Card, TextInput, Select, Radio, Button, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate, useLocation } from 'react-router-dom';

const RegistrationCard = ({ guestIndex }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve numGuests from localStorage or use default value of 1
  const numGuests = window.localStorage.getItem('numGuests') || 1;

  // Decrement guest count by 1 as per your requirement
  const arraysToCreate = numGuests - 1;
// console.log("arrays to create",arraysToCreate);

  // Initialize guest details in localStorage if not already set
  useEffect(() => {
    const storedGuests = JSON.parse(localStorage.getItem('guestDetails')) || [];

// console.log("array",storedGuests);

    // Ensure we have exactly arraysToCreate entries in the guestDetails array

    console.log("length", storedGuests.length);
      console.log("arrays to create",arraysToCreate);
      
    if (storedGuests.length < arraysToCreate) {
      console.log("length", storedGuests.length);
      console.log("arrays to create",arraysToCreate);
      
      for (let i = storedGuests.length; i < arraysToCreate; i++) {
        storedGuests.push({ guestName: '', gender: '', guestIdProof: '', guestIdNumber: '',phoneNumber: '' });
      }
    } else if (storedGuests.length > arraysToCreate) {
      storedGuests.splice(arraysToCreate);
    }

    // Store updated guest details in local storage
    localStorage.setItem('guestDetails', JSON.stringify(storedGuests));
  }, [arraysToCreate]);

  // Retrieve current guest details from localStorage
  const getStoredGuest = () => {
    const storedGuests = JSON.parse(localStorage.getItem('guestDetails')) || [];
    return storedGuests[guestIndex] || { guestName: '', gender: '', guestIdProof: '', guestIdNumber: '',phoneNumber: '' };
  };

  const form = useForm({
    initialValues: getStoredGuest(),
    validate: {
      guestName: (value) => (value ? null : 'Guest name is required'),
      gender: (value) => (value ? null : 'Gender is required'),
      guestIdProof: (value) => (value ? null : 'ID proof is required'),
      guestIdNumber: (value) => (value && value.length == getMaxLength() ? null : `${form.values.guestIdProof} must be a valid ${getMaxLength()} digit Id`),
    },
  });
  const getMaxLength = () => {
    switch (form.values.guestIdProof) {
      case 'drivers_license':
        return 16;
      case 'passport':
        return 8;
      case 'addhar_id':
        return 12;
      default:
        return null; // Or any default value you prefer
    }
  };
  const formatAadhaarNumber = (value) => {
    if (form.values.guestIdProof !== 'addhar_id') return value; // Only format for Aadhaar ID
    const cleaned = value.replace(/\D/g, ''); // Remove non-digit characters
    const match = cleaned.match(/^(\d{4})(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return cleaned; // Return cleaned value if not fully matched
  };

  // Function to update guest details in localStorage
  const updateGuestDetails = (values) => {
    const storedGuests = JSON.parse(localStorage.getItem('guestDetails')) || [];
    // Update the specific guest details by index
    storedGuests[guestIndex] = values;
    localStorage.setItem('guestDetails', JSON.stringify(storedGuests));
  };

  // Sync form changes to localStorage
  useEffect(() => {
    updateGuestDetails(form.values);
  }, [form.values]);

  // Handle form submission
  const handleSubmit = (values) => {
    updateGuestDetails(values);
    navigate('/app/submitdetails'); // Proceed to submit details page
  };
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length <= 10) {
      form.setFieldValue('phoneNumber', value);
    }
  };

  return (
    <div style={{ width: '100%', boxSizing: 'border-box', position: 'relative' }}>
      <Card style={{ backgroundColor: 'transparent' }}>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Guest Name"
            placeholder="Enter guest name"
            {...form.getInputProps('guestName')}
            style={{ marginBottom: 15 }}
          />
          <Text weight={500}>Gender</Text>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', padding: '2.5%',marginRight:"41%" }}>
            <Radio
              label="Male"
              value="male"
              checked={form.values.gender === 'male'}
              onChange={() => form.setFieldValue('gender', 'male')}
            />
            <Radio
              label="Female"
              value="female"
              checked={form.values.gender === 'female'}
              onChange={() => form.setFieldValue('gender', 'female')}
            />
          </div>
          <TextInput
  hideControls
  label="Phone Number"
  placeholder="Enter Phone Number"
  // onClick={handleIconClick}
  maxLength={10}
  {...form.getInputProps('phoneNumber')}
  onChange={handlePhoneNumberChange} 
  style={{ marginBottom: 15 }}
  />
          <Select
            label="Guest ID Proof"
            placeholder="Select identity proof"
            data={[
              { label: 'Aadhaar ID', value: 'addhar_id' },
              { label: "Driver's License", value: 'drivers_license' },
              { label: 'Passport', value: 'passport' },
              { label: 'Voter ID', value: 'voter_id' },
            ]}
            {...form.getInputProps('guestIdProof')}
            style={{ marginBottom: 15 }}
          />
          <TextInput
            label="Guest ID Number"
            placeholder="Enter ID number"
            maxLength={getMaxLength()}
            value={formatAadhaarNumber(form.values.guestIdNumber)} // Format the ID number
            onChange={(e) => form.setFieldValue('guestIdNumber', formatAadhaarNumber(e.target.value))} // Update on input change
            style={{ marginBottom: 15 }}
          />
          {/* <Button type="submit" style={{ marginTop: '15px', width: '35%', background: 'red' }}>
            Next
          </Button> */}
        </form>
      </Card>
    </div>
  );
};

export default RegistrationCard;