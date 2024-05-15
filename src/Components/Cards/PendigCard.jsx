
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


import React from 'react';
import { Card, Text, Button, SimpleGrid } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const PendingCard = (props) => {
  const { selectedRoom } = props;
  const navigate = useNavigate();

  const handleModifyClick = () => {
    navigate("/updatebooking");
  };

  return (
    
    <Card
      shadow="sm"
      style={{
        border: '3px solid #FE000099',
        maxWidth: '100%',
        margin: 'auto',
        padding: '10px',
        display: 'grid',
        borderRadius: '8px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0px', margin: '0px',height:"33px" }}>
        <p style={{ margin: '0px' }}>Room.No-{selectedRoom.roomNo}</p>
        <p style={{ margin: '0px', marginRight: '5px' }}>{selectedRoom.status}</p>
      </div>
      <SimpleGrid cols={2}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', marginLeft: '10px' }}>
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
        <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', marginLeft: '43px', top: '0' }}>
          <Text size="md" weight={500} style={{ marginBottom: 10 }}>
            {selectedRoom.name}
          </Text>
          <Text size="md" weight={500} style={{ marginBottom: 10 }}>
            {selectedRoom.deptDate}
          </Text>
          <Text size="md" weight={500} style={{ marginBottom: 10 }}>
            {selectedRoom.totalAmount}
          </Text>
          <Text size="md" weight={500} style={{ marginBottom: 10 }}>
            {selectedRoom.pendingAmount}
          </Text>
        </div>
      </SimpleGrid>
      <Button style={{ width: '94px', height: '31px', backgroundColor: '#FE0000', marginTop: '0px' ,padding:"3px"}} onClick={handleModifyClick}>Modify</Button>
    </Card>
  );
};

export default PendingCard;