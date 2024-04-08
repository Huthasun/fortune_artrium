import React, { useState } from 'react';
import { TextInput, Button } from '@mantine/core';

const Departure = () => {

    const [formData, setFormData] = useState({
        departureDate: '',
        departureTime: '',
      });
    
      const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
      };
    
      const handleSubmit = () => {
        // Handle form submission, e.g., sending data to backend
        console.log(formData);
      };
  return (
    
       <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <TextInput
        label="Departure Date"
        placeholder="YYYY-MM-DD"
        pattern="\d{4}-\d{2}-\d{2}"
        value={formData.departureDate}
        onChange={(event) => handleInputChange('departureDate', event.target.value)}
        required
      />
      <TextInput
        label="Departure Time"
        placeholder="HH:MM"
        pattern="\d{2}:\d{2}"
        value={formData.departureTime}
        onChange={(event) => handleInputChange('departureTime', event.target.value)}
        required
      />
      <Button onClick={handleSubmit}style={{marginTop:'11px'}}>Submit</Button>
    </div>
    
  )
}

export default Departure
