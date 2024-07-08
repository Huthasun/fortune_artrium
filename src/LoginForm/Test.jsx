// import React, { useState } from 'react';
// import {  TextInput,  yupResolver } from '@mantine/form';
// import * as yup from 'yup';

// const schema = yup.object({
//   guestName: yup.string().required('Guest name is required'),
//   gender: yup.string().required('Gender is required'),
//   phoneNumber: yup.string().required('Phone number is required'),
//   guestIdProof: yup.string().required('Guest ID Proof is required'),
//   guestIdNumber: yup.string().when('guestIdProof', {
//     is: (guestIdProof) => guestIdProof, // Check if guestIdProof has a value
//     then: (schema) => {
//       if (schema === 'addhar_id') {
//         return schema.matches(/^\d{12}$/, 'Addhar ID must be exactly 12 digits');
//       } else if (schema === 'driving_license') {
//         return schema.matches(/^\w{16}$/, 'Driver\'s License must be exactly 16 alphanumeric characters');
//       } else if (schema === 'passport') {
//         return schema.matches(/^\w{8}$/, 'Passport must be exactly 8 alphanumeric characters');
//       } else {
//         return schema; // No validation for other ID types
//       }
//     },
//   }),
//   address: yup.string().required('Address is required'),
// });

// const Test = () => {
//   const [form, setForm] = useState({ values: {}, errors: {} });

//   const handleSubmit = (values) => {
//     console.log('Submitted form data:', values);
//     // Handle form submission logic here (e.g., send data to server)
//   };

//   return (
//     <form schema={schema} onSubmit={handleSubmit} onError={(errors) => setForm({ ...form, errors })}>
//       <TextInput label="Guest Name" placeholder="Enter your name" {...form} />
//       <>
//         <Radio label="Male" value="male" {...form} />
//         <Radio label="Female" value="female" {...form} />
//       </>
//       <TextInput label="Phone Number" placeholder="Enter phone number" {...form} />
//       <FormSelect
//         label="Guest ID Proof"
//         placeholder="Select ID proof"
//         data={[
//           { value: 'addhar_id', label: 'Addhar ID' },
//           { value: 'driving_license', label: 'Driving License' },
//           { value: 'passport', label: 'Passport' },
//         ]}
//         {...form}
//       />
//       <TextInput label="Guest ID Number" placeholder="Enter ID number" {...form} />
//       <Textarea label="Address" placeholder="Enter your address" {...form} />
//       <Button type="submit">Submit</Button>
//     </form>
//   );
// };

// export default Test;
