    import React, { useState } from 'react';
import Header from './Header'


import { Card, Text,TextInput ,SimpleGrid,Button} from '@mantine/core';

const UpdateBokkings = () => {
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
    const [selectedOption, setSelectedOption] = useState(null);

    const handleInputChange = (field, value) => {
      setFormData({ ...formData, [field]: value });
    };
  


  return (
    <div>
      <Header/>
      <div style={{width:"375px",height:"50px",borderBottom:"2px solid #D3D3D3",display:"flex",alignItems:"center",justifyContent:"space-around",backgroundColor:"ffff"}}>
      <Text fz="xl"
      style={{color: selectedOption === 'Booking' ? 'red' : 'inherit'}}
      onClick={() => setSelectedOption('Booking')}
      >
        Booking
        </Text>
      <Text fz="xl"
       style={{ color: selectedOption === 'Accommodation' ? 'red' : 'inherit' }}
       onClick={() => setSelectedOption('Accommodation')}
      >
        Accomdation
        </Text>
      <Text fz="xl"
        style={{ color: selectedOption === 'Extend' ? 'red' : 'inherit' }}
        onClick={() => setSelectedOption('Extend')}
      >
        Extend
        </Text>


      </div>
      <div style={{display:"flex",margin:"20px",borderRadius:"5px",justifyContent:"space-between",height:"34px",border:" 3px solid #FE000099",}}>
      <p style={{marginTop:"6px",marginLeft:"8px"}}>Room.No-101</p>
      <p style={{marginTop:"6px",marginRight:"8px"}}>Pending</p>
      </div>    
      <div style={{display:"flex",flexDirection:'column'}}>
      <div>
            <label style={{fontWeight:"500",marginLeft:"25px"}}>resverd date</label>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row',justifyContent:"space-around",padding:"10px" }}>
          <TextInput

            label=""
            placeholder="YYYY-MM-DD"
            pattern="\d{4}-\d{2}-\d{2}"
            value={formData.checkInDate}
            onChange={(event) => handleInputChange('checkInDate', event.target.value)}
            required
            style={{width:'40%'}}
          />
          <TextInput
            label=""
            placeholder="HH:MM"
            pattern="\d{2}:\d{2}"
            value={formData.checkInTime}
            onChange={(event) => handleInputChange('checkInTime', event.target.value)}
            required
            style={{width:'40%'}}
          />
          </div>
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",padding:"10px"}}>
          <TextInput
            label=" Total Number of Days "
            placeholder="Enter number of days"
            type="number"
            min={1}
            value={formData.duration}
            onChange={(event) => handleInputChange('duration', parseInt(event.target.value))}
            // required
            style={{width:'40%'}}
          />
          <TextInput
            label="Tarrif"
            placeholder="Amount"
            value={formData.amount}
            onChange={(event) => handleInputChange('amount', event.target.value)}
            // required
            style={{width:'40%'}}
          />
          </div>
          <TextInput
            label="Total Amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={(event) => handleInputChange('amount', event.target.value)}
            // required
            style={{width:"85%",marginLeft:"7%"}}
          />
          <div style={{paddingTop:"10px"}}>
          <label style={{fontWeight:"500",marginLeft:"25px",}}>Payment details</label>
          <Card>
          <SimpleGrid cols={2}>
        <div  style={{display:"flex",justifyContent:"space-between",flexDirection:"column",marginLeft:"10px",height:"120px"}}>

        
      <Text size="md" weight={500} style={{ marginBottom: 10 }}>
        Name 
       </Text>
      
      <Text size="md" weight={500} style={{ marginBottom: 10 }}>
         Dept Date
      </Text>
      
      <Text size="md" weight={500} style={{ marginBottom: 10 }}>
        Total Amount
      </Text>
      
      <Text size="md" weight={500} style={{ marginBottom: 10 }}>
        Pending Amount
      </Text>
     
      
      </div>
      <div  style={{display:"flex",justifyContent:"flex-end",flexDirection:"column",marginLeft:"84px",top:"0"}}>
      <Text size="md" weight={500} style={{ marginBottom: 10 }}>
         sunny
      </Text>
      <Text size="md" weight={500} style={{ marginBottom: 10 }}>
        12/06/2002
      </Text>
      <Text size="md" weight={500} style={{ marginBottom: 10 }}>
        5000
      </Text>
       <Text size="md" weight={500} style={{ marginBottom: 10 }}>
        1000
      </Text>


      </div>
      </SimpleGrid>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"10px"}}>
      <Button style={{width:"105px",height:"34px",backgroundColor:"#FE0000",marginTop:'0px'}}>Submit</Button> 
 
      </div>
          </Card>
          </div>

    </div>
  )
}

export default UpdateBokkings
