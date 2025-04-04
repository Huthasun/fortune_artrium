
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