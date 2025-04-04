
// import React, { useEffect, useState } from 'react';
// import { Table, Button, MultiSelect, TextInput, Modal, Textarea,Pagination, Group, ActionIcon, Select } from '@mantine/core';
// import { IconDownload, IconTrash, IconEdit } from '@tabler/icons-react';
// import { IoMdCalendar } from 'react-icons/io';
// import client from '../../API/api';
// import { IconSearch } from '@tabler/icons-react';
// import { saveAs } from 'file-saver';
// import { DatePicker } from '@mantine/dates';
// import { format } from 'date-fns';


// const BookingDetailsTable = () => {
//   const [data, setData] = useState([]);
//   const [visibleColumns, setVisibleColumns] = useState([]);
//   const [search, setSearch] = useState('');
//   const [openModal, setOpenModal] = useState(false); 
//   const [openEditModal, setOpenEditModal] = useState(false); // Edit modal state
//   const [deleteId, setDeleteId] = useState(null);
//   // const [editBooking, setEditBooking] = useState(null); // To store the booking data being edited
//   const [activePage, setActivePage] = useState(1); // Current page state
//   const itemsPerPage = 10; // Number of items per page
//   const [value, setValue] = useState([]);
//   const [opened, setOpened] = useState(false);
//   const [openedcalender, setOpenedcalender] = useState(false);
//   const columnOptions = [
//     { value: 'roomNo', label: 'Room No' },
//     { value: 'hotelName', label: 'Hotel Name' }, // Add this line
//     { value: 'bookingType', label: 'Booking Type' },
//     { value: 'noOfGuests', label: 'No. Of Guests' },
//     { value: 'noOfAdults', label: 'No. Of Adults' },
//     { value: 'noOfKids', label: 'No. Of Kids' },
//     { value: 'primaryGuestName', label: 'Primary Guest Name' },
//     { value: 'primaryGuestPhoneNumber', label: 'Primary Guest Phone' },
//     { value: 'primaryGuestIdNumber', label: 'Primary Guest ID' },
//     { value: 'guestDetails', label: 'Guest Details' },
//     { value: 'checkInDateTime', label: 'Check In' },
//     { value: 'checkOutDateTime', label: 'Check Out' },
//     { value: 'numOfDays', label: 'No. of Days' },
//     { value: 'modeOfPayment', label: 'Mode Of Payment' },
//     { value: 'totalAmount', label: 'Tarrif' },
//     { value: 'paidAmount', label: 'Paid Amount' },
//     { value: 'balance', label: 'Balance' },
//     { value: 'pmytotalAmount', label: 'Total Amount' },
//     { value: 'paymentDetails', label: 'Payment Details' },
//     { value: 'staffName', label: 'Staff Name' },
//     { value: 'action', label: 'Action' },
//   ];
//   const [editBooking, setEditBooking] = useState({
//     guestDetails: [
//       // Example structure
//       {
//         name: '',
//         gender: '',
//         guestIdType: '',
//         guestIdNumber: '',
//       },
//     ],
//     paymentDetails: [
//       { modeOfPayment: '', paidAmount: 0, _id: '' },
//     ],
//   });

//   const [guestIdProof, setGuestIdProof] = useState('');
//   const getMaxLength = (guestIdProof) => {
//     switch (guestIdProof) {
//       case 'drivers_license':
//         return 16;
//       case 'passport':
//         return 8;
//       case 'addhar_id':
//         return 12;
//       default:
//         return null; // Default length or value can be adjusted
//     }
//   };
//   const formatAadhaarNumber = (value) => {
//     if (guestIdProof !== 'addhar_id') return value; // Only format for Aadhaar ID
//     const cleaned = value.replace(/\D/g, ''); // Remove non-digit characters
//     const match = cleaned.match(/^(\d{4})(\d{4})(\d{4})$/);
//     if (match) {
//       return `${match[1]}-${match[2]}-${match[3]}`;
//     }
//     return cleaned; // Return cleaned value if not fully matched
//   };

//   useEffect(() => {
//     setVisibleColumns(columnOptions.map((opt) => opt.value)); // Initialize all columns as visible
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await client.get('/bookings/get_all_bookings');
//       if (response.data && response.data.data) {
//         const sortedData = response.data.data.sort((a, b) => {
//           const dateA = new Date(a.checkInDateTime || a.createdAt).getTime();
//           const dateB = new Date(b.checkInDateTime || b.createdAt).getTime();
//           return dateB - dateA; // descending order
//         });
//         setData(sortedData);
//       } else {
//         setData([]);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const filteredData = data.filter((item) => {
//     const matchesSearch =
//       search === '' ||
//       Object.values(item).some(value =>
//         value && typeof value === 'string'
//           ? value.toLowerCase().includes(search.toLowerCase())
//           : value && typeof value === 'number'
//             ? value.toString().toLowerCase().includes(search.toLowerCase())
//             : false
//       ) ||
//       item.guestDetails?.some(g =>
//         g.name && g.name.toLowerCase().includes(search.toLowerCase())
//       ) ||
//       item.paymentDetails?.some(p =>
//         p.modeOfPayment?.toLowerCase().includes(search.toLowerCase()) ||
//         p.paidAmount?.toString().toLowerCase().includes(search.toLowerCase())
//       );

//     return matchesSearch;
//   });
//   const downloadCSV = () => {
//     const csvData = data.map((item) => ({
//       RoomNo: item.roomNo || '',
//       HotelName: item.hotelName || '', 
//       BookingType: item.bookingType || '', // Assuming this field exists in your data
//       NoOfGuests: item.noOfGuests?.toString() || '',
//       NoOfAdults: item.noOfAdults?.toString() || '',
//       NoOfKids: item.noOfKids?.toString() || '',
//       PrimaryGuestName: item.primaryGuestName || '',
//       PrimaryGuestPhone: item.primaryGuestPhoneNumber || '',
//       PrimaryGuestID: item.primaryGuestIdNumber || '',
//       GuestDetails: item.guestDetails
//         ?.map((g) => `${g.name || '-'} (${g.gender || '-'}) (${g.guestIdType || '-'}: ${g.guestIdNumber || '-'}: ${g.phoneNumber || '-'}) `)
//         .join('; '),
//       CheckInDate: item.checkInDateTime ? format(new Date(item.checkInDateTime), 'dd/MM/yyyy') : '',
//       CheckInTime: item.checkInDateTime ? format(new Date(item.checkInDateTime), 'HH:mm') : '',
//       CheckOutDate: item.checkOutDateTime ? format(new Date(item.checkOutDateTime), 'dd/MM/yyyy') : '',
//       CheckOutTime: item.checkOutDateTime ? format(new Date(item.checkOutDateTime), 'HH:mm') : '',
//       ModeOfPayment: item.modeOfPayment || '',
//       PaidAmount: item.paidAmount?.toString() || '',
//       Balance: item.balance?.toString() || '',
//       Tarrif: item.tarrif?.toString() || '',
//       PaymentDetails: item.paymentDetails
//       ?.map((payment) => `${payment.modeOfPayment || '-'}: ₹${payment.paidAmount || '0'} (ID: ${payment._id || '-'})`)
//       .join('; '), // Format payment details into a single string
  
//       StaffName: item.username || '',
//       TotalAmount: item.pmytotalAmount?.toString() || '',
//     }));

//     // Create CSV content
//     const csvContent = [
//       Object.keys(csvData[0]), // Use keys from the first object for column headers
//       ...csvData.map((row) => Object.values(row)),
//     ]
//       .map((row) => row.join(','))
//       .join('\n');

//     const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
//     saveAs(blob, 'booking_details.csv');
//   };

  
//   const removeBooking = async (deleteId) => {
//     try {
//       const response = await client.delete(`/bookings/deleteGuest/${deleteId}`);
//       if (response.status === 200) {
//         setData(data.filter((item) => item.bookingId !== deleteId)); // Filter out the deleted record
//         setOpenModal(false); // Close the modal after deletion
//         setDeleteId(null); // Reset deleteId to null
//       }
//     } catch (error) {
//       console.error('Error deleting guest:', error);
//     }
//   };

//   const handleEdit = (item) => {
//     setEditBooking(item); // Set the booking details in editBooking state
//     setOpenEditModal(true); // Open the edit modal
//   };

//   const handleSaveEdit = async () => {
//     if (!editBooking) return;
//     try {
//       const response = await client.put(`/bookings/updateBooking/${editBooking.bookingId}`, editBooking);
//       if (response.status === 200) {
//         setData(data.map((item) => (item.bookingId === editBooking.bookingId ? editBooking : item)));
//         setOpenEditModal(false); // Close the edit modal
//         setEditBooking(null); // Clear the edit state
//       }
//     } catch (error) {
//       console.error('Error updating booking:', error);
//     }
//   };

//   // Pagination Logic
//   const paginatedData = filteredData.slice(
//     (activePage - 1) * itemsPerPage,
//     activePage * itemsPerPage
//   );

//   return (
//     <div>
//       <MultiSelect
//         data={columnOptions}
//         value={visibleColumns}
//         onChange={setVisibleColumns}
//         placeholder="Select visible columns"
//         clearable
//         style={{ marginBottom: '20px', width: '100%' }}
//       />
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <TextInput
//           icon={<IconSearch />}
//           placeholder="Search all fields"
//           value={search}
//           onChange={(event) => setSearch(event.currentTarget.value)}
//           style={{ width: '84%' }}
//         />
//      <Group position="center">
//         <ActionIcon
//           variant="light"
//           onClick={() => setOpened(true)} // Open modal on click
//           aria-label="Open calendar"
//         >
//           <IoMdCalendar size={40} />
//         </ActionIcon>
//       </Group>

//       {/* Modal to show DatePicker */}
//       <Modal
//         opened={opened}
//         onClose={() => setOpened(false)} // Close modal on close action
//         title="Select Date Range"
//         centered // Center the modal
//         size="xs" // Use predefined size (e.g., xs for smaller modal)
//         sx={{
//           maxWidth: 300, // You can use this to further control the max width
//           width: '90%', // Make it 90% of the screen width, or adjust as needed
//           paddingLeft:"2vw"
//         }}
        
//       >
//         <DatePicker
//           type="range" // Enables range selection
//           value={value}
//           onChange={setValue}
//         />
//       </Modal>
//         <Button leftIcon={<IconDownload />} onClick={downloadCSV} style={{ backgroundColor: 'red' }}>
//           Download
//         </Button>
//       </div>

//       <div style={{ marginTop: '20px', overflowX: 'visible' }}>
//         <Table striped highlightOnHover withBorder withColumnBorders style={{ width: '95%', margin: '0 auto' }}>
//           <thead>
            
//             <tr>
//               {visibleColumns.includes('roomNo') && <th>Room No</th>}
//               {visibleColumns.includes('hotelName') && <th>Hotel Name</th>}
//               {visibleColumns.includes('bookingType') && <th>Booking Type</th>}
//               {visibleColumns.includes('noOfGuests') && <th>No. Of Guests</th>}
//               {visibleColumns.includes('noOfAdults') && <th>No. Of Adults</th>}
//               {visibleColumns.includes('noOfKids') && <th>No. Of Kids</th>}
//               {visibleColumns.includes('primaryGuestName') && <th>Primary Guest Name</th>}
//               {visibleColumns.includes('primaryGuestPhoneNumber') && <th>Primary Guest Phone</th>}
//               {visibleColumns.includes('primaryGuestIdNumber') && <th>Primary Guest ID</th>}
//               {visibleColumns.includes('guestDetails') && <th>Guest Details</th>}
//               {visibleColumns.includes('checkInDateTime') && <th>Check In</th>}
//               {visibleColumns.includes('checkOutDateTime') && <th>Check Out</th>}
//               {visibleColumns.includes('numOfDays') && <th>No. of Days</th>}
//               {visibleColumns.includes('modeOfPayment') && <th>Mode Of Payment</th>}

//               {visibleColumns.includes('totalAmount') && <th>Tarrif</th>}
//               {visibleColumns.includes('paidAmount') && <th>Paid Amount</th>}
//               {visibleColumns.includes('balance') && <th>Balance</th>}
//               {visibleColumns.includes('pmytotalAmount') && <th>Total Amount</th>}
//               {visibleColumns.includes('paymentDetails') && <th>Payment Details</th>} {/* New Payment Details Column */}
//               {visibleColumns.includes('staffName') && <th>Staff Name</th>} {/* Add this line */}
//               {visibleColumns.includes('action') && <th>Action</th>}
//             </tr>
//           </thead>
//           <tbody>
//           {paginatedData.length > 0 ? (
//               paginatedData.map((item) => (
//                 <tr key={item.bookingId}>
//                   {visibleColumns.includes('roomNo') && <td>{item.roomNo}</td>}
//                   {visibleColumns.includes('hotelName') && <td>{item.hotelName || '-'}</td>}

//                   {visibleColumns.includes('bookingType') && <td>{item.bookingType}</td>}
//                   {visibleColumns.includes('noOfGuests') && <td>{item.noOfGuests}</td>}
//                   {visibleColumns.includes('noOfAdults') && <td>{item.noOfAdults}</td>}
//                   {visibleColumns.includes('noOfKids') && <td>{item.noOfKids}</td>}
//                   {visibleColumns.includes('primaryGuestName') && <td>
//                     {item.primaryGuestName}</td>}
//                   {visibleColumns.includes('primaryGuestPhoneNumber') && <td>{item.primaryGuestPhoneNumber}</td>}
//                   <td style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
//   {visibleColumns.includes('primaryGuestIdNumber') && (
//     <span>{item.primaryGuestIdNumber}</span>
//   )}
// </td>
//                     {visibleColumns.includes('guestDetails') && (
//   <td>
//     {item.guestDetails && item.guestDetails.length > 0 ? (
//       <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
//         <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//           <thead>
//             <tr style={{ borderBottom: '1px solid #ddd', textAlign: 'left' }}>
//               <th style={{ padding: '5px', fontWeight: '480' }}>Name</th>
//               <th style={{ padding: '5px', fontWeight: '480' }}>Gender</th>
//               <th style={{ padding: '5px', fontWeight: '480' }}>ID Type</th>
//               <th style={{ padding: '5px', fontWeight: '480' }}>ID Number</th>
//               <th style={{ padding: '5px', fontWeight: '480' }}>Phone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {item.guestDetails.map((guest, index) => (
//               <tr key={index} style={{ borderBottom: '1px solid #f0f0f0' }}>
//                 <td style={{ padding: '5px' }}>{guest.name || '-'}</td>
//                 <td style={{ padding: '5px' }}>{guest.gender || '-'}</td>
//                 <td style={{ padding: '5px' }}>{guest.guestIdType || '-'}</td>
//                 <td style={{ padding: '5px' }}>{guest.guestIdNumber || '-'}</td>
//                 <td style={{ padding: '5px' }}>{guest.phoneNumber || '-'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     ) : (
//       '-'
//     )}
//   </td>
// )}

//               {visibleColumns.includes('checkInDateTime') && (
//             <td>
//               <span style={{ display: 'block', textAlign: 'center', fontSize: '14px' }}>
//                 <div
//                   style={{
//                     padding: '5px',
//                     backgroundColor: '#f9f9f9',
//                     borderRadius: '8px',
//                   }}
//                 >
//                   <ul
//                     style={{
//                       listStyleType: 'none', // Removes list dots
//                       margin: 0,
//                       padding: 0,
//                     }}
//                   >
//                     <li>
//                       <span style={{  }}>
//                         {item.checkInDateTime ? format(new Date(item.checkInDateTime), 'dd/MM/yyyy') : '-'}
//                       </span>
//                     </li>
//                     <li>
//                       <span style={{  }}>
//                         {item.checkInDateTime ? format(new Date(item.checkInDateTime), 'HH:mm') : '-'}
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </span>
//             </td>
//           )}
//           {visibleColumns.includes('checkOutDateTime') && (
//             <td>
//               <span style={{ display: 'block', textAlign: 'center', fontSize: '14px' }}>
//                 <div
//                   style={{
//                     padding: '5px',
//                     backgroundColor: '#f9f9f9',
//                     borderRadius: '8px',
//                   }}
//                 >
//                   <ul
//                     style={{
//                       listStyleType: 'none', // Removes list dots
//                       margin: 0,
//                       padding: 0,
//                     }}
//                   >
//                     <li>
//                       <span style={{}}>
//                         {item.checkOutDateTime ? format(new Date(item.checkOutDateTime), 'dd/MM/yyyy') : '-'}
//                       </span>
//                     </li>
//                     <li>
//                       <span style={{ }}>
//                         {item.checkOutDateTime ? format(new Date(item.checkOutDateTime), 'HH:mm') : '-'}
//                       </span>
//                     </li>
//                   </ul>
//                 </div>
//               </span>
//             </td>
//           )}
//                   {visibleColumns.includes('numOfDays') && <td>{item.numOfDays}</td>}
//                   {visibleColumns.includes('modeOfPayment') && <td>{item.modeOfPayment}</td>}
//                   {visibleColumns.includes('totalAmount') && <td>{item.tarrif}</td>}
//                   {visibleColumns.includes('paidAmount') && <td>{item.paidAmount}</td>}
//                   {visibleColumns.includes('balance') && <td>{item.balance}</td>}
//                   {visibleColumns.includes('pmytotalAmount') && <td>{item.pmytotalAmount}</td>}
//                   <td>
//   {item.paymentDetails && item.paymentDetails.length > 0 ? (
//     <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
//       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
//         <thead>
//           <tr style={{ borderBottom: '1px solid #ddd', textAlign: 'left' }}>
//             <th style={{ padding: '5px', fontWeight: '480' }}>Amount</th>
//             <th style={{ padding: '5px', fontWeight: '480' }}>Mode</th>
//             <th style={{ padding: '5px', fontWeight: '480' }}>Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {item.paymentDetails.map((payment, index) => (
//             <tr key={index} style={{ borderBottom: '1px solid #f0f0f0' }}>
//               <td style={{ padding: '5px' }}>₹{payment.amount}</td>
//               <td style={{ padding: '5px' }}>{payment.modeOfPayment}</td>
//               <td style={{ padding: '5px' }}>
//                 {payment.date ? format(new Date(payment.date), 'dd/MM/yyyy') : '-'}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   ) : (
//     '-'
//   )}
// </td>
          
//                   {visibleColumns.includes('staffName') && <td>{item.username}</td>} {/* Display staffName here */}
//                   {visibleColumns.includes('action') && (
//                     <td>
//                       <Button  size="xs" leftIcon={<IconEdit style={{fontSize:"12px"}} />} color="gray" onClick={() => handleEdit(item)}>
//                         Edit
//                       </Button>
//                       <Button
//                         size="xl"
//                         variant="light"
//                         color="red"
//                         // onClick={() => removeBooking(item.bookingId)}
//                         onClick={() => {
//                           setDeleteId(item.bookingId); // Set the ID of the guest to be deleted
//                           setOpenModal(true); // Open the modal
//                         }}
//                         title="Remove"
//                       >
//                         <IconTrash size={20} />
//                       </Button>
//                     </td>
//                   )}
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={visibleColumns.length}>No bookings found</td>
//               </tr>
//             )}
//           </tbody>
//         </Table>
//         <Pagination
//         total={Math.ceil(filteredData.length / itemsPerPage)}
//         page={activePage}
//         onChange={setActivePage}
//         siblings={1}
//         style={{ marginTop: '20px', justifyContent: 'center', display: 'flex' }}
//       />
//         <Modal
//   opened={openModal}
//   onClose={() => setOpenModal(false)}
//   title="Confirm Deletion"
// >
//   <p>Are you sure you want to delete this guest record?</p>
//   <Button onClick={() => setOpenModal(false)}>Cancel</Button>
//   <Button
//     color="red"
//     onClick={() => removeBooking(deleteId)} // Pass deleteId to the function
//     style={{ marginLeft: '1rem' }}
//   >
//     Confirm Delete
//   </Button>
// </Modal>
//       </div>

//       {/* Modal for Edit */}
//       <Modal opened={openEditModal} onClose={() => setOpenEditModal(false)} title="Extend Booking Details">
//         <TextInput
//           label="Room No"
//           value={editBooking?.roomNo || ''}
//           onChange={(e) => setEditBooking({ ...editBooking, roomNo: e.target.value })}
//         />
//         <TextInput
//           label="Booking Type"
//           value={editBooking?.bookingType || ''}
//           onChange={(e) => setEditBooking({ ...editBooking, bookingType: e.target.value })}
//         />
//         <TextInput
//           label="No. Of Guests"
//           value={editBooking?.noOfGuests || ''}
//           onChange={(e) => setEditBooking({ ...editBooking, noOfGuests: e.target.value })}
//         />
//         <TextInput
//           label="No. Of Adults"
//           value={editBooking?.noOfAdults || ''}
//           onChange={(e) => setEditBooking({ ...editBooking, noOfAdults: e.target.value })}
//         />
//         <TextInput
//           label="No. Of Kids"
//           value={editBooking?.noOfKids || '0'}
//           onChange={(e) => setEditBooking({ ...editBooking, noOfKids: e.target.value })}
//         /> 
//          <TextInput
//         label="PrimaryGuestName"
//         value={editBooking?.primaryGuestName || ''}
//         onChange={(e) => setEditBooking({ ...editBooking, primaryGuestName: e.target.value })}
//       />
//         <TextInput
//         label="PrimaryGuestPhoneNumber"
//         value={editBooking?.primaryGuestPhoneNumber || ''}
//         onChange={(e) => setEditBooking({ ...editBooking, primaryGuestPhoneNumber: e.target.value })}
//       />
//       {/* <TextInput
//         label="PrimaryGuestIdNumber"
//         value={editBooking?.primaryGuestIdNumber || ''}
//         onChange={(e) => setEditBooking({ ...editBooking, primaryGuestIdNumber: e.target.value })}
//       /> */}
//        <TextInput
//         label="PrimaryGuestIdNumber"
//         value={editBooking?.primaryGuestIdNumber || ''}
//         onChange={(e) => setEditBooking({ ...editBooking, primaryGuestIdNumber: e.target.value })}
//       />
//        {/* Guest Details Inputs */}
//   {editBooking?.guestDetails?.map((guest, index) => (
//     <div key={index} style={{ marginBottom: '10px' }}>
//       <TextInput
//         label={`Guest ${index + 1} Name`}
//         value={guest.name || ''}
//         onChange={(e) => {
//           const updatedGuests = [...editBooking.guestDetails];
//           updatedGuests[index].name = e.target.value;
//           setEditBooking({ ...editBooking, guestDetails: updatedGuests });
//         }}
//       />
//       <TextInput
//         label={`Guest ${index + 1} Gender`}
//         value={guest.gender || ''}
//         onChange={(e) => {
//           const updatedGuests = [...editBooking.guestDetails];
//           updatedGuests[index].gender = e.target.value;
//           setEditBooking({ ...editBooking, guestDetails: updatedGuests });
//         }}
//       />
//       <Select
//             label="Guest ID Proof"
//             placeholder="Select identity proof"
//             data={[
//               { label: 'Aadhaar ID', value: 'addhar_id' },
//               { label: "Driver's License", value: 'drivers_license' },
//               { label: 'Passport', value: 'passport' },
//               { label: 'Voter ID', value:'voter_id'}
//             ]}
//             value={guest.guestIdType || ''}
//             onChange={(value) => {
//               const updatedGuests = [...editBooking.guestDetails];
//               updatedGuests[index].guestIdType = value;
//               setGuestIdProof(value);
//               setEditBooking({ ...editBooking, guestDetails: updatedGuests });
//             }}
//             style={{ marginBottom: 15 }}
//           />

//           {/* Guest ID Number Input */}
//           <TextInput
//             label={`Guest ${index + 1} ID Number`}
//             placeholder="Enter ID number"
//             maxLength={getMaxLength(guest.guestIdType)} // Set max length based on ID type
//             value={formatAadhaarNumber(guest.guestIdNumber || '')} // Format the ID number if Aadhaar ID
//             onChange={(e) => {
//               const updatedGuests = [...editBooking.guestDetails];
//               updatedGuests[index].guestIdNumber = formatAadhaarNumber(e.target.value); // Update guest ID number
//               setEditBooking({ ...editBooking, guestDetails: updatedGuests });
//             }}
//             style={{ marginBottom: 15 }}
//           />
//     </div>
//   ))}
//   <TextInput
//   label="CheckInDate"
//   value={
//     editBooking?.checkInDateTime
//       ? format(new Date(editBooking.checkInDateTime), 'dd/MM/yyyy')
//       : ''
//   }
//   onChange={(e) => {
//     const date = new Date(editBooking?.checkInDateTime || new Date());
//     const [month, day, year] = e.target.value.split('/');
//     date.setMonth(parseInt(month) - 1);
//     date.setDate(parseInt(day));
//     date.setFullYear(parseInt(year));
//     setEditBooking({ ...editBooking, checkInDateTime: date.toISOString() });
//   }}
// />
// <TextInput
//   label="CheckInTime"
//   value={
//     editBooking?.checkInDateTime
//       ? format(new Date(editBooking.checkInDateTime), 'HH:mm')
//       : ''
//   }
//   onChange={(e) => {
//     const date = new Date(editBooking?.checkInDateTime || new Date());
//     const [hours, minutes] = e.target.value.split(':');
//     date.setHours(parseInt(hours));
//     date.setMinutes(parseInt(minutes));
//     setEditBooking({ ...editBooking, checkInDateTime: date.toISOString() });
//   }}
// />
// <TextInput
//   label="CheckOutDate"
//   value={
//     editBooking?.checkOutDateTime
//       ? format(new Date(editBooking.checkOutDateTime), 'dd/MM/yyyy')
//       : ''
//   }
//   onChange={(e) => {
//     const date = new Date(editBooking?.checkOutDateTime || new Date());
//     const [month, day, year] = e.target.value.split('/');
//     date.setMonth(parseInt(month) - 1);
//     date.setDate(parseInt(day));
//     date.setFullYear(parseInt(year));
//     setEditBooking({ ...editBooking, checkOutDateTime: date.toISOString() });
//   }}
// />
// <TextInput
//   label="CheckOutTime"
//   value={
//     editBooking?.checkOutDateTime
//       ? format(new Date(editBooking.checkOutDateTime), 'HH:mm')
//       : ''
//   }
//   onChange={(e) => {
//     const date = new Date(editBooking?.checkOutDateTime || new Date());
//     const [hours, minutes] = e.target.value.split(':');
//     date.setHours(parseInt(hours));
//     date.setMinutes(parseInt(minutes));
//     setEditBooking({ ...editBooking, checkOutDateTime: date.toISOString() });
//   }}
// />
//        {/* <TextInput
//         label="CheckOutDateTime"
//         value={editBooking?.checkOutDateTime || ''}
//         onChange={(e) => setEditBooking({ ...editBooking, checkOutDateTime: e.target.value })}
//       /> */}
//       <TextInput
//         label="No Of Days"
//         value={editBooking?.numOfDays || ''}
//         onChange={(e) => setEditBooking({ ...editBooking, numOfDays: e.target.value })}
//       />
//       <Select
//   label="Mode of Payment"
//   value={editBooking?.modeOfPayment || ''}
//   onChange={(value) => setEditBooking({ ...editBooking, modeOfPayment: value })}
//   data={[
//     { value: 'Credit Card', label: 'Credit Card' },
//     { value: 'Cash', label: 'Cash' },
//     { value: 'UPI', label: 'UPI' },
//   ]}
// />
//       <TextInput
//         label="Tarrif"
//         value={editBooking?.tarrif || ''}
//         onChange={(e) => setEditBooking({ ...editBooking, totalAmount: e.target.value })}
//       />
//        <TextInput
//         label="PaidAmount"
//         value={editBooking?.paidAmount || ''}
//         onChange={(e) => setEditBooking({ ...editBooking, paidAmount: e.target.value })}
//       />
//        <TextInput
//         label="Balance Amount"
//         value={editBooking?.balance || ''}
//         onChange={(e) => setEditBooking({ ...editBooking, balance: e.target.value })}
//       />
//        <TextInput
//         label="Total Amount"
//         value={editBooking?.pmytotalAmount || ''}
//         onChange={(e) => setEditBooking({ ...editBooking, pmytotalAmount: e.target.value })}
//       />
//       {/* {editBooking.paymentDetails?.map((payment, index) => (
//   <div key={index}>
//     <label>Mode of Payment</label>
//     <input
//       value={payment.modeOfPayment}
//       onChange={(e) => {
//         const updatedPayments = [...editBooking.paymentDetails];
//         updatedPayments[index].modeOfPayment = e.target.value;
//         setEditBooking({ ...editBooking, paymentDetails: updatedPayments });
//       }}
//     />
//     <label>Paid Amount</label>
//     <input
//       type="number"
//       value={payment.paidAmount}
//       onChange={(e) => {
//         const updatedPayments = [...editBooking.paymentDetails];
//         updatedPayments[index].paidAmount = e.target.value;
//         setEditBooking({ ...editBooking, paymentDetails: updatedPayments });
//       }}
//     />
//   </div>
// ))} */}
//       {/* <TextInput
//         label="pmytotalAmount"
//         value={editBooking?.pmytotalAmount || ''}
//         onChange={(e) => setEditBooking({ ...editBooking, pmytotalAmount: e.target.value })}
//       /> */}        
//         <div style={{marginTop:"11px"}}>
//         <Button onClick={handleSaveEdit} style={{backgroundColor:"red"}}>Save Changes</Button>
//         </div>
      
//       </Modal>
//     </div>
//   );
// };

// export default BookingDetailsTable;
import React, { useEffect, useState } from 'react';
import { Table, Button, MultiSelect, TextInput, Modal, Textarea, Pagination, Group, ActionIcon, Select } from '@mantine/core';
import { IconDownload, IconTrash, IconEdit } from '@tabler/icons-react';
import { IoMdCalendar } from 'react-icons/io';
import client from '../../API/api';
import { IconSearch } from '@tabler/icons-react';
import { saveAs } from 'file-saver';
import { DatePicker } from '@mantine/dates';
import { format, parseISO } from 'date-fns';

const BookingDetailsTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState([]);
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false); 
  const [openEditModal, setOpenEditModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10;
  const [dateRange, setDateRange] = useState([null, null]);
  const [opened, setOpened] = useState(false);
  const [totalPaidToday, setTotalPaidToday] = useState(0);

  const columnOptions = [
    { value: 'roomNo', label: 'Room No' },
    { value: 'hotelName', label: 'Hotel Name' },
    { value: 'bookingType', label: 'Booking Type' },
    { value: 'noOfGuests', label: 'No. Of Guests' },
    { value: 'noOfAdults', label: 'No. Of Adults' },
    { value: 'noOfKids', label: 'No. Of Kids' },
    { value: 'primaryGuestName', label: 'Primary Guest Name' },
    { value: 'primaryGuestPhoneNumber', label: 'Primary Guest Phone' },
    { value: 'primaryGuestIdNumber', label: 'Primary Guest ID' },
    { value: 'guestDetails', label: 'Guest Details' },
    { value: 'checkInDateTime', label: 'Check In' },
    { value: 'checkOutDateTime', label: 'Check Out' },
    { value: 'numOfDays', label: 'No. of Days' },
    { value: 'modeOfPayment', label: 'Mode Of Payment' },
    { value: 'totalAmount', label: 'Tarrif' },
    { value: 'paidAmount', label: 'Paid Amount' },
    { value: 'balance', label: 'Balance' },
    { value: 'pmytotalAmount', label: 'Total Amount' },
    { value: 'paymentDetails', label: 'Payment Details' },
    { value: 'staffName', label: 'Staff Name' },
    { value: 'action', label: 'Action' },
  ];

  const [editBooking, setEditBooking] = useState({
    guestDetails: [
      {
        name: '',
        gender: '',
        guestIdType: '',
        guestIdNumber: '',
      },
    ],
    paymentDetails: [
      { modeOfPayment: '', paidAmount: 0, _id: '' },
    ],
  });

  const [guestIdProof, setGuestIdProof] = useState('');

  useEffect(() => {
    setVisibleColumns(columnOptions.map((opt) => opt.value));
    fetchData();
  }, []);

  useEffect(() => {
    // Apply both search and date range filters
    const filtered = data.filter((item) => {
      // Date range filter
      const dateInRange = dateRange[0] && dateRange[1] 
        ? isDateInRange(item.checkInDateTime, dateRange[0], dateRange[1])
        : true;
      
      // Search filter
      const matchesSearch = search === '' ||
        Object.values(item).some(value =>
          value && typeof value === 'string'
            ? value.toLowerCase().includes(search.toLowerCase())
            : value && typeof value === 'number'
              ? value.toString().toLowerCase().includes(search.toLowerCase())
              : false
        ) ||
        item.guestDetails?.some(g =>
          g.name && g.name.toLowerCase().includes(search.toLowerCase())
        ) ||
        item.paymentDetails?.some(p =>
          p.modeOfPayment?.toLowerCase().includes(search.toLowerCase()) ||
          p.paidAmount?.toString().toLowerCase().includes(search.toLowerCase())
        );

      return dateInRange && matchesSearch;
    });

    setFilteredData(filtered);
    setActivePage(1); // Reset to first page when filters change
  }, [data, search, dateRange]);

  const isDateInRange = (dateString, startDate, endDate) => {
    const date = parseISO(dateString);
    return date >= startDate && date <= endDate;
  };

  const fetchData = async () => {
    try {
      const response = await client.get('/bookings/get_all_bookings');
      if (response.data && response.data.data) {
        const sortedData = response.data.data.sort((a, b) => {
          const dateA = new Date(a.checkInDateTime || a.createdAt).getTime();
          const dateB = new Date(b.checkInDateTime || b.createdAt).getTime();
          return dateB - dateA;
        });
        setData(sortedData);
        
        // Calculate today's total paid amount
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const todayBookings = sortedData.filter(booking =>
          new Date(booking.checkInDateTime) >= today
        );
        const todayTotal = todayBookings.reduce((total, booking) => 
          total + (booking.paidAmount || 0), 0);
        setTotalPaidToday(todayTotal);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDateRangeApply = () => {
    setOpened(false);
    // The filtering is handled in the useEffect above
  };

  const downloadCSV = () => {
    const csvData = filteredData.map((item) => ({
      RoomNo: item.roomNo || '',
      HotelName: item.hotelName || '', 
      BookingType: item.bookingType || '',
      NoOfGuests: item.noOfGuests?.toString() || '',
      NoOfAdults: item.noOfAdults?.toString() || '',
      NoOfKids: item.noOfKids?.toString() || '',
      PrimaryGuestName: item.primaryGuestName || '',
      PrimaryGuestPhone: item.primaryGuestPhoneNumber || '',
      PrimaryGuestID: item.primaryGuestIdNumber || '',
      GuestDetails: item.guestDetails
        ?.map((g) => `${g.name || '-'} (${g.gender || '-'}) (${g.guestIdType || '-'}: ${g.guestIdNumber || '-'}: ${g.phoneNumber || '-'}) `)
        .join('; '),
      CheckInDate: item.checkInDateTime ? format(new Date(item.checkInDateTime), 'dd/MM/yyyy') : '',
      CheckInTime: item.checkInDateTime ? format(new Date(item.checkInDateTime), 'HH:mm') : '',
      CheckOutDate: item.checkOutDateTime ? format(new Date(item.checkOutDateTime), 'dd/MM/yyyy') : '',
      CheckOutTime: item.checkOutDateTime ? format(new Date(item.checkOutDateTime), 'HH:mm') : '',
      ModeOfPayment: item.modeOfPayment || '',
      PaidAmount: item.paidAmount?.toString() || '',
      Balance: item.balance?.toString() || '',
      Tarrif: item.tarrif?.toString() || '',
      PaymentDetails: item.paymentDetails
        ?.map((payment) => `${payment.modeOfPayment || '-'}: ₹${payment.paidAmount || '0'} (ID: ${payment._id || '-'})`)
        .join('; '),
      StaffName: item.username || '',
      TotalAmount: item.pmytotalAmount?.toString() || '',
    }));

    const csvContent = [
      Object.keys(csvData[0]),
      ...csvData.map((row) => Object.values(row)),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'booking_details.csv');
  };

  const removeBooking = async (deleteId) => {
    try {
      const response = await client.delete(`/bookings/deleteGuest/${deleteId}`);
      if (response.status === 200) {
        setData(data.filter((item) => item.bookingId !== deleteId));
        setOpenModal(false);
        setDeleteId(null);
      }
    } catch (error) {
      console.error('Error deleting guest:', error);
    }
  };

  const handleEdit = (item) => {
    setEditBooking(item);
    setOpenEditModal(true);
  };

  const handleSaveEdit = async () => {
    if (!editBooking) return;
    try {
      const response = await client.put(`/bookings/updateBooking/${editBooking.bookingId}`, editBooking);
      if (response.status === 200) {
        setData(data.map((item) => (item.bookingId === editBooking.bookingId ? editBooking : item)));
        setOpenEditModal(false);
        setEditBooking(null);
      }
    } catch (error) {
      console.error('Error updating booking:', error);
    }
  };

  const paginatedData = filteredData.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  const getMaxLength = (guestIdProof) => {
    switch (guestIdProof) {
      case 'drivers_license':
        return 16;
      case 'passport':
        return 8;
      case 'addhar_id':
        return 12;
      default:
        return null;
    }
  };

  const formatAadhaarNumber = (value) => {
    if (guestIdProof !== 'addhar_id') return value;
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{4})(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return cleaned;
  };

  return (
    <div>
      <MultiSelect
        data={columnOptions}
        value={visibleColumns}
        onChange={setVisibleColumns}
        placeholder="Select visible columns"
        clearable
        style={{ marginBottom: '20px', width: '100%' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TextInput
          icon={<IconSearch />}
          placeholder="Search all fields"
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          style={{ width: '84%' }}
        />
        <Group position="center">
          <ActionIcon
            variant="light"
            onClick={() => setOpened(true)}
            aria-label="Open calendar"
          >
            <IoMdCalendar size={40} />
          </ActionIcon>
        </Group>
        <Button leftIcon={<IconDownload />} onClick={downloadCSV} style={{ backgroundColor: 'red' }}>
          Download
        </Button>
      </div>

      {/* Date range display */}
      {dateRange[0] && dateRange[1] && (
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <p>
            Showing bookings from {format(dateRange[0], 'dd/MM/yyyy')} to {format(dateRange[1], 'dd/MM/yyyy')}
            <Button 
              variant="subtle" 
              size="xs" 
              onClick={() => setDateRange([null, null])}
              style={{ marginLeft: '10px' }}
            >
              Clear filter
            </Button>
          </p>
        </div>
      )}

      {/* Today's total paid amount */}
      <div style={{ marginTop: '10px', textAlign: 'center', fontWeight: 'bold' }}>
        {!dateRange[0] && !dateRange[1] && (
          <p></p>
        )}
      </div>

      {/* Date range picker modal */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Select Date Range"
        centered
        size="xs"
        sx={{
          maxWidth: 300,
          width: '90%',
          paddingLeft: "2vw"
        }}
      >
        <DatePicker
          type="range"
          value={dateRange}
          onChange={setDateRange}
        />
        <Button 
          onClick={handleDateRangeApply}
          fullWidth
          style={{ marginTop: '15px' }}
        >
          Done
        </Button>
      </Modal>

      <div style={{ marginTop: '20px', overflowX: 'visible' }}>
        <Table striped highlightOnHover withBorder withColumnBorders style={{ width: '95%', margin: '0 auto' }}>
          <thead>
            <tr>
              {visibleColumns.includes('roomNo') && <th>Room No</th>}
              {visibleColumns.includes('hotelName') && <th>Hotel Name</th>}
              {visibleColumns.includes('bookingType') && <th>Booking Type</th>}
              {visibleColumns.includes('noOfGuests') && <th>No. Of Guests</th>}
              {visibleColumns.includes('noOfAdults') && <th>No. Of Adults</th>}
              {visibleColumns.includes('noOfKids') && <th>No. Of Kids</th>}
              {visibleColumns.includes('primaryGuestName') && <th>Primary Guest Name</th>}
              {visibleColumns.includes('primaryGuestPhoneNumber') && <th>Primary Guest Phone</th>}
              {visibleColumns.includes('primaryGuestIdNumber') && <th>Primary Guest ID</th>}
              {visibleColumns.includes('guestDetails') && <th>Guest Details</th>}
              {visibleColumns.includes('checkInDateTime') && <th>Check In</th>}
              {visibleColumns.includes('checkOutDateTime') && <th>Check Out</th>}
              {visibleColumns.includes('numOfDays') && <th>No. of Days</th>}
              {visibleColumns.includes('modeOfPayment') && <th>Mode Of Payment</th>}
              {visibleColumns.includes('totalAmount') && <th>Tarrif</th>}
              {visibleColumns.includes('paidAmount') && <th>Paid Amount</th>}
              {visibleColumns.includes('balance') && <th>Balance</th>}
              {visibleColumns.includes('pmytotalAmount') && <th>Total Amount</th>}
              {visibleColumns.includes('paymentDetails') && <th>Payment Details</th>}
              {visibleColumns.includes('staffName') && <th>Staff Name</th>}
              {visibleColumns.includes('action') && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item) => (
                <tr key={item.bookingId}>
                  {visibleColumns.includes('roomNo') && <td>{item.roomNo}</td>}
                  {visibleColumns.includes('hotelName') && <td>{item.hotelName || '-'}</td>}
                  {visibleColumns.includes('bookingType') && <td>{item.bookingType}</td>}
                  {visibleColumns.includes('noOfGuests') && <td>{item.noOfGuests}</td>}
                  {visibleColumns.includes('noOfAdults') && <td>{item.noOfAdults}</td>}
                  {visibleColumns.includes('noOfKids') && <td>{item.noOfKids}</td>}
                  {visibleColumns.includes('primaryGuestName') && <td>{item.primaryGuestName}</td>}
                  {visibleColumns.includes('primaryGuestPhoneNumber') && <td>{item.primaryGuestPhoneNumber}</td>}
                  <td style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {visibleColumns.includes('primaryGuestIdNumber') && (
                      <span>{item.primaryGuestIdNumber}</span>
                    )}
                  </td>
                  {visibleColumns.includes('guestDetails') && (
                    <td>
                      {item.guestDetails && item.guestDetails.length > 0 ? (
                        <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
                          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                              <tr style={{ borderBottom: '1px solid #ddd', textAlign: 'left' }}>
                                <th style={{ padding: '5px', fontWeight: '480' }}>Name</th>
                                <th style={{ padding: '5px', fontWeight: '480' }}>Gender</th>
                                <th style={{ padding: '5px', fontWeight: '480' }}>ID Type</th>
                                <th style={{ padding: '5px', fontWeight: '480' }}>ID Number</th>
                                <th style={{ padding: '5px', fontWeight: '480' }}>Phone</th>
                              </tr>
                            </thead>
                            <tbody>
                              {item.guestDetails.map((guest, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid #f0f0f0' }}>
                                  <td style={{ padding: '5px' }}>{guest.name || '-'}</td>
                                  <td style={{ padding: '5px' }}>{guest.gender || '-'}</td>
                                  <td style={{ padding: '5px' }}>{guest.guestIdType || '-'}</td>
                                  <td style={{ padding: '5px' }}>{guest.guestIdNumber || '-'}</td>
                                  <td style={{ padding: '5px' }}>{guest.phoneNumber || '-'}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        '-'
                      )}
                    </td>
                  )}
                  {visibleColumns.includes('checkInDateTime') && (
                    <td>
                      <span style={{ display: 'block', textAlign: 'center', fontSize: '14px' }}>
                        <div style={{ padding: '5px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                          <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                            <li>
                              <span>
                                {item.checkInDateTime ? format(new Date(item.checkInDateTime), 'dd/MM/yyyy') : '-'}
                              </span>
                            </li>
                            <li>
                              <span>
                                {item.checkInDateTime ? format(new Date(item.checkInDateTime), 'HH:mm') : '-'}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </span>
                    </td>
                  )}
                  {visibleColumns.includes('checkOutDateTime') && (
                    <td>
                      <span style={{ display: 'block', textAlign: 'center', fontSize: '14px' }}>
                        <div style={{ padding: '5px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                          <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                            <li>
                              <span>
                                {item.checkOutDateTime ? format(new Date(item.checkOutDateTime), 'dd/MM/yyyy') : '-'}
                              </span>
                            </li>
                            <li>
                              <span>
                                {item.checkOutDateTime ? format(new Date(item.checkOutDateTime), 'HH:mm') : '-'}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </span>
                    </td>
                  )}
                  {visibleColumns.includes('numOfDays') && <td>{item.numOfDays}</td>}
                  {visibleColumns.includes('modeOfPayment') && <td>{item.modeOfPayment}</td>}
                  {visibleColumns.includes('totalAmount') && <td>{item.tarrif}</td>}
                  {visibleColumns.includes('paidAmount') && <td>{item.paidAmount}</td>}
                  {visibleColumns.includes('balance') && <td>{item.balance}</td>}
                  {visibleColumns.includes('pmytotalAmount') && <td>{item.pmytotalAmount}</td>}
                  <td>
                    {item.paymentDetails && item.paymentDetails.length > 0 ? (
                      <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                          <thead>
                            <tr style={{ borderBottom: '1px solid #ddd', textAlign: 'left' }}>
                              <th style={{ padding: '5px', fontWeight: '480' }}>Amount</th>
                              <th style={{ padding: '5px', fontWeight: '480' }}>Mode</th>
                              <th style={{ padding: '5px', fontWeight: '480' }}>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {item.paymentDetails.map((payment, index) => (
                              <tr key={index} style={{ borderBottom: '1px solid #f0f0f0' }}>
                                <td style={{ padding: '5px' }}>₹{payment.amount}</td>
                                <td style={{ padding: '5px' }}>{payment.modeOfPayment}</td>
                                <td style={{ padding: '5px' }}>
                                  {payment.date ? format(new Date(payment.date), 'dd/MM/yyyy') : '-'}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      '-'
                    )}
                  </td>
                  {visibleColumns.includes('staffName') && <td>{item.username}</td>}
                  {visibleColumns.includes('action') && (
                    <td>
                      <Button size="xs" leftIcon={<IconEdit style={{fontSize:"12px"}} />} color="gray" onClick={() => handleEdit(item)}>
                        Edit
                      </Button>
                      <Button
                        size="xl"
                        variant="light"
                        color="red"
                        onClick={() => {
                          setDeleteId(item.bookingId);
                          setOpenModal(true);
                        }}
                        title="Remove"
                      >
                        <IconTrash size={20} />
                      </Button>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={visibleColumns.length}>No bookings found for the selected criteria</td>
              </tr>
            )}
          </tbody>
        </Table>
        <Pagination
          total={Math.ceil(filteredData.length / itemsPerPage)}
          page={activePage}
          onChange={setActivePage}
          siblings={1}
          style={{ marginTop: '20px', justifyContent: 'center', display: 'flex' }}
        />
        <Modal
          opened={openModal}
          onClose={() => setOpenModal(false)}
          title="Confirm Deletion"
        >
          <p>Are you sure you want to delete this guest record?</p>
          <Button onClick={() => setOpenModal(false)}>Cancel</Button>
          <Button
            color="red"
            onClick={() => removeBooking(deleteId)}
            style={{ marginLeft: '1rem' }}
          >
            Confirm Delete
          </Button>
        </Modal>
      </div>

      {/* Modal for Edit */}
      <Modal opened={openEditModal} onClose={() => setOpenEditModal(false)} title="Extend Booking Details">
        <TextInput
          label="Room No"
          value={editBooking?.roomNo || ''}
          onChange={(e) => setEditBooking({ ...editBooking, roomNo: e.target.value })}
        />
        <TextInput
          label="Booking Type"
          value={editBooking?.bookingType || ''}
          onChange={(e) => setEditBooking({ ...editBooking, bookingType: e.target.value })}
        />
        <TextInput
          label="No. Of Guests"
          value={editBooking?.noOfGuests || ''}
          onChange={(e) => setEditBooking({ ...editBooking, noOfGuests: e.target.value })}
        />
        <TextInput
          label="No. Of Adults"
          value={editBooking?.noOfAdults || ''}
          onChange={(e) => setEditBooking({ ...editBooking, noOfAdults: e.target.value })}
        />
        <TextInput
          label="No. Of Kids"
          value={editBooking?.noOfKids || '0'}
          onChange={(e) => setEditBooking({ ...editBooking, noOfKids: e.target.value })}
        /> 
        <TextInput
          label="PrimaryGuestName"
          value={editBooking?.primaryGuestName || ''}
          onChange={(e) => setEditBooking({ ...editBooking, primaryGuestName: e.target.value })}
        />
        <TextInput
          label="PrimaryGuestPhoneNumber"
          value={editBooking?.primaryGuestPhoneNumber || ''}
          onChange={(e) => setEditBooking({ ...editBooking, primaryGuestPhoneNumber: e.target.value })}
        />
        <TextInput
          label="PrimaryGuestIdNumber"
          value={editBooking?.primaryGuestIdNumber || ''}
          onChange={(e) => setEditBooking({ ...editBooking, primaryGuestIdNumber: e.target.value })}
        />
        {editBooking?.guestDetails?.map((guest, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <TextInput
              label={`Guest ${index + 1} Name`}
              value={guest.name || ''}
              onChange={(e) => {
                const updatedGuests = [...editBooking.guestDetails];
                updatedGuests[index].name = e.target.value;
                setEditBooking({ ...editBooking, guestDetails: updatedGuests });
              }}
            />
            <TextInput
              label={`Guest ${index + 1} Gender`}
              value={guest.gender || ''}
              onChange={(e) => {
                const updatedGuests = [...editBooking.guestDetails];
                updatedGuests[index].gender = e.target.value;
                setEditBooking({ ...editBooking, guestDetails: updatedGuests });
              }}
            />
            <Select
              label="Guest ID Proof"
              placeholder="Select identity proof"
              data={[
                { label: 'Aadhaar ID', value: 'addhar_id' },
                { label: "Driver's License", value: 'drivers_license' },
                { label: 'Passport', value: 'passport' },
                { label: 'Voter ID', value:'voter_id'}
              ]}
              value={guest.guestIdType || ''}
              onChange={(value) => {
                const updatedGuests = [...editBooking.guestDetails];
                updatedGuests[index].guestIdType = value;
                setGuestIdProof(value);
                setEditBooking({ ...editBooking, guestDetails: updatedGuests });
              }}
              style={{ marginBottom: 15 }}
            />
            <TextInput
              label={`Guest ${index + 1} ID Number`}
              placeholder="Enter ID number"
              maxLength={getMaxLength(guest.guestIdType)}
              value={formatAadhaarNumber(guest.guestIdNumber || '')}
              onChange={(e) => {
                const updatedGuests = [...editBooking.guestDetails];
                updatedGuests[index].guestIdNumber = formatAadhaarNumber(e.target.value);
                setEditBooking({ ...editBooking, guestDetails: updatedGuests });
              }}
              style={{ marginBottom: 15 }}
            />
          </div>
        ))}
        <TextInput
          label="CheckInDate"
          value={
            editBooking?.checkInDateTime
              ? format(new Date(editBooking.checkInDateTime), 'dd/MM/yyyy')
              : ''
          }
          onChange={(e) => {
            const date = new Date(editBooking?.checkInDateTime || new Date());
            const [month, day, year] = e.target.value.split('/');
            date.setMonth(parseInt(month) - 1);
            date.setDate(parseInt(day));
            date.setFullYear(parseInt(year));
            setEditBooking({ ...editBooking, checkInDateTime: date.toISOString() });
          }}
        />
        <TextInput
          label="CheckInTime"
          value={
            editBooking?.checkInDateTime
              ? format(new Date(editBooking.checkInDateTime), 'HH:mm')
              : ''
          }
          onChange={(e) => {
            const date = new Date(editBooking?.checkInDateTime || new Date());
            const [hours, minutes] = e.target.value.split(':');
            date.setHours(parseInt(hours));
            date.setMinutes(parseInt(minutes));
            setEditBooking({ ...editBooking, checkInDateTime: date.toISOString() });
          }}
        />
        <TextInput
          label="CheckOutDate"
          value={
            editBooking?.checkOutDateTime
              ? format(new Date(editBooking.checkOutDateTime), 'dd/MM/yyyy')
              : ''
          }
          onChange={(e) => {
            const date = new Date(editBooking?.checkOutDateTime || new Date());
            const [month, day, year] = e.target.value.split('/');
            date.setMonth(parseInt(month) - 1);
            date.setDate(parseInt(day));
            date.setFullYear(parseInt(year));
            setEditBooking({ ...editBooking, checkOutDateTime: date.toISOString() });
          }}
        />
        <TextInput
          label="CheckOutTime"
          value={
            editBooking?.checkOutDateTime
              ? format(new Date(editBooking.checkOutDateTime), 'HH:mm')
              : ''
          }
          onChange={(e) => {
            const date = new Date(editBooking?.checkOutDateTime || new Date());
            const [hours, minutes] = e.target.value.split(':');
            date.setHours(parseInt(hours));
            date.setMinutes(parseInt(minutes));
            setEditBooking({ ...editBooking, checkOutDateTime: date.toISOString() });
          }}
        />
        <TextInput
          label="No Of Days"
          value={editBooking?.numOfDays || ''}
          onChange={(e) => setEditBooking({ ...editBooking, numOfDays: e.target.value })}
        />
        <Select
          label="Mode of Payment"
          value={editBooking?.modeOfPayment || ''}
          onChange={(value) => setEditBooking({ ...editBooking, modeOfPayment: value })}
          data={[
            { value: 'Credit Card', label: 'Credit Card' },
            { value: 'Cash', label: 'Cash' },
            { value: 'UPI', label: 'UPI' },
          ]}
        />
        <TextInput
          label="Tarrif"
          value={editBooking?.tarrif || ''}
          onChange={(e) => setEditBooking({ ...editBooking, totalAmount: e.target.value })}
        />
        <TextInput
          label="PaidAmount"
          value={editBooking?.paidAmount || ''}
          onChange={(e) => setEditBooking({ ...editBooking, paidAmount: e.target.value })}
        />
        <TextInput
          label="Balance Amount"
          value={editBooking?.balance || ''}
          onChange={(e) => setEditBooking({ ...editBooking, balance: e.target.value })}
        />
        <TextInput
          label="Total Amount"
          value={editBooking?.pmytotalAmount || ''}
          onChange={(e) => setEditBooking({ ...editBooking, pmytotalAmount: e.target.value })}
        />
        <div style={{marginTop:"11px"}}>
          <Button onClick={handleSaveEdit} style={{backgroundColor:"red"}}>Save Changes</Button>
        </div>
      </Modal>
    </div>
  );
};

export default BookingDetailsTable;