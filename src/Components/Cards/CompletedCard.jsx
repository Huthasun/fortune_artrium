import React from 'react';
import { Card, Text,Button,SimpleGrid } from '@mantine/core';

const CompletedCard = () => {
  return (
    
    // <div style={{padding:"30px"}}>
    //    <Card
    //   shadow="sm"
    //   style={{ border: '3px solid #FE000099', maxWidth: 400, margin: 'auto', padding: 10 ,display:"flex",flexDirection:"column",justifyContent:"space-around"}}
    // >
    //      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
    //     <Text size="md" weight={700}>
    //       Room No: 101
    //     </Text>
    //     <Text size="md" weight={700} style={{ textAlign: 'right' }}>
    //       Pending 
    //     </Text>
    //   </div>
    //   <div style={{padding:"20px"}}>
    //   <Text size="md" weight={700} style={{ marginBottom: 10 }}>
    //     Name: Sunny
    //   </Text>
    //   <Text size="md" weight={700} style={{ marginBottom: 10 }}>
    //     Dept Date: 12/06/2002
    //   </Text>
    //   <Text size="md" weight={700} style={{ marginBottom: 10 }}>
    //     Total Amount: $1000
    //   </Text>
    //   <Text size="md" weight={700} style={{ marginBottom: 10 }}>
    //     Paid Amount: $500
    //   </Text>
    //   <Text size="md" weight={700} style={{ marginBottom: 10 }}>
    //     Pending Amount: $500
    //   </Text>
      
    //   <Button style={{width:"94px",height:"27px",backgroundColor:"#FE0000"}}>Change</Button>
    //   </div>
    // </Card>
   
    // </div>
    <Card
    shadow="sm"
       style={{ border: '3px solid #03C03C99', maxWidth: 400, margin: 'auto', padding: 10 ,display:"grid",borderRadius:"8px"}}
    
    >
      <div style={{width:"346px",top:"35px",border:"1px solid white",display:"flex",justifyContent:"space-between",paddingTop:"0px",margin:"0px"}}>
            <p style={{marginTop:"0px"}}>Room.No-101</p>
             <p style={{marginTop:"0px"}}>Completed</p>
    </div>
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
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <Button style={{width:"94px",height:"28px",backgroundColor:"#FE0000",marginTop:'0px'}}>Modify</Button> 
      <Button style={{width:"94px",height:"28px",backgroundColor:"#FE0000",marginTop:'0px'}}>Depart</Button> 
      </div>

      
    </Card>
  )
}

export default CompletedCard
