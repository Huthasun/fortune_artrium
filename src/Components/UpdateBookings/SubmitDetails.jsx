import React, { useState } from 'react';
import { TextInput,  Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import { useRecoilValue } from 'recoil';
import { roomAtom } from '../../Store/Store';

const SubmitDetails = () => {
    const navigate = useNavigate();
    const [roomNumber, setRoomNumber] = useState('');
    const [bookingType, setBookingType] = useState('');
    
        const [formData, setFormData] = useState({
            checkOutDate: '',
            checkOutTime: '',
            checkInDate: '',
            checkInTime: '',
            paidamount:'',
            balanceamount:'',
        })
        // const handleInputChange = (field, value) => {
        //   setFormData({ ...formData, [field]: value });
        // };
        const roomDetails = useRecoilValue(roomAtom)
       const [selectedOption, setSelectedOption] = useState('Booking');
  console.log(roomDetails);
  const handleInputChange = (field, value) => {
    // setFormData({ ...formData, [field]: value });
  };
      
        const handleSubmit = () => {
          console.log(formData);
          // Further processing logic here
          navigate('/bookings');
        };
  return (
    <div style={{ maxWidth: '100%',  boxSizing: 'border-box' }}>
        <Header/>
        <h3 style={{marginLeft:"6%"}}>Room.No-{roomDetails.roomNo}</h3>
        <div style={{ maxWidth: '500px', margin: '21px auto',padding: '17px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', }}>
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
            style={{marginLeft:"4px"}}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row',marginTop:"10px"}}>
          <TextInput
            label="Check-out Date"
            placeholder="YYYY-MM-DD"
            pattern="\d{4}-\d{2}-\d{2}"
            value={formData.checkOutDate}
            onChange={(event) => handleInputChange('checkOutDate', event.target.value)}
            required
            style={{ marginBottom: 15 }}
          />
          <TextInput
            label="Check-out Time"
            placeholder="HH:MM"
            pattern="\d{2}:\d{2}"
            value={formData.checkOutTime}
            onChange={(event) => handleInputChange('checkOutTime', event.target.value)}
            required
            style={{marginLeft:"4px",marginBottom: 15 }}
            
          />
        </div>
        <TextInput
          label="Tarrif"
          placeholder="Amount"
          value={formData.amount}
          onChange={(event) => handleInputChange('amount', event.target.value)}
          required
          style={{ marginBottom: 15 }}
        />
        <TextInput
          label="Paid Amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={(event) => handleInputChange('amount', event.target.value)}
          required
          style={{ marginBottom: 15 }}
        />
        <TextInput
          label="Balance Amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={(event) => handleInputChange('amount', event.target.value)}
          required
          style={{ marginBottom: 15 }}
        />
        <Button onClick={handleSubmit} style={{ marginTop: '13px',width:"35%",backgroundColor:"#FE0000" }}>Submit</Button>
    </div>
    </div>
  )
}

export default SubmitDetails
