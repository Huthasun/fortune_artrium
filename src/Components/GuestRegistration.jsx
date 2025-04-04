
import React, { useState } from 'react';
import { Card, TextInput, Select, Textarea, Radio, Text, Button, Group, Notification, Overlay, NumberInput } from '@mantine/core';
import { useNavigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { BiArrowBack } from 'react-icons/bi';
import { useForm, hasLength } from '@mantine/form';
import axios from 'axios';
import { IconCheck, IconX } from '@tabler/icons-react';
import {yupResolver} from '@mantine/core'
import client from '../API/api';

const GuestRegistration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { numGuests } = location.state || { numGuests: 1 }; // Default to 1 if not provided
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false); // State to control success notification

  

  const form = useForm({
    initialValues: {
      // guests: Array.from({ length: numGuests }, () => ({
        guestName: '',
        gender: '',
        phoneNumber: '',
        guestIdProof: '',
        guestIdNumber: '',
        address: ''
      // }))
    },
    validate: {
      
        guestName: (value) => (value ? null : 'Guest name is required'),
        gender: (value) => (value ? null : 'Gender is required'),
        phoneNumber: (value) => (value && value.length == 10 ? null : 'Phone number must be a valid 10-digit number'),
        // phoneNumber: (value) => (value && value.length == 10 ? null : console.log("phone number : "+form.values.phoneNumber.toString())),       
        guestIdProof: (value) => (value ? null : 'ID proof is required'),
        guestIdNumber: (value) => (value && value.length == getMaxLength() ? null : `${form.values.guestIdProof} must be a valid ${getMaxLength()} digit Id`),
        address: (value) => (value ? null : 'Address is required')
    }
    
    
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
  
  // console.log(form.values);
  // const roomDetails = useRecoilValue(roomAtom);

  const handleSubmit = async (values) => {
    try {
      const response = await client.post('/customer', values);
      console.log('Data saved successfully:', response.data);
      setMessage(response.data.msg);
      setShowSuccess(true); // Show success notification
      // Optionally, you can navigate after submission
      // navigate('/app/submitdetails');

      form.reset();

      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);

    } catch (error) {
      console.error('Error saving data:', error);
      setMessage("An error occurred");
      // Handle error, maybe show an error message
    }
  };

  return (
    <div style={{ maxWidth: '100%', boxSizing: 'border-box', position: 'relative' }}>
      <div style={{ padding: '1rem', paddingBottom: 0 }}>
        <Group>
          {/* <ActionIcon size="sm" onClick={() => navigate(-1)}>
            <BiArrowBack />
          </ActionIcon> */}
          <Text fz={22} fw={600}>Guest Details</Text>
        </Group>
      </div>
      <Card style={{ backgroundColor: 'transparent', paddingBottom: '50px' }}>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          {/* {form.values.guests.map((_, index) => ( */}
            <div >
              <TextInput
                label="Guest Name"
                placeholder="Enter guest name"
                {...form.getInputProps('guestName')}
                style={{ marginBottom: 15 }}
              />
              <Text weight={500}>Gender</Text>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', marginRight: '45%', padding: '3%' }}>
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
              {/* <TextInput
                  label="Phone Number"
                  placeholder="Enter phone number"
                  type="tel"
                  {...form.getInputProps(`phoneNumber`)}
                  error={form.errors.guests?.[index]?.phoneNumber}
                  style={{ marginBottom: 15 }}
                  onChange={(event) => {
                    const numericValue = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                    form.setFieldValue(`phoneNumber`, numericValue.slice(0, 10)); // Limit to 10 digits
                  }}
                /> */}
                 {/* <TextInput hideControls
          mt="md"
          label="Phone Number"
          placeholder="Phone Number"
          type='number'
          style={{ marginBottom: 15 }}
          {...form.getInputProps('phoneNumber')}
        /> */}
         <TextInput
         hideControls
                // type='number'
                label="Phone Number"
                placeholder="Enter Phone Number"
                maxLength={10}
                {...form.getInputProps('phoneNumber')}
                // value={form}
      // onChange={handlePhoneChange}
                style={{ marginBottom: 15 }}
              />
              <Select
                label="Guest ID Proof"
                placeholder="Select identity proof"
                data={[
                  { label: "Driver's License", value: 'drivers_license' },
                  { label: 'Passport', value: 'passport' },
                  { label: 'Aadhaar ID', value: 'addhar_id' }
                ]}
                {...form.getInputProps('guestIdProof')}
                style={{ marginBottom: 15 }}
              />
              <TextInput
              hideControls
                      label="Guest ID Number"
                      placeholder="Enter ID number"
                     
                      style={{ marginBottom: 15 }}
                      error={form.errors.guestIdNumber}
                      maxLength={getMaxLength()}
                      {...form.getInputProps('guestIdNumber')}
                      // onChange={(event) => {
                      //   const value = event.target.value.trim(); // Remove leading/trailing whitespace
                      //   form.setFieldValue(`guestIdNumber`, value);
                      // }}
                    />
              <Textarea
                label="Address"
                placeholder="Enter guest address"
                {...form.getInputProps('address')}
                style={{ marginBottom: 15 }}
              />
            </div>
          {/* ) */}
          {/* ) */}
          {/* } */}
          <Button type="submit" style={{ marginTop: '15px', width: '35%', background: 'red' }}>Submit</Button>
          
        </form>
        

        {/* Inline style for overlay notification */}
        {showSuccess && (
  <div
    style={{
      position: 'fixed',
      top: '40%',
      display:"grid",
      placeItems:"center",
      right: '1%',
      // transform: 'translate(-50%, -50%)',
      zIndex: 1000,
      // backgroundColor: message === 'Successfully Submmited' ? 'rgba(0, 128, 0, 0.7)' : 'rgba(255, 0, 0, 0.7)',
      color: 'white',
      padding: '20px',
      borderRadius: '5px',
      textAlign: 'center',
      width:"100%"
    }}
  >
    <Notification
    
      icon={message === 'Successfully Submitted' ? <IconCheck size="1.1rem" /> : <IconX size="1.1rem" />}
      color={message === 'Successfully Submitted' ? 'teal' : 'red'}
      // title="Submitted successfully"
    >
      {message}
    </Notification>
  </div>

        )}
      </Card>
      {showSuccess && <Overlay color="#000" opacity={0.5} />}

    </div>
  );
};

export default GuestRegistration;
 
