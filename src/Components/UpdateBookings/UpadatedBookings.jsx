// import React, { useState } from 'react';
// import Header from './Header'
// import bookingData from './databooking';



// import { Card, Text,TextInput ,SimpleGrid,Button} from '@mantine/core';

// const UpdateBokkings = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     bookingType: '',
//     roomNumber: '',
//     guests: '',
//     checkInDate: '',
//     checkInTime: '',
//     duration: 1,
//     price: 0,
//     gender: '',
//     phoneNumber: '',
//     identityProof: '',
//     idNumber: '',
//     address: '',
//     numberOfAdults: '',
//     numberOfKids: '',
//     checkOutDate: '',
//     checkOutTime: '',
//     amount: '',
//   });
//     const [selectedOption, setSelectedOption] = useState(null);

//     const handleInputChange = (field, value) => {
//       setFormData({ ...formData, [field]: value });
//     };
  


//   return (
//     <div>
//       <Header/>
//       <div style={{width:"375px",height:"50px",borderBottom:"2px solid #D3D3D3",display:"flex",alignItems:"center",justifyContent:"space-around",backgroundColor:"ffff"}}>
//       <Text fz="xl"
//       style={{color: selectedOption === 'Booking' ? 'red' : 'inherit'}}
//       onClick={() => setSelectedOption('Booking')}
//       >
//         Booking
//         </Text>
//       <Text fz="xl"
//        style={{ color: selectedOption === 'Accommodation' ? 'red' : 'inherit' }}
//        onClick={() => setSelectedOption('Accommodation')}
//       >
//         Accomdation
//         </Text>
//       <Text fz="xl"
//         style={{ color: selectedOption === 'Extend' ? 'red' : 'inherit' }}
//         onClick={() => setSelectedOption('Extend')}
//       >
//         Extend
//         </Text>


//       </div>
//       <div style={{display:"flex",margin:"20px",borderRadius:"5px",justifyContent:"space-between",height:"34px",border:" 3px solid #FE000099",}}>
//       <p style={{marginTop:"6px",marginLeft:"8px"}}>Room.No</p>
//       <p style={{marginTop:"6px",marginRight:"8px"}}>Pending</p>
//       </div>    
//       <div style={{display:"flex",flexDirection:'column'}}>
//       <div>
//             <label style={{fontWeight:"500",marginLeft:"25px"}}>resverd date</label>
//         </div>
//         <div style={{ display: 'flex', flexDirection: 'row',justifyContent:"space-around",padding:"10px" }}>
//           <TextInput

//             label=""
//             placeholder="YYYY-MM-DD"
//             pattern="\d{4}-\d{2}-\d{2}"
//             value={formData.checkInDate}
//             onChange={(event) => handleInputChange('checkInDate', event.target.value)}
//             required
//             style={{width:'40%'}}
//           />
//           <TextInput
//             label=""
//             placeholder="HH:MM"
//             pattern="\d{2}:\d{2}"
//             value={formData.checkInTime}
//             onChange={(event) => handleInputChange('checkInTime', event.target.value)}
//             required
//             style={{width:'40%'}}
//           />
//           </div>
//         </div>
//         <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around",padding:"10px"}}>
//           <TextInput
//             label=" Total Number of Days "
//             placeholder="Enter number of days"
//             type="number"
//             min={1}
//             value={formData.duration}
//             onChange={(event) => handleInputChange('duration', parseInt(event.target.value))}
//             // required
//             style={{width:'40%'}}
//           />UpdateBokkings
//           <TextInput
//             label="Tarrif"
//             placeholder="Amount"
//             value={formData.amount}
//             onChange={(event) => handleInputChange('amount', event.target.value)}
//             // required
//             style={{width:'40%'}}
//           />
//           </div>
//           <TextInput
//             label="Total Amount"
//             placeholder="Amount"
//             value={formData.amount}
//             onChange={(event) => handleInputChange('amount', event.target.value)}
//             // required
//             style={{width:"85%",marginLeft:"7%"}}
//           />
//           <div style={{paddingTop:"10px"}}>
//           <label style={{fontWeight:"500",marginLeft:"25px",}}>Payment details</label>
//           <Card>
//           <SimpleGrid cols={2}>
//         <div  style={{display:"flex",justifyContent:"space-between",flexDirection:"column",marginLeft:"10px",height:"120px"}}>

        
//       <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//         Name 
//        </Text>
      
//       <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//          Dept Date
//       </Text>
      
//       <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//         Total Amount
//       </Text>
      
//       <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//         Pending Amount
//       </Text>
     
      
//       </div>
//       <div  style={{display:"flex",justifyContent:"flex-end",flexDirection:"column",marginLeft:"84px",top:"0"}}>
//       <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//          sunny
//       </Text>
//       <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//         12/06/2002
//       </Text>
//       <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//         5000
//       </Text>
//        <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//         1000
//       </Text>


//       </div>
//       </SimpleGrid>
//       <div style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"10px"}}>
//       <Button style={{width:"105px",height:"34px",backgroundColor:"#FE0000",marginTop:'0px'}}>Submit</Button> 
 
//       </div>
//           </Card>
//           </div>

//     </div>
//   )
// }

// export default 
// import React, { useState } from 'react';
// import { Card, Text, TextInput, SimpleGrid, Button ,Tabs} from '@mantine/core';
// import Header from '../Header';
// import bookingData from '../databooking';
// import { roomAtom } from '../../Store/Store';
// import { useRecoilValue } from 'recoil';
// import { DateInput } from '@mantine/dates';



// const UpdatedBookings = () => {

//        const roomDetails = useRecoilValue(roomAtom)
//        const [selectedOption, setSelectedOption] = useState('Booking');
//   console.log(roomDetails);

  

//   const handleInputChange = (field, value) => {
//     // setFormData({ ...formData, [field]: value });
//   };

//   // const handleRoomSelection = (roomNo) => {
//   //   // Logic to handle room selection
//   //   const room = bookingData.find((room) => room.roomNo === roomNo);
//   //   setSelectedRoom(room);
//   // };

//   return (
//     <div>
//       <Header />
//       {/* <div style={{ width: "375px", height: "50px", borderBottom: "2px solid #D3D3D3", display: "flex", alignItems: "center", justifyContent: "space-around", backgroundColor: "ffff" }}>
//         <Text fz="xl"
//           style={{ color: selectedOption === 'Booking' ? 'red' : 'inherit' }}
//           onClick={() => setSelectedOption('Booking')}
//         >
//           Booking
//         </Text>
//         <Text fz="xl"
//           style={{ color: selectedOption === 'Accommodation' ? 'red' : 'inherit' }}
//           onClick={() => setSelectedOption('Accommodation')}
//         >
//           Accommodation
//         </Text>
//         <Text fz="xl"
//           style={{ color: selectedOption === 'Depart' ? 'red' : 'inherit' }}
//           onClick={() => setSelectedOption('Depart')}
//         >
//           Depart
//         </Text>
//       </div> */}
//       <div style={{ padding: '13px 0px' }}>
//         <Tabs defaultValue="first" color='red'  >
//       <Tabs.List position='apart' pl={10}pr={10} >
//         <Tabs.Tab value="first" style={{fontSize:"1rem",fontWeight:"bold",fontFamily:"Arial", color: selectedOption === 'Booking' ? 'red' : 'inherit',}}
//         onClick={() => setSelectedOption('Booking')}
//         >Bookings
//         </Tabs.Tab>
//         <Tabs.Tab value="second" style={{fontSize:"1rem",fontWeight:"bold",fontFamily:"Arial",color: selectedOption === 'Accommodation' ? 'red' : 'inherit' }}
//          onClick={() => setSelectedOption('Accommodation')}
//         >Accomdation</Tabs.Tab>
//         <Tabs.Tab value="third" style={{fontSize:"1rem",fontWeight:"bold",fontFamily:"Arial",color: selectedOption === 'Depart' ? 'red' : 'inherit' }}
//         onClick={() => setSelectedOption('Depart')}
//         >Depart</Tabs.Tab>
//       </Tabs.List>
//     </Tabs>
//     </div>
//       <div style={{ display: "flex", margin: "20px", borderRadius: "5px", justifyContent: "space-between", height: "34px", border: " 3px solid #FE000099" }}>
//         <p style={{ marginTop: "6px", marginLeft: "8px" }}>Room.No-{roomDetails.roomNo}</p>
//         <p style={{ marginTop: "6px", marginRight: "8px" }}>{roomDetails.status}</p>
//       </div>
//       <div style={{ display: "flex", flexDirection: 'column' }}>
//         <div>
//           <Text style={{ fontWeight: "500", marginLeft: "25px",fontSize:"0.875rem" }}>Revised Check-out Date</Text>
//         </div>
//         <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-around", padding: "6px" }}>
//           <DateInput
//             label=""
//             placeholder="YYYY-MM-DD"
//             pattern="\d{4}-\d{2}-\d{2}"
//             // value={formData.checkInDate}
//             onChange={(event) => handleInputChange('checkInDate', event.target.value)}
//             required
//             style={{ width: '40%' }}
//           />
//           <TextInput
//             label=""
//             placeholder="HH:MM"
//             type="number"
//             pattern="\d{2}:\d{2}"
//             // value={formData.checkInTime}
//             onChange={(event) => handleInputChange('checkInTime', event.target.value)}
//             required
//             style={{ width: '40%' }}
//           />
//         </div>
//       </div>
//       <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", padding: "10px" }}>
//         <TextInput
//           label="Total Number of Days"
//           placeholder="Enter number of days"
//           type="number"
//           min={1}
//           // value={formData.duration}
//           onChange={(event) => handleInputChange('duration', parseInt(event.target.value))}
//           style={{ width: '40%' }}
//         />
//         <TextInput
//           label="Tariff"
//           type="number"
//           placeholder="Amount"
//           value={formData.amount}
//           onChange={(event) => handleInputChange('amount', event.target.value)}
//           style={{ width: '40%' }}
//         />
//       </div>
//       <TextInput
//         label="Total Amount"
//         type="number"
//         placeholder="Amount"

//         // value={formData.amount}
//         onChange={(event) => handleInputChange('amount', event.target.value)}
//         style={{ width: "85%", marginLeft: "7%" }}
//       />
//       <div style={{ paddingTop: "18px" }}>
//         <label style={{ fontWeight: "500", marginLeft: "25px" }}>Payment details</label>
//         <Card>
//           <SimpleGrid cols={2}>
//             <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", marginLeft: "10px", height: "120px" }}>
//               <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//                 Name
//               </Text>
//               <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//                 Dept Date
//               </Text>
//               <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//                 Total Amount
//               </Text>
//               <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//                 Pending Amount
//               </Text>
//             </div>
//             <div style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column", marginLeft: "30%", top: "0" }}>
//                 <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//                   {roomDetails.name}
//                 </Text>
//                 <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//                   {roomDetails.deptDate}
//                 </Text>
//                 <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//                   {roomDetails.totalAmount}
//                 </Text>
//                 <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//                   {roomDetails.pendingAmount}
//                 </Text>
//               </div>
//           </SimpleGrid>
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px" }}>
//             <Button style={{ width: "105px", height: "34px", backgroundColor: "#FE0000", marginTop: '0px' }}>Submit</Button>
//           </div>
//         </Card>
//       </div>
//     </div>
//   )
// }

// export default UpdatedBookings;

import React, { useState } from 'react';
import { Card, Text, TextInput, SimpleGrid, Button, Tabs } from '@mantine/core';
import Header from '../Header';
import bookingData from '../databooking';
import { roomAtom } from '../../Store/Store';
import { useRecoilValue } from 'recoil';
import { DateInput, DatePickerInput, TimeInput } from '@mantine/dates';

const UpdatedBookings = () => {
  const roomDetails = useRecoilValue(roomAtom);
  const [selectedOption, setSelectedOption] = useState('Booking');
  const [formData, setFormData] = useState({
    checkInDate: '',
    checkInTime: '',
    duration: '',
    amount: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  const [value, setValue] = useState()
  

  return (
    <div>
      <Header />
      <div style={{ padding: '13px 0px' }}>
        <Tabs defaultValue="first" color='red'  >
          <Tabs.List position='apart' pl={10}pr={10} >
            <Tabs.Tab value="first" style={{fontSize:"1rem",fontWeight:"bold",fontFamily:"Arial", color: selectedOption === 'Booking' ? 'red' : 'inherit',}}
              onClick={() => setSelectedOption('Booking')}
            >Bookings
            </Tabs.Tab>
            <Tabs.Tab value="second" style={{fontSize:"1rem",fontWeight:"bold",fontFamily:"Arial",color: selectedOption === 'Accommidation' ? 'red' : 'inherit' }}
              onClick={() => setSelectedOption('Accommidation')}
            >Accommidation</Tabs.Tab>
            <Tabs.Tab value="third" style={{fontSize:"1rem",fontWeight:"bold",fontFamily:"Arial",color: selectedOption === 'Depart' ? 'red' : 'inherit' }}
              onClick={() => setSelectedOption('Depart')}
            >Depart</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>
      <div style={{ display: 'flex', margin: '20px', borderRadius: '5px', justifyContent: 'space-between', height: '34px', border: ' 3px solid #FE000099' }}>
        <p style={{ marginTop: '6px', marginLeft: '8px' }}>Room.No-{roomDetails.roomNo}</p>
        <p style={{ marginTop: '6px', marginRight: '8px' }}>{roomDetails.status}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <Text style={{ fontWeight: '500', marginLeft: '25px',fontSize:'0.875rem' }}>Revised Check-out Date</Text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: '6px' }}>
          {/* <DatePickerInput
          id='dateInput'
            label=""
            placeholder="YYYY-MM-DD"
            pattern="\d{4}-\d{2}-\d{2}"
            value={formData.checkInDate}
            onChange={(value) => handleInputChange('checkInDate', value)}
            required
            style={{ width: '40%',appearance:"none" }}
            // disabled
          /> */}
           <DatePickerInput
      label=""
      placeholder="YYYY-MM-DD"
      value={value}
      onChange={setValue}
      style={{ width: '40%',appearance:"none" }}
      // mx="auto"
      // maw={400}
    />
          
          <TimeInput
            // label=""
            // placeholder="HH:MM"
            // type="number" 
            // pattern="\d{2}:\d{2}"
            // // value={formData.checkInTime}
            // onChange={(value) => handleInputChange('checkInTime', value)}
            // required
            style={{ width: '40%' }}
                    
              label=""
              // placeholder="HH:MM"
              withAsterisk
          />
        
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: '10px' }}>
        <TextInput
          label="Total Number of Days"
          placeholder="Enter number of days"
          type="number"
          min={1}
          value={formData.duration}
          onChange={(value) => handleInputChange('duration', value)}
          style={{ width: '40%' }}
        />
        <TextInput
          label="Tariff"
          type="number"
          placeholder="Amount"
          value={formData.amount}
          onChange={(value) => handleInputChange('amount', value)}
          style={{ width: '40%' }}
        />
      </div>
      <TextInput
        label="Total Amount"
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={(value) => handleInputChange('amount', value)}
        style={{ width: "85%", marginLeft: "7%" }}
      />
      <div style={{ paddingTop: "18px" }}>
        <label style={{ fontWeight: "500", marginLeft: "25px" }}>Payment details</label>
        <Card>
          <SimpleGrid cols={2}>
            <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column", marginLeft: "10px", height: "120px" }}>
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
            <div style={{ display: "flex", justifyContent: "flex-end", flexDirection: "column", marginLeft: "30%", top: "0" }}>
              <Text size="md" weight={500} style={{ marginBottom: 10 }}>
                {roomDetails.name}
              </Text>
              <Text size="md" weight={500} style={{ marginBottom: 10 }}>
                {roomDetails.deptDate}
              </Text>
              <Text size="md" weight={500} style={{ marginBottom: 10 }}>
                {roomDetails.totalAmount}
              </Text>
              <Text size="md" weight={500} style={{ marginBottom: 10 }}>
                {roomDetails.pendingAmount}
              </Text>
            </div>
          </SimpleGrid>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px" }}>
            <Button style={{ width: "105px", height: "34px", backgroundColor: "#FE0000", marginTop: '0px' }}>Submit</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default UpdatedBookings;
