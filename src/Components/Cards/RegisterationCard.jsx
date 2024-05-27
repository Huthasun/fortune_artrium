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

import React, { useState } from 'react';
import { Card, TextInput, Select, Textarea, Radio, Text, Button, Group, ActionIcon } from '@mantine/core';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../Header';
import { useRecoilValue } from 'recoil';
import { roomAtom } from '../../Store/Store';
import { BiArrowBack } from 'react-icons/bi';

const RegistrationCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { numGuests } = location.state || { numGuests: 1 }; // Default to 1 if not provided
  
  const [formData, setFormData] = useState(
    Array.from({ length: numGuests }, () => ({
      guestName: '',
      gender: '',
      phoneNumber: '',
      identityProof: '',
      idNumber: '',
      address: ''
    }))
  );

  const roomDetails = useRecoilValue(roomAtom);

  const handleInputChange = (index, field, value) => {
    const newFormData = [...formData];
    newFormData[index][field] = value;
    setFormData(newFormData);
  };

  const handleSubmit = () => {
    console.log(formData);
    // Further processing logic here
    navigate('/submitdetails');
  };

  return (
    <div style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
      <Header />
      <div style={{ padding: "1rem", paddingBottom: 0 }}>
        <Group>
          {/* <ActionIcon size={"sm"} onClick={()=>navigate(-1)}><BiArrowBack/></ActionIcon> */}
          <Text fz={22} fw={600}>Guest details</Text>
        </Group>
      </div>
      <Card style={{ backgroundColor: "transparent", marginBottom: '' }}>
        <form>
          <Text fz={18} fw={600} pb={15}>Room.No-{roomDetails.roomNo}</Text>
          {formData.map((guest, index) => (
            <div key={index}>
              <TextInput
                label={`Guest Name ${index + 1}`}
                placeholder="Enter guest name"
                value={guest.guestName}
                onChange={(e) => handleInputChange(index, 'guestName', e.currentTarget.value)}
                required
                style={{ marginBottom: 15 }}
              />
              <Text weight={500} required>Gender</Text>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', marginRight: "45%", padding: "3%" }}>
                <Radio
                  label="Male"
                  value="male"
                  checked={guest.gender === 'male'}
                  onChange={() => handleInputChange(index, 'gender', 'male')}
                  required
                />
                <Radio
                  label="Female"
                  value="female"
                  checked={guest.gender === 'female'}
                  onChange={() => handleInputChange(index, 'gender', 'female')}
                  required
                />
              </div>
              <TextInput
                label="Phone Number"
                placeholder="Enter phone number"
                type="number"
                value={guest.phoneNumber}
                onChange={(e) => handleInputChange(index, 'phoneNumber', e.currentTarget.value)}
                required
                style={{ marginBottom: 15 }}
              />
              <Select
                label="Identity Proof"
                placeholder="Select identity proof"
                value={guest.identityProof}
                onChange={(value) => handleInputChange(index, 'identityProof', value)}
                data={[
                  { label: 'Driver\'s License', value: 'drivers_license' },
                  { label: 'Passport', value: 'passport' },
                  { label: 'National ID', value: 'national_id' },
                ]}
                style={{ marginBottom: 15 }}
              />
              <TextInput
                label="ID Number"
                placeholder="Enter ID number"
                value={guest.idNumber}
                onChange={(e) => handleInputChange(index, 'idNumber', e.currentTarget.value)}
                required
                style={{ marginBottom: 15 }}
              />
              <Textarea
                label="Address"
                placeholder="Enter guest address"
                value={guest.address}
                onChange={(e) => handleInputChange(index, 'address', e.currentTarget.value)}
                required
                style={{ marginBottom: 4 }}
              />
            </div>
          ))}
          <Button onClick={handleSubmit} style={{ marginTop: '15px', width: "35%", marginLeft: "0px", background: 'red' }}>Next</Button>
        </form>
      </Card>
    </div>
  );
}

export default RegistrationCard;
