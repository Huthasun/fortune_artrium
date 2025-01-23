// import React from 'react';
// import { Accordion, Button, Card, Group, Text } from '@mantine/core';
// import RegistrationCard from '../Cards/RegisterationCard';
// import PrimaryGuestdetails from './PrimaryGuestdetails';


// const GuestRecords = () => {
//     const records = parseInt(window.localStorage.getItem('numGuests'))

//     // const guestName = useRecoilValue(guestAtom)


    

    

//   return (
//     <div>
//       {/* <h2>Number of Guests: {localStorage.getItem('numGuests')}</h2> */}
//       <Group>
//           {/* <ActionIcon size="sm" onClick={() => navigate(-1)}>
//             <BiArrowBack />
//           </ActionIcon> */}
//           <Text fz={22} fw={600} ml={15} pt={10}>Guest Details</Text>
//         </Group>
//         <Accordion variant="contained" defaultValue="customization">
//         <Text fz={18} fw={600} pb={18} mt={10} ml={15} pt={10}>Room.No-{window.localStorage.getItem('roomNo')}</Text>

//         <Accordion.Item value="customization">
//           <Accordion.Control>Primary Guest details</Accordion.Control>
//           <Accordion.Panel>
//             <PrimaryGuestdetails/>
//           </Accordion.Panel>
//         </Accordion.Item>
//       </Accordion>
//       <Accordion variant="contained">
//       {/* <Text fz={18} fw={600} pb={18} mt={10} ml={15} pt={10}>Room.No-{window.localStorage.getItem('roomNo')}</Text> */}

//       {Array.from({length:records - 1}).map((_,index)=>
      
//         <Accordion.Item value={`Guest ${index + 1}`} key={index}>
//           <Accordion.Control>{ `Guest ${index + 1}`}</Accordion.Control>
//           <Accordion.Panel>
//            <Card>
//             <RegistrationCard />
//             </Card>
//             {/* Colors, fonts, shadows and many other parts are customizable to fit your design needs */}
//           </Accordion.Panel>
//         </Accordion.Item>
//     )} 
//       </Accordion>
//       <Button type="submit" style={{ marginTop: '15px', width: '35%', background: 'red' }}>Submit</Button>

//     </div>
//   );
// };

// export default GuestRecords;


// Huthasan

  // import React from 'react';
  // import { Accordion, Box, Button, Card, Group, ScrollArea, Text } from '@mantine/core';
  // import { useNavigate } from 'react-router-dom';
  // import RegistrationCard from '../Cards/RegisterationCard';
  // import PrimaryGuestdetails from './PrimaryGuestdetails';

  // const GuestRecords = () => {
  //   const navigate = useNavigate();
  //   const records = parseInt(window.localStorage.getItem('numGuests'));

  //   const handleSubmit = () => {
  //     // Log data to console
  //     console.log('Data submitted:', {
  //       numGuests: records,
  //       roomNo: window.localStorage.getItem('roomNo'),
  //       // Add other relevant data here as needed
  //     });

  //     // Navigate to the submit details page
  //     navigate('/app/submitdetails');
  //   };

  //   return (
  //     <div>
        
        
  //         <Text fz={22} fw={600} ml={15} pt={10}>Guest Details</Text>
        
  //       <Accordion variant="contained" defaultValue="customization">
  //         <Text fz={18} fw={600} pb={18} mt={10} ml={15} pt={10}>Room.No-{window.localStorage.getItem('roomNo')}</Text>

  //         <Accordion.Item value="customization">
  //           <Accordion.Control>Primary Guest details</Accordion.Control>
  //           <Accordion.Panel>
  //             <PrimaryGuestdetails />
  //           </Accordion.Panel>
  //         </Accordion.Item>
  //       </Accordion> 
  //       <Accordion variant="contained">
  //         {Array.from({ length: records - 1 }).map((_, index) => (
  //           <Accordion.Item value={`Guest ${index + 1}`} key={index}>
  //             <Accordion.Control>{`Guest ${index + 1}`}</Accordion.Control>
  //             <Accordion.Panel>
  //               <Card>
  //                 <RegistrationCard guestIndex={index}/>
  //               </Card>
  //             </Accordion.Panel>
  //           </Accordion.Item>
  //         ))}
  //       </Accordion>
  //       <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  //           <Button
  //             type="button"
  //             style={{ width: '100px', backgroundColor: 'red',marginRight:"70%",}}
  //             onClick={handleSubmit}
  //           >
  //             Next
  //           </Button>
  //         </Box>
        
  //     </div>
  //   );
  // };

  // export default GuestRecords;

  import React, { useState } from 'react';
  import { Accordion, Box, Button, Card, Text } from '@mantine/core';
  import { useNavigate } from 'react-router-dom';
  import RegistrationCard from '../Cards/RegisterationCard';
  import PrimaryGuestdetails from './PrimaryGuestdetails';
  import FindGuest from '../Cards/FindGuest'; // Import FindGuest component
  
  const GuestRecords = () => {
    const navigate = useNavigate();
    const records = parseInt(window.localStorage.getItem('numGuests'));
    const [isFindGuestOpen, setIsFindGuestOpen] = useState(false); // State to control FindGuest modal
  
    const handleSubmit = () => {
      console.log('Data submitted:', {
        numGuests: records,
        roomNo: window.localStorage.getItem('roomNo'),
      });
      navigate('/app/submitdetails');
    };
  
    const handleFindClick = () => {
      setIsFindGuestOpen(true); // Open FindGuest modal
    };
  
    return (
      <div>
        <Text fz={22} fw={600} ml={15} pt={10}>Guest Details</Text>
        
        <Accordion variant="contained" defaultValue="customization">
          <Text fz={18} fw={600} pb={18} mt={10} ml={15} pt={10}>
            Room.No-{window.localStorage.getItem('roomNo')}
          </Text>
  
          <Accordion.Item value="customization">
            <Accordion.Control>Primary Guest details</Accordion.Control>
            <Accordion.Panel>
              <PrimaryGuestdetails />
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion> 
        
        <Accordion variant="contained">
          {Array.from({ length: records - 1 }).map((_, index) => (
            <Accordion.Item value={`Guest ${index + 1}`} key={index}>
              <Accordion.Control>{`Guest ${index + 1}`}</Accordion.Control>
              <Accordion.Panel>
                <Card>
                  <RegistrationCard guestIndex={index}/>
                </Card>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
        
        {/* <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}> */}
          <div style={{ display: "flex", justifyContent: "space-around", marginTop: '15px' }}>
            <Button
              style={{
                width: '94px',
                height: '31px',
                backgroundColor: '#FE0000',
                marginTop: '0px',
                padding: '3px',
                marginRight: "8px"
              }}
              onClick={handleSubmit}
            >
              Next
            </Button>
            
            {/* <Button
              style={{
                width: '94px',
                height: '31px',
                backgroundColor: '#FE0000',
                marginTop: '0px',
                padding: '3px',
                marginLeft: '8px',
              }}
              onClick={handleFindClick} // Opens the FindGuest modal on click
            >
              Find
            </Button> */}
          </div>
        {/* </Box> */}
        
        {/* FindGuest Modal */}
        {isFindGuestOpen && (
          <FindGuest onClose={() => setIsFindGuestOpen(false)} />
        )}
      </div>
      // <div></div>
    );
  };
  
  export default GuestRecords;

  