
// import React   from 'react';
// // import React, from 'react';
// import { Card, Text,Button,SimpleGrid } from '@mantine/core';
// import { useNavigate } from 'react-router-dom';



// const PendigCard = (props) => {
//   const { selectedRoom } = props;
//   const navigate = useNavigate();

//   const handleModifyClick = () => {
//     navigate("/updatebooking" );
//   };
//   return (
    
    
//     <Card
//     shadow="sm"
//        style={{ border: '3px solid #FE000099', maxWidth: 400, margin: 'auto', padding: 10 ,display:"grid",borderRadius:"8px"}}
    
//     >
//       <div style={{width:"346px",top:"35px",border:"1px solid white",display:"flex",justifyContent:"space-between",paddingTop:"0px",margin:"0px"}}>
//             <p style={{marginTop:"0px"}}>Room.No-{selectedRoom.roomNo}</p>
//              <p style={{marginTop:"0px",marginRight:"40px"}}>{selectedRoom.status}</p>
//     </div>
//        <SimpleGrid cols={2}>
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
//       <div  style={{display:"flex",justifyContent:"flex-end",flexDirection:"column",marginLeft:"43px",top:"0"}}>
//       <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//       {selectedRoom.name}
//       </Text>
//       <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//       {selectedRoom.deptDate}
//       </Text>
//       <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//       {selectedRoom.totalAmount}
//       </Text>
//        <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//        {selectedRoom.pendingAmount}
//       </Text>


//       </div>
//       </SimpleGrid>
//       <Button style={{width:"94px",height:"28px",backgroundColor:"#FE0000",marginTop:'0px'}} onClick={handleModifyClick}>Modify</Button> 

      
//     </Card>
//   )
// }

// export default PendigCard


// import React from 'react';
// import { Card, Text, Button, SimpleGrid, Space } from '@mantine/core';
// import { useNavigate } from 'react-router-dom';
// import UpdatedBookings from '../UpdateBookings/UpadatedBookings';


// const PendingCard = (props) => {
//   const { selectedRoom } = props;
//   const navigate = useNavigate();
 

 


//   const handleModifyClick = () => {
    

//     navigate("/app/updatebooking");
//   };

//   return (
//     <>
//     {/* <Card
//       shadow="sm"
//       style={{
//         // border: '3px solid #FE000099',
//         maxWidth: '100%',
//         margin: 'auto',
//         padding: '10px',
//         display: 'grid',
//         borderRadius: '8px',
//       }}
//     > */}
//       {/* <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0px', margin: '0px',height:"33px" }}>
       
//       </div> */}
//       <SimpleGrid cols={2}>
     
//         <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', marginLeft: '10px' }}>
//         <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//             Room.No- {selectedRoom.roomNo}
//           </Text>
       

//           <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//             Name
//           </Text>
//           <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//             Dept Date
//           </Text>
//           <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//             Total Amount
//           </Text>
//           <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//             Pending Amount
//           </Text>
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', marginLeft: '26px', top: '0' }}>
//         <Text size="md" weight={500} style={{ marginBottom: 10 }}>{selectedRoom.status}</Text>
//           <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//             {selectedRoom.name}
//           </Text>
//           <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//             {selectedRoom.deptDate}
//           </Text>
//           <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//             {selectedRoom.totalAmount}
//           </Text>
//           <Text size="md" weight={500} style={{ marginBottom: 10 }}>
//             {selectedRoom.pendingAmount}
//           </Text>
//         </div>
//       </SimpleGrid>
//      <Space h={"1rem"} />
//       <Button style={{ width: '94px', height: '31px', backgroundColor: '#FE0000', marginTop: '0px' ,padding:"3px",marginLeft:"8px"}} onClick={handleModifyClick}>Modify</Button>
     
//     {/* </Card> */}
//     </>
//   );
// };

// export default PendingCard;
import React, { useState }from 'react';
import { Card, Text, Button, SimpleGrid, Space,Modal } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import client from '../../API/api';

const PendingCard = ({ selectedRoom, onClose, refreshRoomStatus }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Loading state

// Extract `pmytotalAmount` from `bookingDetails`
const totalAmount = selectedRoom.bookingDetails?.pmytotalAmount || 'N/A';

  const handleCheckOutClick = async () => {
    setIsLoading(true);  // Set loading state to true
    try {
      console.log('PendingCard hotelId:', selectedRoom.hotelId);
      const response = await client.put(
        '/api/room-status/update-status',
        { roomNo: selectedRoom.roomNo, status: 'housekeeping',hotelId: selectedRoom.hotelId }  // Send room number and status for update
      );
  
      if (response.status === 200) {
        // alert('Room status updated to housekeeping successfully!');
        // You can refresh the page, navigate to another page, or update state here.
        refreshRoomStatus(); 
        navigate('/app/tabs');  // Redirect to a rooms list or dashboard page
        onClose();
      }
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('Failed to update room status. Please try again.');
    } finally {
      setIsLoading(false);  // Set loading state to false after the request completes
    }
  };
  

  const handleModifyClick = () => {
    // Save selected room details in local storage
    localStorage.setItem('selectedRoomData', JSON.stringify(selectedRoom));

    // Navigate to the update booking page
    navigate('/app/extend');
  };

  const getFormattedCheckOutDate = (dateTimeString) => {
    if (!dateTimeString) return 'N/A';
    const date = new Date(dateTimeString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return (
    <>
      <Modal
          opened={true}
          onClose={onClose}
          centered
          xOffset={-10}
          size={350}
        >
      <Card
        shadow="sm"
        style={{
          maxWidth: '100%',
          margin: 'auto',
          padding: '10px',
          display: 'grid',
          borderRadius: '8px',
        }}
      >
        <SimpleGrid cols={2}>
          {/* Div for Labels */}
          <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '10px' }}>
            <Text size="md" weight={500} style={{ marginBottom: 10 }}>
              Room No:
            </Text>
            <Text size="md" weight={500} style={{ marginBottom: 10 }}>
              Status:
            </Text>
            <Text size="md" weight={500} style={{ marginBottom: 10 }}>
              Name:
            </Text>
            <Text size="md" weight={500} style={{ marginBottom: 10 }}>
              CheckOutDate:
            </Text>
            <Text size="md" weight={500} style={{ marginBottom: 10 }}>
            Total Amount:
            </Text>
            <Text size="md" weight={500} style={{ marginBottom: 10 }}>
              Paid Amount:
            </Text>
            <Text size="md" weight={500} style={{ marginBottom: 10 }}>
              Pending Amount:
            </Text>
          </div>

          {/* Div for Values */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', marginLeft: '26px', top: '0' }}>
            <Text size="md" weight={500} style={{ marginBottom: 10 }}>
              {selectedRoom.roomNo || 'N/A'}
            </Text>
            <Text size="md" weight={500} style={{ marginBottom: 10 }}>
              {selectedRoom.roomStatus || 'N/A'}
            </Text>
            <Text size="md" weight={500} style={{ marginBottom: 10 }}>
            {selectedRoom.primaryGuestName || 'N/A'}
            </Text> 
            <Text size="md" weight={500} style={{ marginBottom: 10 }}>
            {getFormattedCheckOutDate(selectedRoom.CheckOutDateTime)}
            </Text>
            <Text size="md" weight={500} style={{ marginBottom: 10 }}>
            {selectedRoom.pmytotalAmount}
            </Text>
            <Text size="md" weight={500} style={{ marginBottom: 10 }}>
              {selectedRoom.paidAmount || 'N/A'}
            </Text>
            <Text size="md" weight={500} style={{ marginBottom: 10 }}>
              {selectedRoom.balanceAmount || '0'}
            </Text>
          </div>
        </SimpleGrid>

        <Space h="1rem" />
        <div style={{display:"flex",justifyContent:"space-around"}}>
        <Button
          style={{
            width: '94px',
            height: '31px',
            backgroundColor: '#FE0000',
            marginTop: '0px',
            padding: '3px',
            marginRight:"8px"
          }}
          onClick={handleModifyClick}
        >
          Modify
        </Button>
        <Button
          style={{
            width: '94px',
            height: '31px',
            backgroundColor: '#FE0000',
            marginTop: '0px',
            padding: '3px',
            marginLeft: '8px',
          }}
          onClick={handleCheckOutClick}
        >
          CheckOut
        </Button>
        </div>
      </Card>
      </Modal>
    </>
  );
};

export default PendingCard;
